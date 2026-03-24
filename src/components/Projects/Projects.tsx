import React from "react";
import styles from "./projects.module.css";
import { projectsItem } from "@/data/static-data";
import Link from "next/link";

const Projects = () => {
  // show only first 3 projects on homepage
  const latestProjects = projectsItem.projects.slice(0, 3);

  return (
    <div className={styles.container} id="projects">
      <h1 className={styles.heading}>Projects</h1>

      <div className={styles.projects}>
        {latestProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image_url}
              alt={project.title}
              className={styles.projectImage}
            />

            <h2 className={styles.projectTitle}>{project.title}</h2>

            <p className={styles.projectDesc}>
              {project.description}
            </p>

            <Link
              href={project.projectLink}
              target="_blank"
              className={styles.projectBtn}
            >
              View Project →
            </Link>
          </div>
        ))}
      </div>

      <Link href="/projects" className={styles.allProjectsBtn}>
        View All Projects →
      </Link>
    </div>
  );
};

export default Projects;