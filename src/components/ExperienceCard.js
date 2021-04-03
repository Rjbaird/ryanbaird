import React from 'react'

const ExperienceCard = (props) => {
    return (
        <div className="py-8 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-indigo-900 lg:pr-16">
            <h2 className="text-base text-2xl font-semibold tracking-wider text-indigo-500 uppercase">
                {props.title}
            </h2>
            <h3 className="text-base text-xl font-bold tracking-wider text-white uppercase">
                {props.company}
            </h3>
            {/* <div className="mt-6 md:flex-grow md:flex md:flex-col"> */}
                <div className="mt-8 md:flex-grow md:flex md:flex-col">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                            <img className="h-12 w-12 rounded-full" src={props.icon} alt={props.alt} />
                        </div>
                        <div className="ml-4">
                            <div className="text-base font-medium text-white">{props.time}</div>
                            <div className="text-base font-medium text-indigo-200">{props.location}</div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:flex-grow md:flex md:flex-col">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                        <p className="relative">
                            {props.data}
                        </p>
                    </div>
                </div>
            {/* </div> */}
        </div >
    )
}

export default ExperienceCard
