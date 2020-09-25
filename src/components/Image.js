import React, { useState } from "react";

const Image = ({src}) => {
    const [date, setDate] = useState("2020-09-01")
    return (
        <div>
            <button>Prev Date</button>
            <img src={src} alt="" />
            <button>Next Date</button>
        </div>
    )
}

export default Image;