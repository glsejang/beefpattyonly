import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux'




function Daemoon(){

    const page = useSelector((state) => state.page.value)  


    return(
        <div className={`daemoon_box ${page}`}>
            <h1>{page} </h1>
        </div>
    )
}


export default Daemoon