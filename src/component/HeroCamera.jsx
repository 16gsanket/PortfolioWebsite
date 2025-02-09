// // // import { useFrame } from '@react-three/fiber';
// // // import { easing } from 'maath';
// // // import React, { useRef } from 'react'

// // // function HeroCamera({children, isMobile}) {
// // //     const groupRef = useRef();

// // //     useFrame((state, delta)=>{
// // //         easing.damp3(state.camera.position, [0,0,3], 0.25, delta)

// // //         if(!isMobile){
// // //             easing.dampE(groupRef.current.rotation, [state.pointer.y/10, -state.pointer.x/20, 0], 0.55, delta)
// // //         }


// // //     })
// // //   return (
// // //     <group ref={groupRef}>{children}</group>
// // //   )
// // // }

// // // export default HeroCamera;


// // import { useFrame } from "@react-three/fiber";
// // import { easing } from "maath";
// // import React, { useRef } from "react";

// // function HeroCamera({ children, isMobile }) {
// //   const groupRef = useRef();
// //   const cameraPivot = useRef();

// //   useFrame((state, delta) => {
// //     // Camera orbit effect
// //     if (cameraPivot.current) {
// //       easing.dampE(
// //         cameraPivot.current.rotation,
// //         [state.pointer.y / 10, -state.pointer.x / 10, 0],
// //         0.55,
// //         delta
// //       );
// //     }

// //     // Keep the camera's position at a fixed distance from the scene
// //     easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta);
// //   });

// //   return (
// //     <group ref={groupRef}>
// //       <group ref={cameraPivot}>{children}</group>
// //     </group>
// //   );
// // }

// // export default HeroCamera;
// import { useFrame } from "@react-three/fiber";
// import { easing } from "maath";
// import React, { useRef } from "react";

// function HeroCamera({ children, isMobile }) {
//   const cameraPivot = useRef(); // Create a pivot point for the camera

//   useFrame((state, delta) => {
//     if (cameraPivot.current) {
//       // Rotate the cameraPivot group instead of moving the object
//       easing.dampE(
//         cameraPivot.current.rotation,
//         [state.pointer.y / 1, -state.pointer.x / 1, 0],
//         0.55,
//         delta
//       );
//     }
//   });

//   return <group ref={cameraPivot}>{children}</group>;
// }

// export default HeroCamera;

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {
      easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
  });

  return <group ref={group} scale={1.3}>{children}</group>;
};

export default HeroCamera;
