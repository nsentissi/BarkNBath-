import React, { useEffect, useState } from "react";
import axiosClient from "../../../axiosClient";
import { useParams } from "react-router-dom";

import { useAuth } from "../../hooks/AuthContext";
import moment from 'moment';

import { Link } from "react-router-dom";


const CreateBlog = () => {
 
  
  const [formData, setFormData] = useState({
    title: "",
    paragraph: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const [commentsVisibility, setCommentsVisibility] = useState({});

  const formatTimeAgo = (dateString) => {
    const date = moment(dateString);
    return date.fromNow();
};

  const toggleComments = (blogId) => {
    setCommentsVisibility((prevState) => ({
      ...prevState,
      [blogId]: !prevState[blogId],
    }));
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("paragraph", formData.paragraph);
    if (selectedFile) {
      data.append("photo", selectedFile);
    }

    try {
      const response = await axiosClient.post(
        `/blog/create/${id}`,
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Response:", response);
      setBlogs([response.data, ...blogs]);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    console.log("Form submitted:", formData);
    console.log("Selected File:", selectedFile);
  };

  const fetchBlogs = async (e) => {
    try {
      const response = await axiosClient.get(`/blog/get/${id}`, {
        withCredentials: true,
      });
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll bg-neutral ">
      <div className="flex items-center justify-around py-8">
        <h4 className="text-gray-800 font-semibold text-4xl text-center ">
          Your Blogs
        </h4>
        <Link to="/dashboard">
          <button className=" ">
            <div className="flex justify-center">
              <a
                href="#_"
                className="group relative  inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-success p-4 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out"
              >
                <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-info text-white duration-300 group-hover:translate-x-0">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                  Dashboard
                </span>
                <span className="invisible relative">LOG </span>
              </a>
            </div>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
        <div className="post p-5 lg:p-1 rounded-md">
          <div className="lg:fixed lg:top-7 lg:left-14 lg:w-3/12 md:fixed md:w-5/12">
            {/* <div className=" bg-accent p-4 rounded-lg shadow-md max-w-md w-full mb-8">
              <div class="relative">
                {blogs.map((blog) => {
                  return (
                    <div className="pet-profile flex flex-col items-center justify-center">
                      <img
                        src={blog.pet.profilePhotoUrl}
                        alt={`Profile of ${blog.pet.name}`}
                        className="w-24 h-32 rounded-full mb-3  border-4 border-success"
                      />
                      <div className="pet-info flex flex-col items-center justify-center">
                        <h2 className="text-xl mb-3 font-playful font-bold text-gray-800">
                          {blog.pet.name}
                        </h2>

                        <p className="text-gray-900 mb-4 font-playful">BIO:</p>
                        <p className="text-gray-900 text-center border-2 border-success p-8 font-playful">
                          {blog.pet.Bio}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}
            <form
              onSubmit={handleSubmit}
              className="border-4 border-accent px-6 py-10 mt-60"
            >
              {/* <!-- Post Content Section --> */}
              <h3 className="text-center font-bold text-gray-700 text-xl " >
                Post a blog
              </h3>
              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Title
                </label>
                <input
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-6">
                <label
                  for="postContent"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Post Content:
                </label>
                <textarea
                  name="paragraph"
                  value={formData.paragraph}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
                    sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
              {/* <!-- File Attachment Section --> */}
              <div className="mb-6">
                <label
                  for="fileAttachment"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Attach File:
                </label>
                <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out">
                  <input
                    name="photo"
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                    <span className="ml-2 text-sm text-gray-600">
                      Choose a file
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    Max file size: 5MB
                  </span>
                </div>
              </div>
              {/* <!-- Submit Button and Character Limit Section --> */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="flex justify-center items-center bg-accent hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
                >
                  {" "}
                  Post{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    id="send"
                    fill="#fff"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 p-4  mt-3" id="posted">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {blogs.map((blog) => {
              return (
                <div>
                  {/* First Column */}
                  <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                    {/* User Info with Three-Dot Menu */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <img
                          src={blog.pet.profilePhotoUrl}
                          alt="User Avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="text-gray-800 font-semibold">
                            {blog.pet.name}
                          </p>
                          
                          <p className="text-gray-500 text-sm">
                        posted {formatTimeAgo (blog.date)} 
                          </p>{" "}

                        </div>
                      </div>
                      <div className="text-gray-500 cursor-pointer">
                        {/* Three-dot menu icon */}
                        <button className="hover:bg-gray-50 rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="7" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="17" r="1" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* Message */}
                    <div className="mb-4">
                      <p className="text-gray-800">{blog.title}</p>
                      <p className="text-gray-800">{blog.paragraph}</p>
                    </div>
                    {/* Image */}
                    <div className="mb-4">
                      <img
                        src={blog.photo}
                        alt={blog.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                    {/* Like and Comment Section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <button
                        onClick={() => toggleComments(blog._id)}
                        className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1"
                      >
                        <svg
                          width="22px"
                          height="22px"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                            ></path>
                          </g>
                        </svg>
                      </button>
                      <div className="flex items-center space-x-2">
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                          <svg
                            className="w-5 h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span>4 Likes</span>
                        </button>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      {commentsVisibility[blog._id] && (
                        <div className="px-6 py-4">
                          <h3 className="text-xl font-bold">Comments:</h3>
                          {blog.comments.length > 0 ? (
                            blog.comments.map((comment) => (
                              <div
                                key={comment._id}
                                className="border-t border-gray-200 mt-2 pt-2"
                              >
                                <p className="text-sm text-gray-600">
                                  {comment.text}
                                </p>
                                <p className="text-xs text-black">
                                  By: {comment.owner?.firstName}{" "}
                                  {comment.owner?.lastName}
                                </p>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-600">No comments yet</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
