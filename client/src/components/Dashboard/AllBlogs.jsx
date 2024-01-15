import React, { useEffect, useState } from "react";
import axiosClient from "../../../axiosClient";
import { useAuth } from "../../hooks/AuthContext";
import CommentForm from "./CommentForm";
import moment from "moment";
import { Link } from "react-router-dom";


const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [commentsVisibility, setCommentsVisibility] = useState({});
  const toggleComments = (blogId) => {
    setCommentsVisibility((prevState) => ({
      ...prevState,
      [blogId]: !prevState[blogId],
    }));
  };
  const [formData, setFormData] = useState({
    title: "",
    paragraph: "",
  });

  const formatTimeAgo = (dateString) => {
    const date = moment(dateString);
    return date.fromNow();
  };

  const fetchBlogs = async (e) => {
    try {
      const response = await axiosClient.get("/blog/getAll", {
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

  const addComment = async (blogId, text) => {
    try {
      const response = await axiosClient.post(
        `/blog/${blogId}/comment`,
        { text },
        { withCredentials: true }
      );
      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
        <div className="flex items-center justify-around py-8">
        <h4 className="text-gray-800 font-semibold text-xl md:text-3xl lg:text-4xl text-center ">
          Puffy Friends Blogs
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
      <div className="lg:col-span-3  p-32 mt-3" id="posted">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
                        <p className="text-gray-800 font-semibold">
                        Pet owner: {" "}{blog.owner?.firstName}
                        </p>
                        
                        <p className="text-gray-500 text-sm">
                          posted {formatTimeAgo(blog.date)}
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
                                 <p className="text-xs text-black">
                              By: {comment.author?.firstName} {comment.author?.lastName}
                              </p>
                              <p className="text-xl text-black font-bold">
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
                  <CommentForm blogId={blog._id} onCommentSubmit={addComment} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
    </div>
  );
};

export default AllBlogs;
