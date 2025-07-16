import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'
import Arrow from '../assets/svg/Arrow'
import {GradientLight} from '../components/design/Benefits'
import ClipPath from "../assets/svg/ClipPath"

const Benefits = () => {
  return (
    <Section id="features">
        <div className="container relative z-2 lg:ml-5">
            <Heading className="md:max-w-md text-center lg:max-w-2xl" title="Code Smarter, Not Harder"/>
            <div className="flex flex-wrap gap-10 mb-10">
                {benefits.map((item)=>(
                    <div 
                        key={item.id}
                        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                        style={{
                            backgroundImage: `url(${item.backgroundUrl})`
                        }}
                    >
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5  text-2xl mb-5">{item.title}</h5>
                            <p className="body-2 mb-6 text-gray-400">{item.text}</p>
                            <div className="flex items-center mt-auto">
                                <img 
                                    src={item.iconUrl}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                />
                                <p className="ml-auto font-code text-xs font-bold text-white uppercase tracking-wider">
                                    Explore More
                                </p>
                                <Arrow />
                            </div>
                        </div>
                        {item.light && <GradientLight />}
                        <div className="absolute inset-0.5 bg-black" style={{clipPath:"url(#benefits)"}} >
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                {item.imageUrl && (
                                    <img 
                                        src={item.imageUrl}
                                        alt={item.title}
                                        width={380}
                                        height={362}
                                        className="w-full object-cover h-full"
                                    />
                                )}
                            </div>
                        </div>
                        <ClipPath />    
                    </div>
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Benefits