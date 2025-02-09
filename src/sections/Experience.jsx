import { Canvas } from '@react-three/fiber'
import React from 'react'
import { workExperiences } from '../constants'

function Experience() {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600 flex align-middle justify-center items-center flex-col">
        <h3 className="head-text">My Work Experience</h3>

        {/* <div className="work-container "> */}
        <div className="mt-20 w-[900px]">
          {/* <div className="work-canvas">
            <Canvas></Canvas>
          </div> */}
          <div className="work-content ">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5 bg-reed-400">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience