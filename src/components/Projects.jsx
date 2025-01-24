import React from 'react';
import '../styles/components/projects.css';

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-cards">
      <div className="card">
        <h3>Air Quality Prediction</h3>
        <p>Built an AI model to predict air quality levels using real-time data.</p>
      </div>
      <div className="card">
        <h3>Music Recommendation System</h3>
        <p>Developed a KNN-based music recommender using genres, danceability, and mood.</p>
      </div>
      <div className="card">
        <h3>Task Management System</h3>
        <p>Created a Java-based task manager for organizing personal projects and tasks.</p>
      </div>
    </div>
  </section>
);

export default Projects;
