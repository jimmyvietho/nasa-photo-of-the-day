import React from "react";
import styled from "styled-components"

const ImageDiv = styled.div `

`

const Image = ({src}) => {
   
    return (
    <ImageDiv>
        <div>
            <button>Prev Date</button>
            
            <img src={src} alt="" />
          
            <button>Next Date</button>
        </div>  
        </ImageDiv>
    )
}

export default Image;