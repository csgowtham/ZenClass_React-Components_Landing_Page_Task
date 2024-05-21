import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Icon from './Icon'
import Image from './Image'
import Testimonals from './Testimonals'
import CallToAction from './CallToAction'
import Footer from './Footer'
import image1 from './assets/img/bg-showcase-1.jpg';
import image2 from './assets/img/bg-showcase-2.jpg';
import image3 from './assets/img/bg-showcase-3.jpg';




function App() {

  const icons = [
    {
      icon:'bi-window m-auto text-primary',
      name:'Fully responsive',
      description:'This theme will look great on any device, no matter the size!',
    },
    {
      icon:'bi-layers m-auto text-primary',
      name:'Bootstrap 5 Ready',
      description:'Featuring the latest build of the new Bootstrap 5 framework!',
    },
    {
      icon:'bi-terminal m-auto text-primary',
      name:'Easy to Use',
      description:'Ready to use with your own content, or customize the source files!',
    },
  ]

 const contents = [
   {
    id:1,
    image:image1,
    name:'Fully Responsive Design',
    description:'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it`s a phone, tablet, or desktop the page will behave responsively!',
   },
   {
    id:2,
    image:image2,
    name:'Updated For Bootstrap 5',
    description:'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
   },
   {
    id:3,
    image:image3,
    name:'Easy to Use & Customize',
    description:'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
   },
 ]

 const testimonals=[
  {
    image:'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg',
    name:'Margaret E.',
    feedbacks:`"This is fantastic! Thanks so much guys!"`,
  },
  {
    image:'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg',
    name:'Fred S.',
    feedbacks:`"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
  },
  {
    image:'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg',
    name:'Sarah W.',
    feedbacks:`"Thanks so much for making these free resources available to us!"`,
  },
 ]

  return <>
    <NavBar/>
    <Header/>
    <Icon icons={icons}/>
    <Image contents = {contents}/>
    <Testimonals testimonals={testimonals}/>
    <CallToAction/>
    <Footer/>
  </>
}

export default App