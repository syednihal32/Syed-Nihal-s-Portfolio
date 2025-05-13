document.addEventListener('DOMContentLoaded', function () {
 // Typewriter Effect for Role and Description
const roles = [
  { role: "Data Scientist", description: "Analyzing data to uncover insights and trends." },
  { role: "Video Editor", description: "Crafting intuitive and beautiful Videos." },
  { role: "Web Developer", description: "Building responsive and dynamic websites." },
  { role: "Engineering Scholar", description: "Currently Pursuing Engineering at MVJCE." }
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let hasTypedDescription = false; // Track if the description has been typed
const roleElement = document.getElementById("role-text");
const descriptionElement = document.getElementById("description-text");

function typeWriter() {
  const currentRole = roles[roleIndex].role;
  const currentDescription = roles[roleIndex].description;
  let nextTimeout = 0;

  // Handle description typing (type once and stop)
  if (!hasTypedDescription && charIndex < currentDescription.length) {
    descriptionElement.textContent = currentDescription.substring(0, charIndex + 1);
    charIndex++;
    nextTimeout = 200; // Typing speed for description: 200ms per char
  } else if (!hasTypedDescription && charIndex === currentDescription.length) {
    hasTypedDescription = true; // Mark description as typed
    charIndex = 0; // Reset charIndex for role typing
    nextTimeout = 500; // Short pause before starting role typing
  }

  // Handle role typing and deletion (only after description is typed)
  if (hasTypedDescription) {
    if (!isDeleting && charIndex < currentRole.length) {
      // Typing the role
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      nextTimeout = 200; // Decent typing speed: 200ms per char
    } else if (isDeleting && charIndex > 0) {
      // Deleting the role slowly
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      nextTimeout = 150; // Slow deletion speed: 150ms per char
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Finished typing the role, pause before deleting
      isDeleting = true;
      nextTimeout = 5000; // Pause for 5 seconds
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting the role, move to the next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
      nextTimeout = 2000; // Pause for 2 seconds before typing the next role
    }
  }

  // Schedule the next call with a single setTimeout
  if (nextTimeout > 0) {
    setTimeout(typeWriter, nextTimeout);
  } else {
    typeWriter(); // Immediately call typeWriter() if no delay is needed
  }
}

// Start the typewriter effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log('Starting typewriter effect with constant description');
  setTimeout(typeWriter, 1000); // Start after a 1-second delay
});
  
  // Navigation Link Active State and Animation Replay
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  // Function to reset and replay animations for a section
  function replaySectionAnimations(section) {
    const sectionId = section.getAttribute('id');

    // Reset opacity and animation for all animated elements in the section
    const animatedElements = section.querySelectorAll(
      'h2, h3, p, .overview-item, .timeline-item, .skill-card, .project-card, .testimonial-card, .certification-card, .contact-details-container, .contact-content'
    );
    animatedElements.forEach(el => {
      el.classList.remove('animate-fade', 'animate-slide-left', 'animate-slide-right', 'animate-slide-up', 'animate-pop');
      el.style.opacity = '0';
      el.style.animationDelay = '';
    });

    // Replay animations based on section
    const heading = section.querySelector('h2');
    const subheading = section.querySelector('h3');
    const paragraph = section.querySelector('p');

    if (heading) {
      heading.classList.add('animate-fade');
      heading.classList.add('replay');
    }
    if (subheading) {
      subheading.classList.add('animate-fade');
      subheading.classList.add('replay');
      subheading.style.animationDelay = '0.2s';
    }
    if (paragraph) {
      paragraph.classList.add('animate-fade');
      paragraph.classList.add('replay');
      paragraph.style.animationDelay = '0.4s';
    }

    if (sectionId === 'overview') {
      const items = section.querySelectorAll('.overview-item');
      items.forEach((item, index) => {
        item.classList.add('animate-slide-left');
        item.classList.add('replay');
        item.style.animationDelay = `${index * 0.2}s`;
      });
    }

    if (sectionId === 'experience') {
      const items = section.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        if (index % 2 === 0) {
          item.classList.add('animate-slide-left');
        } else {
          item.classList.add('animate-slide-right');
        }
        item.classList.add('replay');
        item.style.animationDelay = `${index * 0.2}s`;
      });
    }

    if (sectionId === 'skills') {
      const cards = section.querySelectorAll('.skill-card');
      cards.forEach((card, index) => {
        card.classList.add('animate-pop');
        card.classList.add('replay');
        card.style.animationDelay = `${index * 0.1}s`;
      });
    }

    if (sectionId === 'projects') {
      const cards = section.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        card.classList.add('animate-slide-up');
        card.classList.add('replay');
        card.style.animationDelay = `${index * 0.2}s`;
      });
    }

    if (sectionId === 'certifications') {
      const cards = section.querySelectorAll('.certification-card');
      cards.forEach((card, index) => {
        card.classList.add('animate-slide-up');
        card.classList.add('replay');
        card.style.animationDelay = `${index * 0.2}s`;
      });
    }

    if (sectionId === 'testimonials') {
      const cards = section.querySelectorAll('.testimonial-card');
      cards.forEach((card, index) => {
        card.classList.add('animate-pop');
        card.classList.add('replay');
        card.style.animationDelay = `${index * 0.2}s`;
      });
    }

    if (sectionId === 'contact') {
      const details = section.querySelector('.contact-details-container');
      const form = section.querySelector('.contact-content');
      if (details) {
        details.classList.add('animate-slide-left');
        details.classList.add('replay');
      }
      if (form) {
        form.classList.add('animate-slide-right');
        form.classList.add('replay');
        form.style.animationDelay = '0.2s';
      }
    }
  }

  // Handle navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to section
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Update active link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Replay animations for the target section
      setTimeout(() => {
        replaySectionAnimations(targetSection);
      }, 100);
    });
  });

  // Update active link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Scroll-Based Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const sectionId = section.getAttribute('id');

        const heading = section.querySelector('h2');
        const subheading = section.querySelector('h3');
        const paragraph = section.querySelector('p');

        if (heading && !heading.classList.contains('animate-fade')) {
          heading.classList.add('animate-fade');
        }
        if (subheading && !subheading.classList.contains('animate-fade')) {
          subheading.classList.add('animate-fade');
          subheading.style.animationDelay = '0.2s';
        }
        if (paragraph && !paragraph.classList.contains('animate-fade')) {
          paragraph.classList.add('animate-fade');
          paragraph.style.animationDelay = '0.4s';
        }

        if (sectionId === 'overview') {
          const items = section.querySelectorAll('.overview-item');
          items.forEach((item, index) => {
            if (!item.classList.contains('animate-slide-left')) {
              item.classList.add('animate-slide-left');
              item.style.animationDelay = `${index * 0.2}s`;
            }
          });
        }

        if (sectionId === 'experience') {
          const items = section.querySelectorAll('.timeline-item');
          items.forEach((item, index) => {
            if (!item.classList.contains('animate-slide-left') && !item.classList.contains('animate-slide-right')) {
              if (index % 2 === 0) {
                item.classList.add('animate-slide-left');
              } else {
                item.classList.add('animate-slide-right');
              }
              item.style.animationDelay = `${index * 0.2}s`;
            }
          });
        }

        if (sectionId === 'skills') {
          const cards = section.querySelectorAll('.skill-card');
          cards.forEach((card, index) => {
            if (!card.classList.contains('animate-pop')) {
              card.classList.add('animate-pop');
              card.style.animationDelay = `${index * 0.1}s`;
            }
          });
        }

        if (sectionId === 'projects') {
          const cards = section.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            if (!card.classList.contains('animate-slide-up')) {
              card.classList.add('animate-slide-up');
              card.style.animationDelay = `${index * 0.2}s`;
            }
          });
        }

        if (sectionId === 'certifications') {
          const cards = section.querySelectorAll('.certification-card');
          cards.forEach((card, index) => {
            if (!card.classList.contains('animate-slide-up')) {
              card.classList.add('animate-slide-up');
              card.style.animationDelay = `${index * 0.2}s`;
            }
          });
        }

        if (sectionId === 'testimonials') {
          const cards = section.querySelectorAll('.testimonial-card');
          cards.forEach((card, index) => {
            if (!card.classList.contains('animate-pop')) {
              card.classList.add('animate-pop');
              card.style.animationDelay = `${index * 0.2}s`;
            }
          });
        }

        if (sectionId === 'contact') {
          const details = section.querySelector('.contact-details-container');
          const form = section.querySelector('.contact-content');
          if (details && !details.classList.contains('animate-slide-left')) {
            details.classList.add('animate-slide-left');
          }
          if (form && !form.classList.contains('animate-slide-right')) {
            form.classList.add('animate-slide-right');
            form.style.animationDelay = '0.2s';
          }
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  const footerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const footer = entry.target;
        const socialLinks = footer.querySelector('.social-links');
        const paragraph = footer.querySelector('p');

        if (socialLinks && !socialLinks.classList.contains('animate-fade')) {
          socialLinks.classList.add('animate-fade');
        }
        if (paragraph && !paragraph.classList.contains('animate-fade')) {
          paragraph.classList.add('animate-fade');
          paragraph.style.animationDelay = '0.2s';
        }
      }
    });
  }, observerOptions);

  const footer = document.querySelector('.footer');
  if (footer) {
    footerObserver.observe(footer);
  }

  // Replay footer animations on navigation
  function replayFooterAnimations() {
    const socialLinks = footer.querySelector('.social-links');
    const paragraph = footer.querySelector('p');

    if (socialLinks) {
      socialLinks.classList.remove('animate-fade');
      socialLinks.style.opacity = '0';
      socialLinks.classList.add('animate-fade');
      socialLinks.classList.add('replay');
    }
    if (paragraph) {
      paragraph.classList.remove('animate-fade');
      paragraph.style.opacity = '0';
      paragraph.classList.add('animate-fade');
      paragraph.classList.add('replay');
      paragraph.style.animationDelay = '0.2s';
    }
  }

  // Certifications Expand/Collapse Functionality
  const certificationCards = document.querySelectorAll('.certification-card');

  certificationCards.forEach(card => {
    card.addEventListener('click', () => {
      certificationCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('expanded')) {
          otherCard.classList.remove('expanded');
        }
      });

      card.classList.toggle('expanded');
    });
  });

  

  // Dynamic Tilt Effect for Project and Testimonial Cards
  const projectCards = document.querySelectorAll('.project-card');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const cards = [...projectCards, ...testimonialCards];

  cards.forEach(card => {
    // Reset transform after animation ends to ensure JavaScript takes precedence
    const resetTransform = () => {
      const baseTransform = getComputedStyle(card).getPropertyValue('--base-transform').trim();
      card.style.transform = `${baseTransform} perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    card.addEventListener('animationend', resetTransform);

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;

      const centerX = rect.left + cardWidth / 2;
      const centerY = rect.top + cardHeight / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const maxRotate = 15;
      const rotateX = (mouseY / cardHeight) * -maxRotate;
      const rotateY = (mouseX / cardWidth) * maxRotate;

      const baseTransform = getComputedStyle(card).getPropertyValue('--base-transform').trim();
      card.style.transform = `${baseTransform} perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      const baseTransform = getComputedStyle(card).getPropertyValue('--base-transform').trim();
      card.style.transform = `${baseTransform} perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const toggleButton = document.querySelector('.navbar-toggle');
  const navLinks = document.querySelector('.nav-links');
  const descriptionText = document.querySelector('#description-text');

  // Debugging: Log to confirm elements are found
  console.log('Navbar:', navbar);
  console.log('Toggle Button:', toggleButton);
  console.log('Nav Links:', navLinks);
  console.log('Description Text:', descriptionText);

  // Set the description text without a <br> tag
  if (descriptionText) {
    descriptionText.textContent = 'Turning ideas into interactive realities with code and design';
  }

  // Set initial state on page load
  if (window.innerWidth <= 768) {
    navLinks.style.display = 'none';
  }

  // Toggle functionality
  const toggleNavbar = () => {
    if (window.innerWidth <= 768) {
      console.log('Toggling navbar...');
      navbar.classList.toggle('is-open');
      const isOpen = navbar.classList.contains('is-open');
      navLinks.style.display = isOpen ? 'grid' : 'none';
      console.log('Navbar is now:', isOpen ? 'open' : 'closed');
    }
  };

  if (toggleButton) {
    toggleButton.addEventListener('click', toggleNavbar);
  } else {
    console.error('Toggle button not found!');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navbar.classList.remove('is-open');
      navLinks.style.display = '';
    } else if (!navbar.classList.contains('is-open')) {
      navLinks.style.display = 'none';
    }
  });
});
