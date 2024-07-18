import React, { useEffect, useState } from 'react'
import axios, {AxiosRequestConfig} from "axios";
import {todolistAPI} from "../api/api";

export default {
    title: 'API',
}

const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: {
        'API-KEY': '6aea3990-cfbe-4637-925f-a2fbc8456a85'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = todolistAPI.getTodolists()

        promise.then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = (title: string) => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data.data.item)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = 'c6c5a57b-dd4d-47b3-85ec-ce068898bc51'

        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = (title: string) => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = 'dc4ff847-f086-48f5-9f55-775ce50df717'

        todolistAPI.updateTodolist(title,todolistId)
            .then((res) => {
                setState(res.data.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}