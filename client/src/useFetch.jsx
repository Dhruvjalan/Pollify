

import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch=(url)=>{

    const [data,setData]=useState(null)
    const[isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const abortCont = new AbortController();
        
            axios.post(url, {signal: abortCont.signal})
        .then(res=>{
            if(res.status !== 200){
                throw Error("Could not Fetch Your Resource")
            }
            return res.data;
        })
        .then(data=>{
            console.log(data);
            setData(data);
            setIsPending(false);
        }).catch(err=>{
            if(err.name==='AbortError'){
                console.log("Fetch Aborted")
            }else{
                console.log(err.message);
                console.log(err);
                setError(err.message);
            setIsPending(false);
            }
        })
        
        return ()=>abortCont.abort()
        
        },[url])

    return {data, isPending, error};
}

export default useFetch