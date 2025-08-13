const portfolioItems = [
  {
    title: "Corporate Essentials",
    category: "stock",
    desc: "A polished montage of professional stock footage, edited to highlight corporate themes with seamless transitions and dynamic pacing.",
    tags: ["Corporate", "Stock Footage", "Business"],
    videoId: "1108892671"
  },
  {
    title: "From Credit Repair to Business Launch",
    category: "motion", // moved to Motion Graphics
    desc: "Engaging UI animation showcasing a journey from financial recovery to entrepreneurial success, with sleek visuals and intuitive design.",
    tags: ["UI/UX", "Financial", "Micro-interactions"],
    videoId: "1108892715"
  },
  {
    title: "Airbnb Growth Simplified",
    category: "ui", // moved to UI Animations
    desc: "Vibrant motion graphics illustrating streamlined strategies for scaling Airbnb businesses, with clear visuals and energetic flow.",
    tags: ["Explainer", "Data Visualization", "After Effects"],
    videoId: "1108892817"
  },
  {
    title: "30 Minutes to the Top",
    category: "motion",
    desc: "Fast-paced motion graphics depicting a rapid rise to success, blending bold visuals with concise storytelling.",
    tags: ["Business", "Fast-cut", "Kinetic Typography"],
    videoId: "1108892839"
  },
  {
    title: "Who I Am",
    category: "motion",
    desc: "A creative motion graphics piece introducing personal identity and skills through striking visuals and smooth animations.",
    tags: ["Personal Brand", "Typography", "Storytelling"],
    videoId: "1108892883"
  },
  {
    title: "The Animated Interface",
    category: "ui",
    desc: "A dynamic UI animation presenting personal branding with interactive elements and a modern, user-friendly aesthetic.",
    tags: ["Interactive", "Personal Brand", "UI Design"],
    videoId: "1108892942"
  }
];

// Initialize Portfolio Grid
function initPortfolio() {
  const grid = document.querySelector('.portfolio-grid');
  
  portfolioItems.forEach(item => {
    const project = document.createElement('div');
    project.className = `portfolio-item`;
    project.dataset.category = item.category;
    
    project.innerHTML = `
      <div class="portfolio-content">
        <iframe src="https://player.vimeo.com/video/${item.videoId}?title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
        <div class="portfolio-text">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
    
    grid.appendChild(project);
  });
}

// Filter Portfolio Items
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      portfolioItems.forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
      });
    });
  });
}

// Form Submission
function setupForm() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: this.name.value,
      email: this.email.value,
      subject: this.subject.value,
      message: this.message.value
    };
    
    console.log('Form submitted:', formData);
    
    alert('Message sent successfully! I\'ll get back to you soon.');
    this.reset();
  });
}

// Smooth Scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  initPortfolio();
  setupFilters();
  setupForm();
  setupSmoothScrolling();
  
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.hero-text, .section-header, .journey-section, .education-item, .expertise-item, .contact-content > *');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8);
      if (isVisible) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };
  
  document.querySelectorAll('.hero-text, .section-header, .journey-section, .education-item, .expertise-item, .contact-content > *').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});
