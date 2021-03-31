import React from 'react'

const ExperienceCard = (props) => {
    return (
        <div className="py-8 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10  md:border-indigo-900 lg:pr-16">
            <div className="md:flex-shrink-0">
                {/* <img className="h-12" src="" alt="Tuple"> */}
            </div>
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                    Deploy faster
            </h2>
            <div className="mt-6 md:flex-grow md:flex md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">

                    <p className="relative">
                        {props.data}
                    </p>
                </div>
                <footer className="mt-8">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                            {/* <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=1Q58JdKz5f&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                        </div>
                        <div className="ml-4">
                            <div className="text-base font-medium text-white">{props.time}</div>
                            <div className="text-base font-medium text-indigo-200">{props.location}</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default ExperienceCard
