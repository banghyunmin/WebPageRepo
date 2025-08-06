import React from 'react';

// 실제 프로젝트 데이터 예시
const projectData = [
  {
    title: '프로젝트 1: 트래커',
    description: '',
    link: '#',
    github: '#'
  },
  {
    title: '프로젝트 2: 스캐너',
    description: '',
    link: '#',
    github: '#'
  },
  {
    title: '프로젝트 3: 데이터시각화뷰어',
    description: '',
    link: '#',
    github: '#'
  },
  {
    title: '프로젝트 3: 시뮬레이션 프로그램',
    description: '',
    link: '#',
    github: '#'
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>프로젝트</h2>
        <div className="project-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
