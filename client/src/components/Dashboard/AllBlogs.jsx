import React, { useEffect, useState } from "react";
import axios from "axios";

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
})

  return (
    <div>
      
    </div>
  )
}

export default AllBlogs
