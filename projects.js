// Project data used by project.html (and the order of prev/next links).
//
// To add images: put files in assets/projects/<id>/ and list them in `images`, e.g.
//   images: [
//     { src: "assets/projects/secura/dashboard.png", caption: "Asset monitoring dashboard" },
//   ],
// The first image is used as the cover. Images that fail to load are hidden.
//
// To add links (live site, GitHub, demo video):
//   links: [{ label: "Live Site", url: "https://..." }],

const PROJECTS = [
  {
    id: "secura",
    title: "Secura System: Risk-Based Inspection Platform",
    badge: "In Production", live: true, org: "Enrise Digital",
    period: "Oct 2025 – Present",
    overview: "Secura is an enterprise asset-integrity management (AIMS) platform for the oil & gas sector. It applies Risk-Based Inspection (RBI) to help engineers monitor the condition of structural and pipeline assets and plan inspections around risk.",
    images: [
      { src: "assets/projects/secura/02-dashboard.jpg", caption: "Facilities Integrity Management dashboard" },
      { src: "assets/projects/secura/01-login.jpg", caption: "Login page" },
      //{ src: "assets/projects/secura/03-users.png", caption: "User management: users" },
      //{ src: "assets/projects/secura/04-add-user.png", caption: "Add new user with password rules" },
      //{ src: "assets/projects/secura/05-roles.png", caption: "User roles" },
      //{ src: "assets/projects/secura/06-add-role.png", caption: "Add new role" },
      //{ src: "assets/projects/secura/07-access-groups.png", caption: "Access groups" },
      //{ src: "assets/projects/secura/08-add-access-group.jpg", caption: "Add new access group" },
      //{ src: "assets/projects/secura/09-assets.png", caption: "Assets: sites" },
      { src: "assets/projects/secura/10-equipments.png", caption: "Equipments: asset manager" },
      { src: "assets/projects/secura/11-import-asset.png", caption: "Import asset" },
      { src: "assets/projects/secura/12-equipment-details.png", caption: "Selected equipment details" },
      { src: "assets/projects/secura/13-report.png", caption: "Inspection Reference Plan (IRP) report" },
      { src: "assets/projects/secura/14-result-assessment.png", caption: "Risk matrix and inspection interval" },
    ],
    links: [],
    sections: [
      { heading: "My Role", items: [
        "Developed and enhanced core modules of the RBI system, improving workflow efficiency and reducing manual processes.",
        "Integrated live API data into dashboards for real-time monitoring of structural and pipeline assets.",
        "Implemented role-based access control and strengthened security across enterprise modules.",
        "Resolved UI issues across multiple modules and optimised frontend responsiveness in production.",
        "Supported SQL Server operations, generated reports and worked with stakeholders on new functionality.",
      ]},
      { heading: "Key Features", items: [
        "Real-time asset monitoring dashboards fed by REST APIs",
        "Role-based access control for enterprise users",
        "Reporting on asset and inspection data",
      ]},
    ],
    tech: ["C#", "ASP.NET MVC", "SQL Server", "REST APIs"],
  },
  {
    id: "enrise-website",
    title: "Enrise Digital Corporate Website",
    badge: "Live", live: true, org: "Enrise Digital",
    period: "Professional Project",
    overview: "The official company website for Enrise Digital, built from scratch without frameworks so it stays lightweight and easy to maintain.",
    images: [
      { src: "assets/projects/enrise-website/enriseHome.png", caption: "Home page" },
      { src: "assets/projects/enrise-website/enriseAbout.png", caption: "About page" },
      { src: "assets/projects/enrise-website/enriseProduct.png", caption: "Product page" },
      { src: "assets/projects/enrise-website/enriseModules.png", caption: "Modules page" },
      { src: "assets/projects/enrise-website/modulesOverview.png", caption: "Modules overview" },
      { src: "assets/projects/enrise-website/enriseContact.png", caption: "Contact page" },
    ],
    links: [],
    sections: [
      { heading: "What I Did", items: [
        "Built the full site with clean, semantic HTML, CSS and native JavaScript.",
        "Optimised markup and assets for faster load times.",
        "Ensured consistent rendering across browsers and screen sizes.",
      ]},
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "optitech",
    title: "Optitech Landing Page: Secura Product Demo",
    badge: "Live", live: true, org: "Optitech",
    period: "Professional Project",
    overview: "A conversion-focused landing page for the Optitech product line, built to showcase a live demo of the Secura System and turn visitors into leads.",
    images: [
      { src: "assets/projects/optitech/1.png", caption: "Hero section and \"Why Choose SECURA?\" highlights" },
      { src: "assets/projects/optitech/2.png", caption: "Key features of the Secura platform" },
      { src: "assets/projects/optitech/3.png", caption: "Live product demo carousel" },
      { src: "assets/projects/optitech/4.png", caption: "\"Book Demo\" call to action and footer" },
    ],
    links: [],
    sections: [
      { heading: "What I Did", items: [
        "Designed and deployed the landing page on Squarespace.",
        "Configured the page to showcase a live Secura System product demonstration.",
        "Structured content and calls to action to guide visitors through a marketing funnel.",
        "Set up lead capture to drive demo sign-ups.",
      ]},
    ],
    tech: ["Squarespace", "UX Design", "Marketing Funnel"],
  },
  {
    id: "perfect-wave",
    title: "Perfect Wave Academy Management System",
    badge: "Final Year Project", live: false, org: "UniKL MIIT",
    device: "phone",
    period: "Final Year Project",
    overview: "A full-stack platform for running a swimming academy, made of a React admin panel for staff and a cross-platform Flutter mobile app for students and coaches, both backed by Firebase/Firestore.",
    images: [
      { src: "assets/projects/perfect-wave/Perfect Wave Academy.png", caption: "Welcome screen" },
      { src: "assets/projects/perfect-wave/loginPage.png", caption: "Login" },
      { src: "assets/projects/perfect-wave/home.png", caption: "Home: class sessions and progress level" },
      { src: "assets/projects/perfect-wave/classSubcription.png", caption: "Class subscription" },
      { src: "assets/projects/perfect-wave/schedule.png", caption: "Class schedule" },
      { src: "assets/projects/perfect-wave/attendance.png", caption: "QR code attendance scanner" },
      { src: "assets/projects/perfect-wave/video.png", caption: "Swimming tutorial videos" },
      { src: "assets/projects/perfect-wave/shop.png", caption: "Shop" },
      { src: "assets/projects/perfect-wave/cart.png", caption: "Shopping cart" },
      { src: "assets/projects/perfect-wave/payment.png", caption: "Payment" },
      { src: "assets/projects/perfect-wave/toyyibpayPayment.png", caption: "ToyyibPay payment gateway" },
      { src: "assets/projects/perfect-wave/notification.png", caption: "Notifications" },
    ],
    links: [],
    sections: [
      { heading: "Admin Panel (React)", items: [
        "Student records management",
        "Attendance tracking",
        "Class scheduling",
        "Payment management",
        "Notifications, all from a single dashboard",
      ]},
      { heading: "Mobile App (Flutter)", items: [
        "Students and coaches can book sessions",
        "Progress tracking for students",
        "Real-time updates through Firestore",
      ]},
    ],
    tech: ["React", "Bootstrap", "Flutter", "Dart", "Firebase", "Firestore"],
  },
  {
    id: "ktm",
    title: "KTM Komuter Online Ticketing System",
    badge: "Completed", live: false, org: "Academic",
    period: "Academic Project",
    overview: "An online rail-ticketing platform for KTM Komuter passengers that handles ticket purchase, fare calculation and confirmation from start to finish.",
    images: [],
    links: [],
    sections: [
      { heading: "Key Features", items: [
        "One-way and return ticket purchases",
        "Automated email delivery of tickets and payment confirmations via SMTP",
        "Tiered fare discounts for students, senior citizens and OKU passengers",
        "Transaction processing and reporting with LINQ and SQL Server",
      ]},
    ],
    tech: ["C#", "ASP.NET MVC", "SQL Server", "LINQ", "Bootstrap", "SMTP"],
  },
  {
    id: "bookstore",
    title: "Enterprise Bookstore System",
    badge: "Completed", live: false, org: "Academic",
    period: "Academic Project",
    overview: "A multi-tier Java EE web application for an online bookstore, separating presentation, business logic and persistence layers.",
    images: [],
    links: [],
    sections: [
      { heading: "Key Features", items: [
        "User authentication and registration",
        "Book catalogue browsing",
        "Purchasing workflow",
        "Admin management",
      ]},
      { heading: "Architecture", items: [
        "JSF and Servlets for the web layer",
        "EJB for business logic",
        "JPA with JavaDB for persistence",
        "Server-side validation enforced across the stack",
      ]},
    ],
    tech: ["Java", "JSF", "Servlets", "EJB", "JPA", "JavaDB", "CSS"],
  },
];
