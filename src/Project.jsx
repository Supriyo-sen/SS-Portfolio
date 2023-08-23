import React from 'react'
// i want to make it responsive
import ademy from './assets/Images/ademy.png'
import Ecommerce from './assets/Images/E-commerce.png'
const Project = () => {
  // make a array of objects of projects
  const projects = [
    {
      id: 1,
      title: "Project 1",
      about:
        "This is my Educational website. I have used html and CSS and Bootstrap to build this website.",
      tags: ["HTML", "CSS", "Bootstrap",],
      demo: "https://ademy.vercel.app",
      github: "https://github.com/Supriyo-sen/ademy",
      image: ademy,
    },  
    {
      id: 2,
      title: "Project 2",
      about:
        "This is my E-commerce website. I have used Bootstrap and CSS and HTML to build this website.",
      tags: ["HTML", "CSS", "Bootstrap",],
      demo: "https://e-commerce-nine-beta.vercel.app",
      github: "https://github.com/Supriyo-sen/E-commerce",
      image: Ecommerce,
     },
    {
      id: 3,
      title: "Project 3",
      about:
        "This is my 2nd E-commerce website. I have used React and Tailwind CSS and Global CSS to build this website.",
      tags: ["React","Global CSS","Tailwind CSS"],
      demo: "https://i.ibb.co/0jZ3Q0K/1.png",
      github: "https://i.ibb.co/0jZ3Q0K/1.png",
      image:"https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Project 4",
      about:
        "This is my portfolio website. I have used React and Tailwind CSS to build this website.",
      tags: ["React", "Tailwind CSS"],
      demo: "https://i.ibb.co/0jZ3Q0K/1.png",
      github: "https://i.ibb.co/0jZ3Q0K/1.png",
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 min-h-screen p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-8">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* project 1 */}
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt="portfolio"
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 font-light text-md">{project.about}</p>
                <div className="flex mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-white rounded-full px-2 py-1 
                      text-sm font-semibold mr-2 transition cursor-pointer
                      duration-300 ease-in-out mou hover:bg-blue-500"
                    > 
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex mt-4">
                  <a
                    href={project.demo}
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-gray-700 text-white rounded-full px-2 py-1 text-sm font-semibold mr-2"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-700 text-white rounded-full px-2 py-1 text-sm font-semibold mr-2"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  





  );
}

export default Project