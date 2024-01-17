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

  const fetchBlogs = async () => {
    try {
      const response = await axiosClient.get("/blog/getAll", {
        withCredentials: true,
      });
      const sortedBlogs = response.data.sort((a, b) => {
        
        return new Date(b.date) - new Date(a.date);
      });
      setBlogs(sortedBlogs);
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
    <div className=" font-playful ">
      <div className="flex items-center justify-around py-8">
        <h4 className="text-gray-800 font-bold text-xl md:text-3xl lg:text-4xl text-center ">
          Puffy Friends Blogs
        </h4>
      </div>
      <div className="flex justify-center col-span-8 mt-3" id="posted">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 ">
          {blogs.map((blog) => {
            return (
              <div>
                {/* First Column */}
                <div className="bg-success/50 p-8 rounded-lg shadow-md max-w-3xl w-11/12 mx-auto hover:-translate-y-1 duration-300">
                  {/* User Info with Three-Dot Menu */}
                  <div className="flex items-center justify-between mb-4 inline relative group">
                    <div className="flex items-center space-x-2 ">
                      <img
                        src={blog.pet?.profilePhotoUrl}
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full"
                      />

                      <div>
                        <p className="text-gray-800 font-semibold">
                          {blog.pet?.name}
                        </p>
                        <p className="text-gray-800 font-semibold text-xs">
                          Pet owner: {blog.owner?.firstName}
                        </p>
                        <p className="text-gray-500 text-xs">
                          posted {formatTimeAgo(blog.date)}
                        </p>{" "}
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                      {/* Three-dot menu icon */}
                      <button className="hover:bg-gray-50 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 fill-current text-primary"
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
                  <div className="mb-4 font-playful text-black ">
                    <p className="text-gray-800 font-bold">{blog.title}</p>
                    <p className="text-gray-800">{blog.paragraph}</p>
                  </div>
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src={blog.photo}
                      alt={blog.title}
                      className="w-full bg-center bg-cover h-96 object-cover rounded-md"
                    />
                  </div>

                  {/* Like and Comment Section */}
                  <div className="flex items-center justify-between text-gray-500">
                    <button
                      onClick={() => toggleComments(blog._id)}
                      className="flex justify-center items-center px-2 hover:bg-gray-50 rounded-full "
                    >
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current text-primary"
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
                          className="w-5 h-5 fill-current text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                       
                      </button>
                    </div>
                  </div>
                  <div className="px-2  font-playful">
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
                              <span className="text-gray-500 text-xs">
                                - {moment(comment.date).fromNow()}
                              </span>
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
