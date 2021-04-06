import React from 'react'

const WhiteBtn = (props) => {
    return (
        <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href={props.link} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                <svg className="group-hover:text-gray-300 mr-4 h-6 w-6" stroke-width={props.strokeWidth} fill={props.fill} stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path xmlns="http://www.w3.org/2000/svg" d={props.svg} />
                </svg>
                {props.text}
            </a>
        </div>
    )
}

export default WhiteBtn
