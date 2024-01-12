import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/AuthContext";
import CommentForm from "./CommentForm";

const AllBlogs = () => {

const [blogs, setBlogs] = useState([])


const fetchBlogs = async (e) => {
    try {
        const response = await axios.get('http://localhost:3000/blog/getAll', {withCredentials:true});
        console.log(response.data)
        setBlogs(response.data)
    } catch (error) {
        console.log(error.response)
    }
}

useEffect(()=>{
    fetchBlogs();
}, [])

const addComment = async (blogId, text) => {
    try {
        const response = await axios.post(`http://localhost:3000/blog/${blogId}/comment`, { text }, { withCredentials: true });
        fetchBlogs(); 
    } catch (error) {
        console.error(error);
    }
};

  return (
    <div className="container mx-auto p-5">
        <h2 className="text-2xl font-bold text-center mb-10">Blogs</h2>
        <div className="grid md:grid-cols-3 gap-4">
            {blogs.map((blog) => (
                <div key={blog._id} className="max-w-sm rounded overflow-hidden shadow-lg m-3">
                    <img className="w-full" src={blog.photo} alt={blog.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{blog.title}</div>
                        <p className="text-gray-700 text-base">{blog.paragraph}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{blog.owner?.firstName}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{blog.pet?.name}</span>
                    </div>
                    <div className="px-6 py-4">
                        <h3 className="text-xl font-bold">Comments:</h3>
                        {blog.comments.length > 0 ? (
                            blog.comments.map((comment) => (
                                <div key={comment._id} className="border-t border-gray-200 mt-2 pt-2">
                                    <p className="text-sm text-gray-600">{comment.text}</p>
                                    <p className="text-xs text-gray-500">By: {comment.author.firstName} {comment.author.lastName}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No comments yet</p>
                        )}
                    </div>
                    <CommentForm blogId={blog._id} onCommentSubmit={addComment} />
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default AllBlogs
