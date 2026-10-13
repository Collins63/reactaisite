import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { roadmap } from '../constants'
import { check, check2, grid, loading1 } from '../assets'
import TagLine from './Tagline'
import { Gradient } from './design/Hero'
import { Button } from './Button'


const Roadmap = () => {
  return (
    <Section crosses className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What I'm working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "transition-colors" : "bg-gray-300"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-neutral-900 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">

                    <TagLine className='text-white'>{item.date}</TagLine>

                    <div className="flex items-center px-4 py-1 bg-gray-200 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-5 -my-10 -mx-15 flex justify-center">
                    <img 
                      className="w-75 left-10"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4 text-white">{item.title}</h4>
                  <p className="body-2 text-gray-400">{item.text}</p>
                  <div className='flex mt-5 flex-row'>
                    {(item.languages ?? []).map((language,index) => (
                      <div className='bg-transparent p-1 rounded-full' key={index}>
                        <img src={language}
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button>My Products</Button>
      </div>
    </div>
  </Section>
  )
}

export default Roadmap