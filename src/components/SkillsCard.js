import React from 'react'

const SkillsCard = (props) => {
    return (
        <div className="pt-6">
        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div className="-mt-6">
                <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={props.svg} />
                        </svg>
                    </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{props.title}</h3>
                <p className="mt-5 text-base text-gray-500">
                {props.data}
                </p>
            </div>
        </div>
    </div>
    )
}

export default SkillsCard
