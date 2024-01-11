import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    paragraph: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogs, setBlogs] = useState([])
  const {id} = useParams();

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
      const response = await axios.post(
        `http://localhost:3000/blog/create/${id}`,
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Response:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    console.log("Form submitted:", formData);
    console.log("Selected File:", selectedFile);
  };

  const fetchBlogs = async (e) => {
    try {
       const response = await axios.get(`http://localhost:3000/blog/${id}}`, {withCredentials:true})
       setBlogs(response)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=> {
    fetchBlogs()
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="paragraph">Paragraph</label>
          <textarea
            name="paragraph"
            value={formData.paragraph}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="photo">Photo</label>
          <input name="photo" type="file" onChange={handleFileChange} />
        </div>

        <button type="submit">Submit Blog</button>
      </form>
      <div>
       {blogs.map((blog)=>{
        <ul key={blog._id}>
            <li>{blog.title}</li>
            <li>{blog.owner.firstName}</li>
            <li>{blog.pet.name}</li>
            <img src={blog.photo} alt={blog.title} />
        </ul>
       })}
      </div>
    </div>
  );
};

export default CreateBlog;
