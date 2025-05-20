const { createApp } = Vue;
    createApp({
      data() {
        return {
          skills: [
            { iconClass: 'fab fa-html5', label: 'HTML' },
            { iconClass: 'fab fa-css3-alt', label: 'CSS' },
            { iconClass: 'fab fa-js', label: 'JavaScript' },
            { iconClass: 'fab fa-vuejs', label: 'Vue.js' },
            { iconClass: 'fas fa-database', label: 'MongoDB' },
            { iconClass: 'fab fa-python', label: 'Python' },
            { iconClass: 'fab fa-java', label: 'Java' },
            { iconClass: 'fas fa-code', label: 'C Programming' },
            { iconClass: "fa-brands fa-bootstrap", label: 'BootStrap'}

          ],
          languages: [
            { name: 'Tamil', level: 100 },
            { name: 'English', level: 95 }
          ],
          projects: [
            {
              image: 'images/ecommerce.png',
              title: 'E-Commerce Site',
              description: 'Full-stack site with cart and MongoDB integration',
              date: 'March 2024'
            },
            {
              image: 'images/anniescakes.png',
              title: 'Bakery Landing Page',
              description: 'Bootstrap & Vue-powered static business page',
              date: 'January 2025'
            },
            {
              image: 'images/weatherapp.png',
              title: 'Weather App',
              description: 'Real-time weather app using OpenWeather API',
              date: 'February 2025'
            },
            {
              image: 'images/blogpage design.png',
              title: 'Blog Site Design',
              description: 'A Blog Page Design with HTML and Bootstrap Two Column Layout',
              date: 'December 2024'
            }
          ],
          certificates: [
  {
    image: 'images/python.jpg',
    title: 'Python Programming',
    description: 'Certified By Guvi'
  },
  {
    image: 'images/python hr.jpg',
    title: 'Python Basic',
    description: 'Certified by Hacker Rank'
  },
  {
    image: 'images/sql.jpg',
    title: 'SQL Intermidiate',
    description: 'Certified by Hacker Rank'
  },

  {
    image: 'images/udemy.jpg',
    title: 'Python Advanced',
    description: 'Certified by Udemy'
  },
  {
    image: 'images/gl.jpg',
    title: 'Front End Web Development',
    description: 'Certified by Great Learning'
  },
  {
    image: 'images/freecodecamp.jpg',
    title: 'Responsive Web Design',
    description: 'Certified by Free Code Camp'
  },
  
  
]

        };
      }
    }).mount('#app');