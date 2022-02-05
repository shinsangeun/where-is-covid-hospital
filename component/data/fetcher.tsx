import axios from 'axios';
import convert from 'xml-js';

const fetcher = (url: string) => {
    // @ts-ignore
    axios.get(url, {headers: {'Access-Control-Allow-Origin' : "*", 'Access-Control-Allow-Headers': "*", 'Content-Type' : "application/xml"}})
        .then(res => res)
}

export default fetcher;