import axios from 'axios'


export const fetchData = async () =>{
    const res = await axios.get('/data/post.json');
    return res.data;
}