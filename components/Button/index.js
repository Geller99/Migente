import React from 'react'

const variants = [
    "fill",
    "outline",
    "bw"
]
function Button({
    value = "",
    variant = variants[0]
}) {
    return (
        <div className={`custom-button ${variant}`}>
            <div className={`main-button ${variant}`}>
                <div className='title'>{value}</div>
            </div>

            <div className='outline-distorted'></div>
        </div>
    )
}

export default Button