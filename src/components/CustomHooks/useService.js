import { useState, useEffect } from 'react'
import axios from 'axios'

const useService = id => {
    
    const [service, setService] = useState({})

    useEffect( () => {
        axios.get(`https://my-json-server.typicode.com/PercyTuncar/services/services/${id}`)
        .then(resp => setService(resp.data))
    },[])
    return service
}

export default useService