const express = require("express");
const {
  addBlogPost,
  getAllBlogPosts,
  deleteBlogPost,
  addComment,
  getComments,
  getBlogsByPetId
} = require("../controllers/blog");
const blogRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const upload = require("../middlewares/cloudinaryConfig");

blogRouter.post(
  "/create",
  upload.single("photo"),
  verifyToken,
  addBlogPost
);
blogRouter.get("/getAll", verifyToken, getAllBlogPosts);
blogRouter.delete("/delete/:blogId", verifyToken, deleteBlogPost);
blogRouter.post("/:blogId/comment", verifyToken, addComment);
blogRouter.get("/:blogId/comments", verifyToken, getComments);
blogRouter.get("/get/:petId", verifyToken, getBlogsByPetId )


module.exports = blogRouter;
