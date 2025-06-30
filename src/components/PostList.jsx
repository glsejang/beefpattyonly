import { useSelector } from 'react-redux'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useSearchParams, Navigate } from 'react-router-dom'



function MainPost(props){
    const navigate = useNavigate();

    const page = useSelector((state) => state.page.value)  
    const [post, setPost] = useState([])

    useEffect(()=>{
        axios.get(`${basePath}/data/post.json`)
        .then((res) =>{
            if( page == "Home"){
                const preview = res.data.slice(0,5)
                setPost(preview)
            } else {

            
            const filtered =res.data.filter((item)=> item.category == page)
            setPost(filtered)
            }
        })
        .catch((err)=>{
            console.log('에러',err)
        })

    },[page])


    return(
        <>
            <div className="main_post">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th> {page === 'Home' ? <p>최신글</p> : null}  </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((geul, i)=>{
                            console.log(geul)
                            return(
                                
                                <tr key={geul.id}>
                                    <td><img src={geul.img} alt="" /></td>
                                    <td> 
                                        <h4 onClick={()=>navigate(`/post/${geul.id}`)}>{geul.title}</h4>
                                        <p>{geul.content.slice(0,300)}</p>
                                    </td>
                                    <td>{geul.date}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}






export default MainPost