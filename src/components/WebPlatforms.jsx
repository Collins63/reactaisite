import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { webPlatforms } from '../constants'
import { check2, grid } from '../assets'
import TagLine from './Tagline'
import { Button } from './Button'

const WebPlatforms = () => {
  return (
    <Section crosses className="overflow-hidden" id="web-platforms">
      <div className="container md:pb-10">
        <Heading tag="Delivered work" title="Web platforms" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4">
          {webPlatforms.map((item) => (
            <div className="md:flex p-0.25 rounded-[2.5rem] bg-gray-300" key={item.id}>
              <div className="relative flex flex-col w-full p-8 bg-neutral-900 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
                </div>
                <div className="relative z-1 flex flex-col flex-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8">
                    <TagLine className="text-white">{item.date}</TagLine>
                    <div className="flex items-center px-4 py-1 bg-gray-200 rounded text-n-8">
                      <img className="mr-2.5" src={check2} width={16} height={16} alt="Live" />
                      <div className="tagline">Live</div>
                    </div>
                  </div>

                  <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
                    <img
                      className="w-full object-cover"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4 text-white">{item.title}</h4>
                  <p className="body-2 text-gray-400">{item.text}</p>

                  <div className="flex mt-5 flex-row">
                    {(item.languages ?? []).map((language, index) => (
                      <div className="bg-transparent p-1 rounded-full" key={index}>
                        <img src={language} alt="" width={30} height={30} />
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <Button href={item.siteUrl} target="_blank" rel="noopener noreferrer">
                      View Site
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default WebPlatforms
