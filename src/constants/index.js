export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Ravi Kombathula',
      position: 'Co-Founded Smacoteq',
      img: 'assets/ravi.png',
      review:
        'Sanket, your dedication and expertise as a Frontend Developer at Smacoteq are truly valued. Your contributions to building website & seamless and innovative user experiences play a key role in our mission to transform digital trade. Keep up the great work!',
    },
    {
      id: 2,
      name: 'Nigam Saini',
      position: 'CTO Smacoteq, Co-Founder KGT',
      img: 'assets/nigam.png',
      review:
        "Sanket is a quick learner with a positive attitude and a strong problem-solving mindset. In just nine months, he mastered React.js and TypeScript, taking ownership of UI development for our website and platform. He also contributed to solution design by assisting with UML diagrams. His dedication and eagerness to take on challenges make him a valuable asset to any team.",
    },
    // {
    //   id: 3,
    //   name: 'John Dohsas',
    //   position: 'Project Manager at UrbanTech ',
    //   img: 'assets/review3.png',
    //   review:
    //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    // },
    // {
    //   id: 4,
    //   name: 'Ether Smith',
    //   position: 'CEO of BrightStar Enterprises',
    //   img: 'assets/review4.png',
    //   review:
    //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    // },
  ];
  
  export const myProjects = [
    {
      title: 'Fast React Pizza Co',
      desc: 'Fast React Pizza Co is a pizza ordering app built with  React JS. It features a responsive design, a smooth scrolling experience, and a cart that updates in real-time.',
      subdesc:
        'With React JS, and TailwindCSS, Fast React Pizza Co is a complete solution that brings your pizza orders to life. It can be used as a standalone app or as part of a larger web project.',
      href: 'https://fast-react-pizza-gules.vercel.app/',
      texture: '/textures/project/pizza.mp4',
      logo: '/assets/project-logo1.jpg',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/JS.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'The Wild Oasis',
      desc: 'Hotel Booking App is a web application that allows internal users to search and book hotel Rooms. It features  a smooth scrolling experience, and a layout that updates in real-time.',
      subdesc:
        'React, Supabase, Suspense, TailwindCSS, React Query The Wild Oasis is a complete solution that brings your hotel booking experience to life. It can be used as a standalone app or as part of a larger web project.',
      href: 'https://the-wild-oasis-v2-wheat.vercel.app/bookings',
      texture: '/textures/project/wildos.mp4',
      logo: '/assets/logo-light.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'React Query',
          path: '/assets/reactQueryLogo.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Spain Collectiom',
      desc: 'A Tourism Website',
      subdesc:
        'With a focus on creating a emmerisve user experience, its build with advance animation libraries like Scroll Trigger Gsap , LocoMotive JS Scroller.',
        texture: '/textures/project/spain.mp4',
        logo: '/assets/spainTourism.jpg',
        href: 'https://snlet.github.io/SpainCollectionClone/',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'GSAP',
          path: 'assets/GSAP-Logo.png',
        },
        {
          id: 3,
          name: 'LocoMotive Scroll',
          path: '/assets/LCScroll.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'World Wise App',
      desc: 'World Wise App is app which allows the Authenticated user to track their location. Add Notes to the Location and also get the world map in their browser!',
      subdesc:
        'Built with ReactJS, Module CSS, and GeoLocation services, World Wise App is a complete solution that brings your location tracking experience to life. It can be used as a standalone app or as part of a larger web project.',
      href: 'https://world-wide-delta.vercel.app/',
      texture: '/textures/project/world.mp4',
      logo: '/assets/worldwide.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/JS.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Resume Coach AI',
      desc: 'Designed and developed a secure, scalable AI app with Node.js, React, MongoDB, Express enabling users to upload resumes and receive AI-generated career feedback. • Integrated AWS Textract resume text extraction and AWS S3',
      subdesc:
        'Implemented JWT authentication and Google OAuth using Passport.js, along with a chatinterface for real-time AI-powered career coaching and doubt resolution.',
      href: 'https://resume-analyser-rouge.vercel.app/',
      texture: '/textures/project/resume-AI.mp4',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68qCVte7kY0bWK41UQSv8iBt_HgYNq-BXZA&s',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'OAuth2.0',
          path: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1743069535/portfolio/assets/OAuthLogo.png',
        },
        {
          id: 4,
          name: 'AWS',
          path: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1743069734/portfolio/assets/AWS%29Logo.avif',
        },
      ],
    },
    {
      title: 'Wild Oasis User',
      desc: 'This is a application built for the user side, used for viewing the cabins, booking cabins and also to view the cabins that have been booked by the user.',
      subdesc:
        'Developed with Next.JS , AuthNext.JS and TailwindCSS, using the SSR and SSG methods to optimize the webapp and also leveraged the power of aggresive chaching of the NextJS framework.',
      href: 'https://resume-analyser-rouge.vercel.app/',
      texture: '/textures/project/wild-user.mp4',
      logo: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1743070899/portfolio/assets/logo.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1743071032/portfolio/assets/NextLogo.jpg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Next Auth',
          path: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1743070526/portfolio/assets/nextAuthLogo.png',
        },
        {
          id: 4,
          name: 'AWS',
          path: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1743069734/portfolio/assets/AWS%29Logo.avif',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-15, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    // {
    //   id: 1,
    //   name: 'Framer',
    //   pos: 'Web Developer',
    //   duration: '2022 - Present',
    //   title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    //   icon: '/assets/framer.svg',
    //   animation: 'victory',
    // },
    {
      id: 2,
      name: 'Smacoteq',
      pos: 'Front End Developer',
      duration: '2024 May - 2024 Dec',
      title: "Revamped the Smacoteq Platform, boosting user engagement by 33% and cutting load times by 2.5s through optimization and SEO. Implemented multilingual support for 21 languages, enhancing accessibility for 10,000+ users. Designed UML and data flow diagrams to streamline backend logic and prototyped blockchain-based trade finance features using Solidity.",
      icon: '/assets/SmacoteqLogo.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Fly Fashion',
      pos: 'Web Developer',
      duration: '2023',
      title: "I modernized a legacy business from the 1980s by designing and developing a dynamic UI-driven website. Utilizing GSAP, ScrollTrigger, and Locomotive.js with plain HTML, CSS, and JavaScript, I transformed its digital presence, enhancing user experience with smooth animations and seamless interactions.",
      icon: '/assets/fly.png',
      animation: 'salute',
    },
  ];