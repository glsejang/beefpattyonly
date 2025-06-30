import axios from 'axios'

const basePath = import.meta.env.MODE === 'production' ? '/beefpattyonly' : '';

export const fetchData = async () =>{
    const res = await axios.get(`${basePath}/data/post.json`);

    return res.data;
}