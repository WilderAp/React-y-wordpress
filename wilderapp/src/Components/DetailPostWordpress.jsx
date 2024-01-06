import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';




export default function DetailPostWordpress() {
    const wordPressUrl = "http://localhost/wordpress/wp-json/wp/v2/posts/";
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        try {
            axios(`${wordPressUrl}${id}`).then(({ data }) => {
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
                <div className='card-title'>Titulo: {post.title?.rendered}</div>
                <h3>Author: {post.author}</h3>
                <p>id: {post.id}</p>
                <div className="card-text" dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
            </div>
        }
    </div>
  )
}
