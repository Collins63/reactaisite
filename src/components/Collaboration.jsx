import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check, coding1 } from '../assets'
import { Button } from './Button'
import { LeftCurve, RightCurve } from '../../../../Downloads/brainwave-main/brainwave-main/src/components/design/Collaboration'
import { BottomLine } from './design/Hero'

const Collaboration = () => {
  return (
    <Section crosses className="mt-5 bg-neutral-950 ">
        <div className="container lg:flex lg:ml-12">
            <div className="max-w-[25rem]">
                <h2 className='h2 mb-4 text-white md:mb-8'>
                    "Unleash the power of programming with me. Boost your productivity with modern tools and programming technologies"
                </h2>
                <ul className='max-w-[22rem] mb-10 md:mb-14'>
                    {
                        collabContent.map((item) => (
                            <li className='mb-3 py-3' key={item.id}>
                                <div className='flex items-center'>
                                    <img src={check} alt="check" width={24} height={24} />
                                    <h6 className='body-2 text-white ml-5'>{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className='body-2 mt-3 text-gray-400'>{item.text}</p>
                                )}
                            </li>
                        ))
                    }
                </ul>
                <Button> Try It Now</Button>
            </div>
            <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                <p className='body-2 mb-4 text-gray-400 md:mb-6 lg:mb-32 lg:w-[22rem] lg:mx-auto'>{collabText}</p>
                <div className='relative left-1/2 flex w-[22rem] aspect-square border border-gray-700
                rounded-full -translate-x-1/2 scale-75 md:scale-100'>
                    <div className='flex w-60 aspect-square m-auto border border-gray-700 rounded-full'>
                        <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                            <div className='flex items-center justify-center w-full h-full bg-gray-900 rounded-full'>
                                <img src={coding1} width={48} height={48} alt="brainwave" />
                            </div>
                        </div>
                    </div>
                    <ul>
                        {collabApps.map((app, index) => (
                            <li
                            key={app.id}
                            className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                            style={{ transform: `rotate(${index * 45}deg)` }} // <-- rotation at runtime
                            >
                            <div
                                className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-gray-300 rounded-xl"
                                style={{ transform: `rotate(-${index * 45}deg)` }} // <-- keep icons upright
                            >
                                <img
                                src={app.icon}
                                alt={app.title}
                                className="m-auto"
                                width={app.width}
                                height={app.height}
                                /> 
                            </div>
                            </li>
                        ))}
                    </ul>
                    <LeftCurve />
                    <RightCurve />
                </div>
            </div>
        </div>
        
    </Section>
  )
}

export default Collaboration