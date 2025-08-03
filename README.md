(Note: In this respository, in small devices continue with background image as per design has in desktop view)

Byoerr -
This project is a high-fidelity, fully responsive, and accessible implementation of a single-page design for "Byoerr". It is built with modern web standards, focusing on semantic HTML, performance, and compliance with WCAG 2.1 AA guidelines.

(Image: [A preview of the landing page design](https://www.figma.com/design/UDlFhm7q0b7XdcPi1A9t6G/Travel-Landing-Page---Byoerr-Web-Design--Community-?node-id=108-301&t=145aJmfJILnl1Rm2-0))

Features
Fully Responsive Design: Adapts seamlessly to all device sizes, from mobile phones to desktops.

Tested in following common screen resolutions:

- Desktop: 1920×1080, 1366×768, 1536×864, 1280×720
- Mobile: 360×800, 390×844, 393×873, 412×915
- Tablet: 768×1024, 1280×800, 800×1280, 820×1180

WCAG 2.1 AA Compliant: Built with a focus on accessibility to ensure the site is usable by everyone, including people with disabilities.

Semantic HTML5 Structure: Uses modern HTML5 tags (<header>, <main>, <section>, <nav>, <footer>) for better SEO and accessibility.

Interactive Carousels: Smooth, touch-friendly carousels for "Destinations" and "Testimonials" sections, create using Swiper.js.

Performance Optimized: Implements best practices like lazy loading for images to ensure fast load times.

Tech Stack
HTML5: For the core structure and content.

CSS3: For custom styling and layout.

Bootstrap 5.3: As the primary CSS framework for grid layout and responsive utilities.

JavaScript : For interactive elements and plugins initialization.

Swiper.js: For creating responsive, accessible, and touch-enabled carousels.

gulpfile.js: For automate or minified css and js files(minified files compiled directly inside dist directories css and js respectively)

Project Structure
The project follows a standard and intuitive file structure:

.
├── index.html # The main HTML file
├── dist/css/
│ └── app-style.css # Custom stylesheets
├── dist/js/
│ └── main.js # Custom JavaScript for initialization
├── dist/images/ # Folder for all image assets
└── vendor/ # Folder for third-party libraries (e.g., Swiper.js)

Setup and Usage
This is a static website and does not require a complex build process.

1. Clone the repository:

git clone [https://github.com/mangesh-gawade1922/digital-polygon-assignment---bkup-last.git](https://github.com/your-username/digital-polygon-assignment---bkup-last.git)

2. Navigate to the project directory:

cd digital-polygon-assignment---bkup-last

3. Open in a browser:
   You can open the index.html file directly in your web browser.
   or
   Open project directory in VS code, View > Terminal; Then run command "npm run build" so webpage open in browser(Used browsersync plugin in gulpfile.js for same)
   [Note: In project directory I also pushed node_module, so no need to install any node dependencies]

Accessibility Compliance (WCAG 2.1)
This project was audited and updated to meet WCAG 2.1 AA standards. Key improvements include:

Guideline 1.1.1 (Non-text Content): All <img> elements have descriptive alt attributes to provide context for screen reader users.

Guideline 1.3.1 (Info and Relationships): The code uses correct semantic structure (headings, lists, sections). The star ratings in the testimonials were simplified to a single div with a clear aria-label to prevent screen reader verbosity.

Guideline 2.4.1 (Bypass Blocks): A "Skip to main content" link is included as the first focusable element on the page, allowing keyboard users to easily bypass the header navigation.

Guideline 2.4.4 (Link Purpose - In Context): Ambiguous links like "Read more" have been enhanced with visually hidden text to provide full, unambiguous context for screen readers (e.g., "Read more about our company").

Also had deployed same assignment on netlifly(If faced any issue viewing page) you can directly view page here: https://mangesh-assignment-with-mb-bg.netlify.app/
