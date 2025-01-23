// script.js
document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      { title: "Project 1", description: "Description of project 1", link: "#" },
      { title: "Project 2", description: "Description of project 2", link: "#" },
      { title: "Project 3", description: "Description of project 3", link: "#" },
    ];
  
    const projectsContainer = document.getElementById("projects-container");
  
    projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
  
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
  
      projectsContainer.appendChild(projectCard);
    });
  
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent! Thank you for reaching out.");
      contactForm.reset();
    });
  });
  