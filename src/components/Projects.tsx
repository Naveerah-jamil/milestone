import React from 'react';
import Head from './Head';
import Card from './Card';

// Sample data for projects
const data = [
  {
    id: 1,
    title: "Todo list",
    desc: "A React & Typescript based app for managing and organizing tasks",
    img: "C:\Users\DANISH LAPTOP\Desktop\open\my-next-app\public\images\hero-image.png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Weather App",
    desc: "A weather forecasting app built with React, Fetch API, and CSS",
    img: "/2.png",
    tags: ["React", "API", "CSS", ""],
  },
  {
    id: 3,
    title: "E-commerce Site",
    desc: "An e-commerce website built with Next.js, MongoDB, and Stripe",
    img: "/3.png",
    tags: ["Next.js", "MongoDB", "Stripe", "CSS"],
  },
  {
    id: 3,
    title: "E-commerce Site",
    desc: "An e-commerce website built with Next.js, MongoDB, and Stripe",
    img: "/3.png",
    tags: ["Next.js", "MongoDB", "Stripe", "CSS"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32 mx-auto">
      {/* Heading for the section */}
      <Head title="My Projects" />

      {/* Grid container for the cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id} // Unique id for each card
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

