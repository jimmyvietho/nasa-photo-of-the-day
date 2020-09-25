import React from "react";
import axios from "axios";

const Image = () => {
    axios.get("https://api.nasa.gov/planetary/apod")
        .then( (response) => {console.log(response)})
        .catch( (err) => {console.log(err)})

    return (
        
    )
}

export default Image;