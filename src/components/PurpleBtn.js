import React from 'react'

const PurpleBtn = (props) => {
    return (
        <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                <svg className=" group-hover:text-gray-300 mr-4 h-6 w-6" fill={props.fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path xmlns="http://www.w3.org/2000/svg" d={props.svg} />
                </svg>
                {props.text}
            </a>
        </div>
    )
}

export default PurpleBtn
