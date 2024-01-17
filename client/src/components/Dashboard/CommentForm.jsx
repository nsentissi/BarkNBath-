import React, {useState} from "react";
import { useAuth } from "../../hooks/AuthContext";

const CommentForm = ({ blogId, onCommentSubmit }) => {
  const [text, setText] = useState("");
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCommentSubmit(blogId, text);
    setText(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 font-playful">
      <p className=" font-bold text-gray-800 mb-2">
        {currentUser.firstName} {currentUser.lastName}{" "}
      </p>
      
      <div class="relative">
  <textarea
    class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 pl-8"
    placeholder="Add your comment here..."
    value={text}
    onChange={(e) => setText(e.target.value)}

  ></textarea>
  <svg
    class="w-5 h-5 absolute left-2 top-2 text-green-500"
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
    />
  </svg>
</div>

      <button  type="submit" className="focus:outline-none mt-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
