import React from 'react'

const Header = (props) => {
    return (
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base text-2xl font-semibold tracking-wider text-indigo-600 uppercase">
                {props.header_sm}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl">
                {props.header_lg}
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                {props.subtext}
            </p>
        </div>
    )
}

export default Header
