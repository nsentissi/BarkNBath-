import React, { useEffect, useState } from "react";
import axiosClient from "../../../axiosClient";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import moment from "moment";

import "./createBlog.css"

import trashapp from "../../assets/trashapp.svg";


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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const data = new FormData();
    data.append("title", formData.title);
    data.append("paragraph", formData.paragraph);
    data.append("petId", id);
    if (selectedFile) {
      data.append("photo", selectedFile);
    }

    try {
      const response = await axiosClient.post(`/blog/create`, data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", response);
      setBlogs([response.data, ...blogs]);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
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

  const deleteBlog = async (blogId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      await axiosClient.delete(`/blog/delete/${blogId}`);
      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className=" ">
      <div className="flex flex-col items-center justify-around py-8">
        <h4 className="text-gray-800 font-semibold text-4xl text-center ">
          Your Blogs
        </h4>

        <p className="mt-4">Share your experience with others</p>

      </div>

      <div className="">
        <div className="w-full px-16" id="posted">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-1  ">
            <form
              onSubmit={handleSubmit}
              className="border-4 border-primary p-8"
            >
              {/* <!-- Post Content Section --> */}
              <h3 className="text-center font-bold text-gray-700 text-xl ">
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
              {isLoading && (
                <div className="flex justify-center items-center my-2">
                  <div className="loader"></div>
                </div>
              )}
              {/* <!-- Submit Button and Character Limit Section --> */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isLoading} 
                  className="flex justify-center items-center bg-accent hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
                >
                  {isLoading ? (
                    <span>Posting...</span>
                  ) : (
                    <>
                      Post
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
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-center col-span-8 mt-8" id="posted">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 ">
            {blogs.map((blog) => {
              return (
                <div className="">
                  {/* First Column */}
                  <div className="bg-success/50  p-8 rounded-lg shadow-md max-w-md cursor-pointer w-full hover:-translate-y-1 duration-300">
                    {/* User Info with Three-Dot Menu */}
                    <div className="flex items-center justify-between mb-4 inline relative group">
                    <div className="flex items-center space-x-2 ">
                      <img
                        src={blog.pet?.profilePhotoUrl}
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full"
                        
                      />
                    
                      <div>

                        <p className="text-gray-800 font-semibold">
                          {blog.pet?.name}

                        </p>
                        
                        
                        <p className="text-gray-500 text-xs">
                          posted {formatTimeAgo(blog.date)}
                        </p>{" "}
                      </div>
                      <button onClick={() => deleteBlog(blog._id)}>
                          <img src={trashapp} className="w-6 ml-36" />
                        </button>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                      
                    </div>
                  </div>
                  {/* Message */}
                  <div className="mb-4 font-playful text-black ">
                    <p className="text-gray-800 font-bold">{blog.title}</p>
                    <p className="text-gray-800">{blog.paragraph}</p>
                  </div>
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src={blog.photo}
                      alt={blog.title}
                      className="w-full bg-center bg-cover h-58 object-cover rounded-md"
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
                      
                    </div>
                    <div className="px-6 py-4">
                      {commentsVisibility[blog._id] && (
                         <div className="">
                         <h3 className="text-sm font-bold">Comments:</h3>
                         {blog.comments.length > 0 ? (
                           blog.comments.map((comment) => (
                             <div
                               key={comment._id}
                               className="mt-1 pt-2 border-t "
                             >
                                  <p className="text-xs font-semibold mt-1 text-black">
                               {comment.author?.firstName} {comment.author?.lastName}
                               </p>
                               <p className="text-sm font-bold text-primary italic font-bold">
                                 {comment.text}
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
