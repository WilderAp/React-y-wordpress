import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/posts.css"




// import React from 'react'

export default function WordpressPosts() {
    const wordPressUrl = "http://localhost/wordpress/";

    const [post, setPosts] = useState([]);

    useEffect(() => {
        getList();
    }, [])


    const getList = async () => {
        try {
            const lista = (await axios.get(`${wordPressUrl}wp-json/wp/v2/posts`)).data
            console.log(lista);
            setPosts(lista)
            return lista;
            
        } catch (error) {
            console.log(error.message);
        }
    }
    console.log(post);

    return (
        <main className="list">
                {
                post.length && <div className="post-container"> {post.map((post) =>
                    <div key={post.id} className="post">
                        <div className="card-header">{post.title.rendered}</div> 
                        <div className="card-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        <Link to={`/post/${post.id}`}>
                            <button className="detailButton">DETAILS</button>
                        </Link>
                    </div>
                    )}
                    </div>
                }
        </main>
    )
}