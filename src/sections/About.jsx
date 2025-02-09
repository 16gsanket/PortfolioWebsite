// import React, { useState } from "react";
// import Globe from "react-globe.gl";
// import Button from "../component/Button";

// function About() {
//   const [hasCopied, sethasCopied] = useState(false);

//   setTimeout(() => {
//     sethasCopied(false);
//   }, 10000);
//   return (
//     <section className="c-space my-20">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1  gap-5 h-full">
//         <div className="col-span-1 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="/assets/grid1.png"
//               alt="grid-1"
//               className="w-full sm:h-[276px] h-fit object-contain"
//             />
//             <div>
//               <p className="grid-headtext">Hello I'm Sanket</p>
//               <p className="grid-subtext">
//                 With 2 Years of Experience I've hold my skills in FrontEnd and
//                 backend development with focus on animated 3D Websites
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-span-1 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="/assets/grid2.png"
//               alt="grid_2"
//               className="w-full sm:[276px] h-fit object-contain"
//             />
//             <div>
//               <p className="grid-headtext">Tech Stack</p>
//               <p className="grid-subtext">
//                 I specialized in Js Ts aminly focus on React & NextJS Eco system
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center flex">
//               <Globe
//                 height={326}
//                 width={326}
//                 backgroundColor="rgba(0,0,0,0)"
//                 backgroundImageOpacity={0.5}
//                 showAtmosphere
//                 showGraticules
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[
//                   {
//                     lat: 40,
//                     lng: -100,
//                     text: "i'm Here",
//                     size: 20,
//                   },
//                 ]}
//               />
//             </div>
//             <div>
//               <p className="grid-headtext">
//                 I Work Remotely across most time zones
//               </p>
//               <p className="grid-subtext">
//                 I'm based in India, with Remote work available
//               </p>
//               <Button
//                 name="Contant Me"
//                 isBeam={true}
//                 containerClass="w-full mt-10"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="xl:col-span-2 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="/assets/grid3.png"
//               alt=""
//               className="w-full sm:h-[266px] h-fit object-contain"
//             />
//             <div>
//               <p className="grid-headtext">My Passion for Coding</p>
//               <p className="grid-subtext">
//                 I love solving problem and code things, coding isn my professin
//                 but passion
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="xl:col-span-1 xl:row-span-1">
//           <div className="grid-container">
//             <img
//               src="/assets/grid4.png"
//               alt=""
//               className="w-full sm:h-[276px] md:h-[126px] h-fit object-cover sm:object-top"
//             />
//             <div className="space-y-2">
//               <p className="grid-headtext">Contact Me</p>
//               <div
//                 className="copy-container"
//                 onClick={() => {
//                   navigator.clipboard.writeText("16gsanket@gmail.com");
//                   sethasCopied(true);
//                 }}
//               >
//                 <img
//                   src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
//                   class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
//                   alt=""
//                 />
//                 <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">16gsanket@gmail.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../component/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("16gsanket@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 20000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Sanket G</p>
              <p className="grid-subtext">
              With experience in frontend backend and blockchain development, I have worked on building dynamic and optimized web applications that enhance user engagement and performance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I specialize in various programming languages, frameworks, and tools, including Next.js,React.js,
               Node.js,Three.js, React Fiber TypeScript, MongoDB, and more, enabling me to develop scalable and efficient applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Rjieka, Croatia",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
              I'm based in Mumbai, India, and open to remote work opportunities worldwide.
              </p>
              <p className="grid-subtext">
                I&apos;m highly adaptable to different time zones and project requirements.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I have a deep passion for problem-solving and creating cutting-edge applications through coding. For me, software development goes beyond just a profession—it's an exciting journey of continuous learning and innovation. I constantly explore emerging technologies to refine my skills and build solutions that drive impactful results.              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  16gsanket@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 grid-rows-3 gap-0 h-[1000px]">
        <div className="bg-red-500 col-span-2">1 (spans 2 cols)</div>
        <div className="bg-blue-500 row-span-2 col-span-3">2 (spans 2 rows)</div>
        <div className="bg-green-500">3</div>
        <div className="bg-yellow-500 col-span-2 row-span-2">
          4 (spans 2 cols & 2 rows)
        </div>
        <div className="bg-purple-500">5</div>
        <div className="bg-orange-500 row-span-2">6 (spans 2 rows)</div>
        <div className="bg-pink-500 col-span-2">7 (spans 2 cols)</div>
        <div className="bg-teal-500">8</div>
      </div> */}
    </section>
  ); 
};

export default About;
