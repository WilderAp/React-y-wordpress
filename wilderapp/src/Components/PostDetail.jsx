import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "../css/detail.css";

export default function PostDetail() {

    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        try {
            axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({ data }) => {
             if (data.id) {
                 setPost(data);
             }
            });
            return setPost({});
        } catch (error) {
            console.log(error.message);   
        }
            
    }, [id]);

  return (
    <div className='Detail'>
        {
            post && <div className='DetailInfo'>
                <h1>Usuario: {post.userId}</h1>
                <h3>id: {post.id}</h3>
                <h1>Titulo: {post.title}</h1>
                <p>Descripción: {post.body}</p>
            </div>
        }
    </div>
  )
}
