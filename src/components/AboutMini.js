import React from 'react'

const AboutMini = (props) => {
    return (
        <div className="space-y-5 sm:space-y-4 py-4">
            <h2 className="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">{props.header}</h2>
            <p className="text-xl text-gray-500">
            {props.data}
            </p>
        </div>
    )
}

export default AboutMini
