import MainPost from "../components/PostList"
import { useSelector } from 'react-redux'
import axios from "axios";
import { useEffect, useState } from 'react';
import Daemoon from "../components/Daemoon";




function Burgers(){

    return(
        <>
            <Daemoon/>
            <MainPost/>
        </>
    )
}


export default Burgers