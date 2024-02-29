import { useState, useEffect } from 'react'
import { server_calls_folk } from '../api/server_folk'
import { server_calls_rock } from '../api/server_rock'
import { server_calls_rhythm } from '../api/server_rhythm'

export const useGetData_folk = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls_folk.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch}
}

//--------------------------------------------------- 

export const useGetData_rock = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls_rock.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch}
}

//--------------------------------------------------- 

export const useGetData_rhythm = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls_rhythm.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch}
}

//--------------------------------------------------- 