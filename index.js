const { createApp } = Vue;
    createApp({
      data() {
        return {
          contents: [
            { id: 1, title1: "Hi, I'm Sachin Leo", title2: "Front End Web Developer" }
          ]
        };
      }
    }).mount('#app');