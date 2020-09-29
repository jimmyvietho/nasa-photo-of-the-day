import React, { useState, useEffect } from 'react'
import Date from "./Date"
import Image from "./Image"
import Text from "./Text"
import axios from "axios"


const Data = () => {
    const [picInfo, setPicInfo] = useState("2020-09-28")
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=2Qk2u4DxQo5N5LWbY5N5dEsU8bLAE8COuKa4fGxR&date=${picInfo}`)
        .then( (response) => { 
            console.log(response.data)
            setPicInfo(response.data)

        })
        .catch( (err) => {console.log(err)})

    }, [])

    return (
        <div>
            <Date date={picInfo.date}/>
            <Image src={picInfo.url}/>
            <Text desc={picInfo.explanation}/>
        </div>
    )
}

export default Data
