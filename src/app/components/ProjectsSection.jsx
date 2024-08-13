"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Getscholify",
    description: "Scholarship Website For Stufdents",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.getscholify.com/",
  },
  {
    id: 2,
    title: "Swami Vivekanand Group Of Institutes",
    description: "A College Website ",
    image: "/images/projects/20.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://sviet.ac.in/",
  },
  {
    id: 3,
    title: "Godigitify",
    description: "Graphic Design Client",
    image: "/images/projects/40.png",
    tag: ["All", "Graphic Design "],
    gitUrl: "/",
    previewUrl: "https://www.instagram.com/godigitifynexus/",
  },
  {
    id: 4,
    title: "Techlearns Academy",
    description: "Graphic Design Client",
    image: "/images/projects/50.png",
    tag: ["All", "Graphic Design "],
    gitUrl: "/",
    previewUrl: "https://www.instagram.com/techlearnsacademy/",
  },
  {
    id: 5,
    title: "Alliance International School",
    description: "Graphic Design Client",
    image: "/images/projects/30.png",
    tag: ["All", "Graphic Design "],
    gitUrl: "/",
    previewUrl: "https://www.instagram.com/schoolallianceinternational/",
  },
  {
    id: 6,
    title: "The Uniques Community",
    description: "Graphic Design Client",
    image: "/images/projects/60.png",
    tag: ["All", "Graphic Design "],
    gitUrl: "/",
    previewUrl: "https://www.instagram.com/theuniquesofficial/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Graphic Design "
          isSelected={tag === "Graphic Design "}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
