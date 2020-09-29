import React from "react";
import styled from "styled-components"
const TextDiv = styled.div `
background: lightgrey;
margin-top: 1rem;
padding: 1rem;
`

const Text = ({desc}) => {
    return (
        <TextDiv>
        <div>  
            <h2>On this day...</h2>
            <p>
                {desc}
            </p>
        </div>
        </TextDiv>
    )
}

export default Text;