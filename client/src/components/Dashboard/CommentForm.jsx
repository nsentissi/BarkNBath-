import React, {useState} from "react";
import { useAuth } from "../../hooks/AuthContext";

const CommentForm = ({ blogId, onCommentSubmit }) => {
  const [text, setText] = useState("");
  const { currentUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(blogId, text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <p>
        {currentUser.firstName} {currentUser.lastName}{" "}
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
