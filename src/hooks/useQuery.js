import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useQuery = (url) => {
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState()
    
    useEffect(()=>{
        let here = true
        setLoading(true)
        
        axios.get(url)
        .then(res =>{
            if(!here) return;
            setData(res.data)
        })
        .catch(err => {
            if(!here) return;
            setError(err.response.data.msg)
        })
        .finally(()=>{
            if(!here) return;
            setLoading(false)
        })
    },[url])
    return {data, loading, error}
}

export default useQuery