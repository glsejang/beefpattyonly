import MainPost from "../components/PostList"
import { useSearchParams } from 'react-router-dom';

import Daemoon from "../components/Daemoon";


function Others(){
    
    return(
        <>
            <Daemoon/>
            <MainPost/>
        </>
    )
}


export default Others