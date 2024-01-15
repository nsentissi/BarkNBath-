const Blog = require("../models/blog");
const ErrorResponse = require("../utils/ErrorResponse");
const Pet = require("../models/pet");

const addBlogPost = async (req, res, next) => {
  try {
    const { petId } = req.params;
    const { title, paragraph } = req.body;
    const owner = req.user.id;
    const photo = req.file.path;

    const pet = await Pet.findById(petId);
    if (!pet || pet.owner.toString() !== owner.toString()) {
      throw new ErrorResponse("Pet not found", 404);
    }

    const newBlogPost = new Blog({
      owner,
      pet: petId,
      title,
      paragraph,
      photo,
    });

    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    next(error);
  }
};

const getBlogsByPetId = async (req, res) => {
  try {
    const { petId } = req.params;
    const blogs = await Blog.find({ pet: petId })
      .populate("owner", "firstName lastName")
      .populate("pet", "name Bio profilePhotoUrl");

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blogs", error: error });
  }
};

const getAllBlogPosts = async (req, res, next) => {
  try {
    const currentUserId = req.user.id;

    const blogPosts = await Blog.find({ owner: { $ne: currentUserId } })
      .populate({
        path: "owner",
        match: { isActive: true },
        select: "firstName lastName",
      })
      .populate("pet", "name profilePhotoUrl")
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "firstName lastName",
        },
      });

    const activeBlogPosts = blogPosts.filter((post) => post.owner);

    res.status(200).json(activeBlogPosts);
  } catch (error) {
    next(error);
  }
};

const deleteBlogPost = async (req, res, next) => {
  try {
    const { blogPostId } = req.params;

    const deletedBlogPost = await Blog.findByIdAndDelete(blogPostId);

    if (!deletedBlogPost) {
      throw new ErrorResponse("Blog post not found", 404);
    }

    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const addComment = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    const { text } = req.body;
    const author = req.user.id;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new ErrorResponse("Blog post not found", 404);
    }

    const newComment = { author, text };
    blog.comments.push(newComment);

    await blog.save();
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};

const getComments = async (req, res, next) => {
  try {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId).populate(
      "comments.author",
      "firstName lastName"
    );
    if (!blog) {
      throw new ErrorResponse("Blog post not found", 404);
    }

    res.status(200).json(blog.comments);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBlogPost,
  getAllBlogPosts,
  deleteBlogPost,
  addComment,
  getComments,
  getBlogsByPetId,
};
