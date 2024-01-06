import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/posts.css"



export default function Postlist() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getList();
    }, [])


    const getList = async () => {
        try {
            const lista = (await axios.get("https://jsonplaceholder.typicode.com/posts")).data
            setList(lista)
            return lista;
            
        } catch (error) {
            console.log(error.message);
        }
    }
    // console.log(list);

    return (
        <main className="list">
                {
                list.map((post) =>
                    <div key={post.id} className="postsList">
                        <h3>Title: {post.title}</h3> 
                        <p>Message: {post.body}</p>
                        <Link to={`/detail/${post.id}`}>
                            <button className="detailButton">DETAILS</button>
                        </Link>
                    </div>
                    )
                }
        </main>
    )
}
