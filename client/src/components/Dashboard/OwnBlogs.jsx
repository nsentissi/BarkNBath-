const OwnBlogs = () => {
    return (         
        <div className="flex justify-center col-span-8 mt-3" id="posted">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 ">
      {blogs.map((blog) => {
        return (
          <div>
            {/* First Column */}
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
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
                  <button onClick={() => deleteBlog(blog._id)}>
                    <img src={trashapp} />
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
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
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
  </div> );
}
 
export default OwnBlogs;