import axios from 'axios'


export const fetchData = async () =>{
    const res = await axios.get('/PP-beefpattyonly/data/post.json');
    return res.data;
}