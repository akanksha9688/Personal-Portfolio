import { Project } from '../types';
import Device from './image/Device.jpg'

const projects: Project[] = [
  {
    id: 'Sewage Detection',
    title: 'Intelligent Sewage Detection and Monitoring System',
    description: 'Built an IoT-based sewage monitoring system with 95% accuracy and emergency response features.',
    longDescription: 'Designed and developed an IoT-based intelligent sewage monitoring system featuring real-time data tracking, 95% accuracy, emergency alerts, and graphical data analysis for efficient management.',
    //image: 'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs44221-023-00080-x/MediaObjects/44221_2023_80_Fig1_HTML.png',
    image: Device,
    liveLink: 'https://drive.google.com/file/d/1VeStrW__6A9LyJwNvyXbqw_ulHfK99iP/view?usp=sharing',
    githubLink: 'https://github.com/yourusername/ecommerce',
    technologies: ['IOT', 'Utrasonic Sensor', 'Gas Sensor', 'PH Sensor', 'Temprature Sensor', 'Android Studio'],
    featured: true
  },
  {
    id: 'Happy-Paws Website',
    title: 'Happy Paws',
    description: 'Connecting pet owners with dedicated volunteers for personalized pet care through integrated technology.',
    longDescription: 'Designed and developed a web-based platform that connects pet owners with compassionate volunteers to provide personalized pet care. The system enables smooth communication between users and maintains a structured database for managing profiles and interactions.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/15cb2e182568037.Y3JvcCw5OTUsNzc4LDQ0MSwxOTQ.jpg',
    liveLink: 'https://happypawssss.netlify.app/',
    githubLink: 'https://github.com/akanksha9688/Happy-Pawss',
    technologies: ['HTML','Tailwind CSS', 'Javascript', 'React', 'Typscript', 'Hooks','BootStrap'],
    featured: true
  },
  {
    id: 'Focus Drive',
    title: 'Drowsy Driver Detection System',
    description: 'Developed a real-time system using OpenCV and CNN to detect driver fatigue and trigger alerts, enhancing road safety',
    longDescription: 'Designed and implemented a real-time driver fatigue detection system using Convolutional Neural Networks (CNN) and OpenCV. The system monitors facial landmarks via webcam to detect signs of drowsiness such as prolonged eye closure, yawning, or head tilting. Upon detection, it triggers a buzzer alarm and sends alerts to registered contacts using APIs like Twilio or SMTP, enhancing driver safety and reducing the risk of road accidents.',
    image: 'https://media.tomtom.com/f/178460/1440x850/1f3fd478e5/blog-driver-drowsiness-bodycopyimage_1440x850.jpg',
    liveLink: 'https://example.com/tasks',
    githubLink: 'https://github.com/akanksha9688/Drowsy-Driver-Detection-System',
    technologies: ['Python', 'OpenCV', 'Pandas', 'CNN', 'NumPy', 'TensorFlow', 'Twilio'],
  },
  {
    id: 'Flappy Bird Game',
    title: 'Flappy Bird',
    description: 'A browser-based Flappy Bird clone built with HTML, CSS, and JavaScript featuring smooth gameplay and real-time scoring.',
    longDescription: 'This project is a browser-based clone of the classic Flappy Bird game built using HTML, CSS, and JavaScript. It features smooth animations, collision detection, and responsive controls to simulate the original gameplay experience. The user controls a bird that must navigate through gaps between moving pipes, earning points for each successful pass. The interface is designed to be minimal and engaging, with real-time score tracking and a game-over screen.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9nzmSYfQoBm0QAOYSz_-1F1k7IUMRa10cw&s',
    liveLink: 'https://flappybb.netlify.app/',
    githubLink: 'https://github.com/akanksha9688/Game-Flappy-Bird',
    technologies: ['HTML', 'CSS', 'JavaScript', 'CSS Animations'],
  },
  {
    id: 'Instagram clone Web App',
    title: 'Instagram Clone',
    description: 'A React-based Instagram clone frontend featuring post feeds, user profiles, and interactive UI for a full social media experience.',
    longDescription: 'This project is a fully responsive Instagram clone developed using React.js, designed to replicate the core features and user interface of the original Instagram platform. It includes dynamic post feeds, user authentication, profile pages, likes, and comments functionality. The frontend is built with React components, React Router for seamless navigation, and integrates with a Node.js/Express backend and MongoDB database via RESTful APIs. Styled using modern CSS practices, the UI ensures a clean and intuitive user experience across devices. This project offers a hands-on understanding of building scalable social media applications and showcases full-stack integration capabilities.',
    image: 'https://codesandbox.io/api/v1/sandboxes/l5gk2t/screenshot.png',
    liveLink: 'https://example.com/chatbot',
    githubLink: 'https://github.com/akanksha9688/Clone-Instagram',
    technologies: ['React.js', 'TypeScript', 'MongoDB', 'node.js', 'Mongooes'],
    featured: true
  },
  // {
  //   id: 'portfolio-website',
  //   title: 'Portfolio Website',
  //   description: 'Personal portfolio website with interactive elements and animations',
  //   longDescription: 'A modern portfolio website showcasing projects and skills. Features include smooth animations, responsive design, dark/light mode, and contact form integration.',
  //   image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   liveLink: 'https://example.com',
  //   githubLink: 'https://github.com/yourusername/portfolio',
  //   technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'JavaScript'],
  // }
];

export default projects;