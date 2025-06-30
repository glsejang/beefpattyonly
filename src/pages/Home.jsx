import axios from "axios"
import { useEffect } from "react"
import { fetchData } from "../api/fetchdata"
import { useState,  } from 'react'
import MainPost from "../components/PostList" 

function Home(){

    const [post, setPost] = useState([])
    useEffect(()=>{
        fetchData()
        .then((data)=>{
            setPost(data)
        })
    },[])
    


    return(
        <>
            <div className="home_preview">
                <div className="hero">
                    <p>햄버거의 근본, 진한 고기맛의 비프 패티만 취급합니다. </p>
                    <p>사실 다른 버거(샌드위치)도 취급합니다. </p>
                    <p>칼로 썰어먹는 수제버거는 취급하지 않습니다.</p>                    
                </div>


                <div className="preview">
                    <MainPost/>
                </div>
            </div>
            
        
        


        </>
    )
}



export default Home