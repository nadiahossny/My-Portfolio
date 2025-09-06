        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        // Theme Management
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;

        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme') || 'dark';
        body.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-sun';
            } else {
                themeIcon.className = 'fas fa-moon';
            }
        }

        // Color Theme Management
        const colorOptions = document.querySelectorAll('.color-option');

        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                colorOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                const primary = option.dataset.primary;
                const secondary = option.dataset.secondary;
                
                document.documentElement.style.setProperty('--primary-color', primary);
                document.documentElement.style.setProperty('--secondary-color', secondary);
                document.documentElement.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${primary}, ${secondary})`);
                
                localStorage.setItem('primaryColor', primary);
                localStorage.setItem('secondaryColor', secondary);
            });
        });

        // Load saved color theme
        const savedPrimary = localStorage.getItem('primaryColor');
        const savedSecondary = localStorage.getItem('secondaryColor');

        if (savedPrimary && savedSecondary) {
            document.documentElement.style.setProperty('--primary-color', savedPrimary);
            document.documentElement.style.setProperty('--secondary-color', savedSecondary);
            document.documentElement.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${savedPrimary}, ${savedSecondary})`);
            
            colorOptions.forEach(option => {
                option.classList.remove('active');
                if (option.dataset.primary === savedPrimary) {
                    option.classList.add('active');
                }
            });
        }

        // Project Details Data
        const projectsData = {
            ecommerce: {
                title: "E-Commerce Mobile App",
                image: "img/mm (1).png",
                tech: ["Flutter", "REST APIs", "Provider", "Firebase", "Push Notifications"],
                duration: "3 weeks",
                description: "Built a production-ready e-commerce mobile application with comprehensive features including secure user authentication, dynamic product catalog, advanced search and filtering, shopping cart management, and integrated payment processing using Stripe. The app implements state management with Provider pattern and includes real-time notifications for order updates.",
                features: [
                    "User authentication and profile management",
                    "Product catalog with search and filters", 
                    "Shopping cart and wishlist functionality",
                    "Secure payment integration with Stripe",
                    "Order tracking and history",
                    "Push notifications for order updates",
                    "Multi-language support",
                ],
                links: [
                    { name: "GitHub", url: "https://github.com/nadd5/ecommerce-app", icon: "fab fa-github" },
                ]
            },
            taskly: {
                title: "Taskly - Task Management App",
                image: "img/mm (2).png",
                tech: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Design Systems"],
                duration: "2 weeks",
                description: "Designed a comprehensive task management application with focus on user experience and productivity enhancement. Conducted extensive user research, created detailed wireframes, and developed high-fidelity prototypes. The design emphasizes intuitive navigation, clean aesthetics, and efficient task organization workflows.",
                features: [
                    "Comprehensive user research and persona development",
                    "Information architecture and user flow mapping",
                    "Low and high-fidelity wireframes",
                    "Interactive prototypes with micro-interactions",
                    "Design system with consistent components",
                    "Accessibility considerations (WCAG compliance)",
                    "Mobile-first responsive design approach",
                    "Usability testing and design iterations"
                ],
                links: [
                    { name: "Behance", url: "https://www.behance.net/gallery/221757475/Taskly-Simplify-Your-Productivity", icon: "fab fa-behance" },
                  
                ]
            },
            ieee: {
                title: "IEEE PUA Official Website",
                image: "img/ieee.png",
                tech: ["Flutter Web", "Firebase", "Admin Dashboard", "Responsive Design", "SEO"],
                duration: "3 months",
                description: "Co-developed the official website for IEEE PUA Student Branch, serving as the primary digital presence for the organization. The website features real-time event management, project showcase, member profiles, and a comprehensive admin dashboard with full CRUD functionality. Built with Flutter Web for cross-platform compatibility and Firebase for backend services.",
                features: [
                    "Real-time event management and registration",
                    "Project showcase with detailed descriptions",
                    "Member profiles and committee structures",
                    "Admin dashboard with full CRUD operations",
                    "SEO optimization for better visibility",
                    "Mobile-responsive design",
                    "Integration with social media platforms",
                    "Contact forms with email notifications",
                    "Firebase backend for data storage and authentication",
                    "Feature-rich user interface with modern design principles"
                ],
                links: [
                    { name: "Website", url: "https://ieeepuasb.com", icon: "fab fa-web" },
                    { name: "Live Website", url: "https://www.linkedin.com/posts/nadiahossny_ieee-flutter-webdevelopment-activity-7363012864485289985--evg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFLaoMBvBLaVwcEjsRWyQJWryOSxh4mwOw", icon: "fas fa-external-link-alt" }
                ]
            },
            crud: {
                title: "Product Management System",
                image: "img/Screenshot 2025-09-04 031312.png",
                tech: ["HTML", "CSS", "JavaScript", "LocalStorage", "Responsive Design"],
                duration: "3 Days",
                description: "Developed a full-stack product management dashboard with comprehensive CRUD operations, user authentication, and data validation. The system features an intuitive admin interface for inventory management, real-time notifications, and advanced filtering capabilities. Built with the MERN stack for scalable architecture.",
                features: [
                    "Complete CRUD operations for products",
                    "Advanced search and filtering options",
                    "Real-time notifications for inventory updates",
                    "Data validation and error handling",
                    "Responsive admin dashboard",
                    
                ],
                links: [
                    { name: "GitHub", url: "https://github.com/nadd5/Project-Management-System", icon: "fab fa-github" }
                ]
            },
            weather: {
                title: "Weatherly Website",
                image: "img/Screenshot 2025-09-04 031343.png",
                tech: ["HTML", "CSS", "JS", "API Integration", "Responsive Design","Light/Dark mode"],
                duration: "3 Days",
                description: "Developed a weather forecasting website that provides real-time weather updates and forecasts using third-party APIs. The site features a clean, user-friendly interface with responsive design for optimal viewing on all devices. Implemented advanced search functionality and dynamic content loading for enhanced user experience.",
                features: [
                    "Location search with autocomplete",
                    "Responsive design for all devices",
                    "Weather data integration via API",
                    "Moon phase and UV index display",
                    
                ],
                links: [
                    { name: "GitHub", url: "https://github.com/nadd5/weatherly-weather-website", icon: "fab fa-github" }
                ]
            },
            nasa: {
                title: "NASA Explorer",
                image: "img/Screenshot 2024-12-28 152431.png",
                tech: ["HTML5", "CSS3", "JavaScript", "NASA API", "Responsive Design", "AJAX"],
                duration: "1 weeks",
                description: "Built a responsive website that integrates with NASA's public API to display space data, astronomical images, and information. The project showcases modern web development practices including API integration, responsive design, and interactive user interfaces.",
                features: [
                    "NASA API integration for real-time space data",
                    "Responsive design for all device sizes",
                    "Interactive image gallery with space photos",
                    "Astronomical data visualization",
                    "Search and filter functionality",
                    "Modern CSS animations and transitions",
                    "Mobile-first design approach",
                    "Clean and intuitive user interface"
                ],
                links: [
                    { name: "GitHub", url: "https://github.com/nadd5/NASAExp", icon: "fab fa-github" },
                    { name: "Live Demo", url: "https://www.linkedin.com/feed/update/urn:li:activity:7278768503266902016/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7278768503266902016%29", icon: "fas fa-external-link-alt" }
                ]
            }
            ,
            recipe: {
                title: "Forkify Recipe Website",
                image: "img/Screenshot 2025-09-04 031215.png",
                tech: ["HTML", "CSS", "JS", "API Integration", "Responsive Design","Light/Dark mode"],
                duration: "2 Days",
                description: "Recipe website that allows users to search for recipes. The site features a clean, user-friendly interface with responsive design for optimal viewing on all devices. Implemented advanced search functionality and dynamic content loading for enhanced user experience.",
                features: [
                    "Search for recipes with autocomplete",
                    "Responsive design for all devices",
                    "Light/Dark mode toggle",
                    
                ],
                links: [
                    { name: "GitHub", url: "https://github.com/nadd5/Forkify-Recipe-Gallery", icon: "fab fa-github" }
                ]
            },
             media: {
                title: "Social Media Posts",
                image: "img/Neutral Minimalist Digital Product Mockup Facebook Ad(2).png",
                tech: ["Graphic Design", "Canva", "Adobe Photoshop", "Adobe Illustrator"],
                duration: "2 days per design",
                description: "Created a variety of engaging social media posts for different platforms including Instagram, Facebook, and LinkedIn. The designs focus on brand consistency, visual appeal, and effective communication of messages to the target audience.",
                features: [
                    "Social media post designs for various platforms",
                    "Brand-consistent visuals",
                    "Engaging and eye-catching graphics",
                    
                ],
                links: [
                    { name: "Behance", url: "https://www.behance.net/nadiahossny", icon: "fab fa-behance" }
                ]
            },

        };

        // Project Details Function
        function showProjectDetails(projectKey) {
            const project = projectsData[projectKey];
            if (!project) return;

            const modal = new bootstrap.Modal(document.getElementById('projectModal'));
            document.getElementById('projectModalLabel').textContent = project.title;
            
            const modalBody = document.getElementById('projectModalBody');
            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <img src="${project.image}" alt="${project.title}" class="modal-img">
                        <p><strong>Duration:</strong> ${project.duration}</p>
                    </div>
                    <div class="col-md-8">
                        <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
                            ${project.description}
                        </p>
                        
                        <h6 style="color: var(--primary-color); margin-bottom: 0.8rem;">Technologies Used:</h6>
                        <div class="tech-badges">
                            ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                        </div>
                        
                        <h6 style="color: var(--primary-color); margin-bottom: 0.8rem; margin-top: 1.5rem;">Key Features:</h6>
                        <ul style="color: var(--text-secondary); line-height: 1.6;">
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        
                        <div class="project-links">
                            ${project.links.map(link => `
                                <a href="${link.url}" target="_blank" class="project-link">
                                    <i class="${link.icon} me-2"></i>${link.name}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            modal.show();
        }



        // Skill Details Function
        function showSkillDetails(title, icon, description) {
            const modal = new bootstrap.Modal(document.getElementById('skillModal'));
            document.getElementById('skillModalLabel').textContent = title;
            
            const modalBody = document.getElementById('skillModalBody');
            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-12">
                        <div class="text-center mb-4">
                            <div style="width: 80px; height: 80px; background: var(--gradient-primary); 
                                        border-radius: 20px; display: flex; align-items: center; 
                                        justify-content: center; margin: 0 auto 1rem; font-size: 2rem; color: white;">
                                <i class="${icon}"></i>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Skills & Technologies:</h6>
                            <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${description}</p>
                        </div>
                        
                        <div class="mb-3">
                            <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Proficiency Level:</h6>
                            <div class="progress" style="height: 10px; background: var(--bg-tertiary); border-radius: 5px; margin-bottom: 0.5rem;">
                                <div class="progress-bar" style="width: 85%; background: var(--gradient-primary); border-radius: 5px;"></div>
                            </div>
                            <small style="color: var(--text-muted);">Expert Level (85%)</small>
                        </div>
                    </div>
                </div>
            `;
            
            modal.show();
        }


        // smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const collapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (collapse) collapse.hide();
                    }
                }
            });
        });

        // update active navigation link on scroll
        window.addEventListener('scroll', function() {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Typing animation
        function typeWriter(element, texts, speed = 100, pause = 2000) {
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    element.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    element.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                let typeSpeed = speed;
                
                if (isDeleting) {
                    typeSpeed /= 2;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = pause;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
                
                setTimeout(type, typeSpeed);
            }
            
            type();
        }

        document.addEventListener('DOMContentLoaded', function() {
            const typingElement = document.getElementById('typingText');
            if (typingElement) {
                const texts = [
                    'Frontend Developer & UI/UX Designer',
                    'Flutter Mobile App Developer',
                    'Full-Stack Developer'
                ];
                setTimeout(() => {
                    typeWriter(typingElement, texts, 80, 2000);
                }, 1000);
            }
        });

        // counter animation for stats
        function animateCounter(element) {
            const target = parseFloat(element.dataset.target);
            const isFloat = target !== Math.floor(target);
            let count = 0;
            const increment = target / 100;
            
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    element.textContent = isFloat ? target.toFixed(2) : Math.ceil(target);
                    clearInterval(timer);
                } else {
                    element.textContent = isFloat ? count.toFixed(2) : Math.floor(count);
                }
            }, 20);
        }

        const aboutSection = document.getElementById('about');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = document.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        animateCounter(counter);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (aboutSection) {
            statsObserver.observe(aboutSection);
        }

        document.addEventListener('hidden.bs.modal', function (e) {
            const backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(backdrop => backdrop.remove());
            
            // Reset body scroll
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        });

        console.log('Enhanced Portfolio initialized successfully!');


                // // Achievement Details Function
        // function showAchievementDetails(title, icon, description) {
        //     const modal = new bootstrap.Modal(document.getElementById('achievementModal'));
        //     document.getElementById('achievementModalLabel').textContent = title;
            
        //     const modalBody = document.getElementById('achievementModalBody');
        //     modalBody.innerHTML = `
        //         <div class="row">
        //             <div class="col-12">
        //                 <div class="text-center mb-4">
        //                     <div style="width: 80px; height: 80px; background: var(--gradient-primary); 
        //                                 border-radius: 20px; display: flex; align-items: center; 
        //                                 justify-content: center; margin: 0 auto 1rem; font-size: 2rem; color: white;">
        //                         <i class="${icon}"></i>
        //                     </div>
        //                 </div>
                        
        //                 <div class="mb-3">
        //                     <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Achievement Details:</h6>
        //                     <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${description}</p>
        //                 </div>
                        
        //                 <div class="text-center">
        //                     <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
        //                          alt="Achievement" class="modal-img" style="max-width: 300px;">
        //                 </div>
        //             </div>
        //         </div>
        //     `;
            
        //     modal.show();
        //}
        // // Course Details Function
        // function showCourseDetails(title, provider, grade, description) {
        //     const modal = new bootstrap.Modal(document.getElementById('courseModal'));
        //     document.getElementById('courseModalLabel').textContent = title;
            
        //     const modalBody = document.getElementById('courseModalBody');
        //     modalBody.innerHTML = `
        //         <div class="row">
        //             <div class="col-12">
        //                 <div class="mb-3">
        //                     <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Provider:</h6>
        //                     <p style="color: var(--text-secondary); margin-bottom: 1rem;">${provider}</p>
        //                 </div>
                        
        //                 <div class="mb-3">
        //                     <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Grade:</h6>
        //                     <p style="color: var(--text-secondary); margin-bottom: 1rem;">${grade}</p>
        //                 </div>
                        
        //                 <div class="mb-3">
        //                     <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Description:</h6>
        //                     <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${description}</p>
        //                 </div>
                        
        //                 <div class="text-center">
        //                     <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
        //                          alt="Course Certificate" class="modal-img" style="max-width: 400px;">
        //                 </div>
        //             </div>
        //         </div>
        //     `;
            
        //     modal.show();
        // }

        // // Certificate Details Function
        // function showCertDetails(title, provider, year, description) {
        //     const modal = new bootstrap.Modal(document.getElementById('certModal'));
        //     document.getElementById('certModalLabel').textContent = title;
            
        //     const modalBody = document.getElementById('certModalBody');
        //     modalBody.innerHTML = `
        //         <div class="row">
        //             <div class="col-12">
        //                 <div class="mb-3">
        //                     <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Provider:</h6>
        //                     <p style="color: var(--text-secondary); margin-bottom: 1rem;">${provider}</p>
        //                 </div>
                        
        //                 <div class="mb-3">
        //                     <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Year:</h6>
        //                     <p style="color: var(--text-secondary); margin-bottom: 1rem;">${year}</p>
        //                 </div>
                        
        //                 <div class="mb-3">
        //                     <h6 style="color: var(--primary-color); margin-bottom: 0.5rem;">Description:</h6>
        //                     <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${description}</p>
        //                 </div>
                        
        //                 <div class="text-center">
        //                     <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
        //                          alt="Certificate" class="modal-img" style="max-width: 400px;">
        //                 </div>
        //             </div>
        //         </div>
        //     `;
            
        //     modal.show();
        // }