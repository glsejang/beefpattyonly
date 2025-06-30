import MainPost from "../components/PostList"
import { useSelector } from 'react-redux'
import axios from "axios";
import { useEffect, useState } from 'react';
import Daemoon from "../components/Daemoon";
import { Routes, Route, Link, useNavigate, Outlet, useSearchParams, useParams  } from 'react-router-dom'
import { fetchData } from "../api/fetchdata";



function Post(){
    const { id } = useParams(); 
    console.log(id)
    const [post, setPost] = useState(null)
    useEffect(()=>{
        fetchData()
        .then(data=>{
            console.log(data)
            const found = data.find((data)=> data.id === id)
            setPost(found)
        })
    },[id])

    if (!post) return <p>로딩 중...</p>;


    return(
        <>
            <article>
                <div className="topInfo">{post.title}</div>
                <div className="content">{post.content}</div>
                <div className="botInfo">
                    <span>{post.date}</span>
                    <span>{post.category}</span>
                </div>

            </article>
        </>
    )
}


export default Post