import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import asifportfolioImg from '../images/asifportfolio.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Asif Khan Portfolio',
    desc: 'A portfolio for Asif Khan. A developer from New Delhi. The portfolio is made using ReactJs.',
    img: asifportfolioImg,
    link: 'https://asifkhanportfolio.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'To Do Apps',
    desc: 'Users can create a list of items they need to accomplish, set due dates, add descriptions or notes, and categorize tasks based on different criteria.',
    img: UTrackerImg,
    link: 'https://todoappyajdan.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Hexaware Clone UI',
    desc: 'I made this website for learning new thigs from this landing pages, just like fade Animated.',
    img: GreenCtgImg,
    link: 'https://hexacloneui.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Bensik UI Page',
    desc: 'An application to track your all data from one place. I developed the website.',
    img: CoinTrackerImg,
    link: 'https://bensiklandingpage.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Bridge Landing Page',
    desc: 'A Web Application can check the Scroll Button and SmoothCard Hover',
    img: ProjectImg,
    link: 'https://bridgelandingpage.netlify.app/',
  },
];

export default projects;
