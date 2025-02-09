// import { PerspectiveCamera } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React, { Suspense } from "react";
// import HackerRoom from "../component/HackerRoom";
// import CanvasLoader from "../component/CanvasLoader";
// import { Leva, useControls } from "leva";
// import { useMediaQuery } from "react-responsive";
// import { calculateSizes } from "../constants";
// import Target from "../component/Target";
// import ReactLogo from "../component/ReactLogo";
// import Cube from "../component/Cube";
// import Rings from "../component/Rings";
// import HeroCamera from "../component/HeroCamera";

// function Hero() {
//   // const controls = useControls("HackerRoom", {
//   //   positionX: {
//   //     value: 2.5,
//   //     min: -10,
//   //     maz: 10,
//   //   },
//   //   positionY: {
//   //     value: 2.5,
//   //     min: -10,
//   //     maz: 10,
//   //   },
//   //   positionZ: {
//   //     value: 2.5,
//   //     min: -100,
//   //     maz: 10,
//   //   },
//   //   rotationX: {
//   //     value: 0,
//   //     min: -10 ,
//   //     maz: 10,
//   //   },
//   //   rotationY: {
//   //     value: 0,
//   //     min: -10,
//   //     maz: 10,
//   //   },
//   //   rotationZ: {
//   //     value: 0,
//   //     min: -10,
//   //     maz: 10,
//   //   },
//   //   scale: {
//   //     value: 0.1,
//   //     min: -10,
//   //     maz: 10,
//   //   },
//   // });

//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const sizes = calculateSizes(isSmall, isMobile, isTablet);
//   return (
//     <section className="min-h-screen w-full flex flex-col relative">
//       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
//         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
//           Hi I am a Sanket <span className="waving-hand">👋</span>
//         </p>
//         <p className="hero_tag text-gray_gradient">
//           Building Products & Brands
//         </p>
//       </div>

//       <div className="w-full h-full absolute inset-0">
//         {/* <Leva /> */}
//         <Canvas className="h-full w-full">
//           <Suspense fallback={<CanvasLoader />}>
//             <PerspectiveCamera makeDefault position={[0, 0, 3]} />

//             <HeroCamera isMobile={isMobile}>
//               <HackerRoom
//                 // scale={0.008}
//                 scale={isMobile ? 0.07 : 0.1}
//                 position={isMobile ? [1.0, -5, -26] : [1.0, -10, -26]}
//                 rotation={isMobile ? [0.25, Math.PI - 0.3, 0] : [0, Math.PI, 0]}
//               />
//             </HeroCamera>

//             <group className="">
//               <Target
//                 position={
//                   isMobile
//                     ? [-0.4, -1.1, 0]
//                     : isTablet
//                     ? [-0.7, -1.2, 0]
//                     : [-2.0, -1, 0]
//                 }
//                 scale={isMobile ? 0.12 : 0.2}
//                 rotation={isMobile ? [0, 0.4, 0] : [0, 0.8, 0]}
//               />
//               <ReactLogo />
//               <Cube
//                 position={
//                   isMobile
//                     ? [0.4, -0.8, 0]
//                     : isTablet
//                     ? [0.7, -0.9, 0]
//                     : [2, -0.9, 0]
//                 }
//               />
//               <Rings
//                 position={
//                   isMobile
//                     ? [-7.0, 9.8, 0]
//                     : isTablet
//                     ? [-8.9, 5.8, 0]
//                     : [-20, 7.5, 0]
//                 }
//               />
//             </group>

//             <ambientLight intensity={1} />
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../component/Cube.jsx';
import Rings from '../component/Rings.jsx';
import ReactLogo from '../component/ReactLogo.jsx';
import Button from '../component/Button.jsx';
import Target from '../component/Target.jsx';
import CanvasLoader from '../component/CanvasLoader.jsx';
import HeroCamera from '../component/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import HackerRoom  from '../component/HackerRoom.jsx';

 const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Sanket <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={!isMobile ? sizes.ringPosition : [-4,8,0]} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={4.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
