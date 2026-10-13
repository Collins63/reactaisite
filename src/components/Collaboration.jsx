import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check, coding1, grid } from '../assets'
import { IconBrandReact, IconServer, IconBrain, IconApi, IconCode } from '@tabler/icons-react'
import PlusSvg from '../assets/svg/PlusSvg'
import { Button } from './Button'
import { LeftCurve, RightCurve } from './design/Collaboration'
import { BottomLine } from './design/Hero'

const collabIcons = {
    '0': IconBrandReact,
    '1': IconServer,
    '2': IconBrain,
    '3': IconApi,
}

const Collaboration = () => {
  return (
    <Section crosses className="mt-5 bg-neutral-950 ">
        <div className="container lg:flex lg:ml-12">
            <div className="max-w-[25rem]">
                <h2 className='h2 mb-4 text-white md:mb-8'>
                    "Unleash the power of programming with me , boost your productivity."
                </h2>
                
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
        <ul className='container mt-10 md:mt-40 mb-10 md:mb-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
            {collabContent.map((item) => {
                const Icon = collabIcons[item.id] || IconCode
                return (
                    <li key={item.id} className='relative p-0.25 border border-gray-800'>
                        <PlusSvg className='absolute -top-[5.5px] -left-[5.5px] z-2 pointer-events-none' />
                        <PlusSvg className='absolute -top-[5.5px] -right-[5.5px] z-2 pointer-events-none' />
                        <PlusSvg className='absolute -bottom-[5.5px] -left-[5.5px] z-2 pointer-events-none' />
                        <PlusSvg className='absolute -bottom-[5.5px] -right-[5.5px] z-2 pointer-events-none' />
                        <div className='relative flex h-full flex-col overflow-hidden  bg-neutral-900'>
                            <div className='relative m-4 mb-0 flex h-40 items-center justify-center overflow-hidden border border-stroke-1 bg-[radial-gradient(circle_at_30%_20%,rgba(172,106,255,0.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,119,230,0.25),transparent_60%)]'>
                                <img className='absolute inset-0 w-full opacity-20 pointer-events-none' src={grid} width={550} height={550} alt='' />
                                <Icon className='relative h-14 w-14 text-white' stroke={1.2} />
                            </div>

                            <div className='flex flex-1 flex-col p-6'>
                                <h4 className='h5 mb-3 text-white'>{item.title}</h4>
                                <p className='body-2 mb-5 text-gray-400'>{item.text}</p>

                                <div className='mb-6 flex flex-wrap gap-2'>
                                    {item.tags?.map((tag) => (
                                        <span key={tag} className='rounded-xl border border-stroke-1 bg-white/5 px-3 py-1 text-xs text-gray-300'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className='mt-auto border-t border-stroke-1 pt-5'>
                                    <a href='#roadmap' className='inline-flex items-center gap-2 rounded-xl border border-stroke-1 bg-white/5 px-4 py-2 text-sm font-medium text-white'>
                                        <img src={check} alt='' width={18} height={18} />
                                        View projects
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    </Section>
  )
}

export default Collaboration