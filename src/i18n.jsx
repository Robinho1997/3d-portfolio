import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      de: {
        translation: {
          navbar: {
            about: "Über",
            projects: "Projekte",
            contact: "Kontakt",
          },
          hero: {
            header: "Hi, ich heiße",
            p1: "Ich entwickle Benutzeroberflächen und Webanwendungen",
            p2: "Freut mich dich kennenzulernen!",
          },
          about: {
            headerSmall: "VORSTELLUNG",
            headerBig: "Überblick",
            p: "Ich bin ein erfahrener Softwareentwickler mit Erfahrung in TypeScript und JavaScript sowie Fachkenntnissen in Frameworks wie React, Node.js und Three.js. Ich lerne schnell und arbeite eng mit Kunden zusammen, um effiziente, skalierbare und benutzerfreundliche Lösungen zu entwickeln, die reale Probleme lösen. Lassen Sie uns gemeinsam daran arbeiten, Ihre Ideen zum Leben zu erwecken!",
          },
          works: {
            headerSmall: "MEINE ARBEIT",
            headerBig: "Projekte",
            p: "Die folgenden Projekte stellen meine Fähigkeiten und Erfahrungen anhand realer Beispiele meiner Arbeit unter Beweis. Jedes Projekt wird kurz beschrieben und enthält Links zu Code-Repositories und Live-Demos. Es spiegelt meine Fähigkeit wider, komplexe Probleme zu lösen, mit verschiedenen Technologien zu arbeiten und Projekte effektiv zu verwalten.",
            angler: {
              name: "Angler's Catch Diary",
              description: "Webanwendung mit Serverless Backend. Nach Accounterstellung Möglichkeit mithilfe eines Formulars schnell und flexibel alle Fanginformationen digital zu sichern.",
            },
            hotel: {
              name: "Hotel - Informationsseite",
              description: "Gäste des Hotels können über einen auf der Rezeption platzierten QR Code auf diese Website zugreifen. Die Website beeinhaltet viele nützliche Informationen wie Check-Out/In Zeiten, Frühstückszeiten, Restaurant Tipps, Ausflugsziele etc.",
            },
            shop: {
              name: "Awesome Sneaker Shop",
              description: "Dieses Projekt simuliert einen E-Commerce Shop welcher auf den Verkauf von Sneaker spezialisiert ist. Die Website ist vollständig responsiv und bietet eine Vielzahl von Funktionen wie das Hinzufügen von Artikeln zum Warenkorb, das Anzeigen von Produktdetails und das Abschließen von Bestellungen.",
            }
          },
          contact: {
            headerSmall: "Melden Sie sich",
            headerBig: "Kontakt",
            form: {
              name: "Ihr Name",
              placeholderName: "Wie heißen Sie?",
              email: "Ihre E-Mail",
              placeholderEmail: "Wie lautet Ihre Webadresse?",
              message: "Ihre Nachricht",
              placeholderMessage: "Was Sie sagen wollen?",
              send: "Senden",
              sending: "Absenden",
              successMessage:
                "Danke. Ich werde mich so schnell wie möglich bei Ihnen melden.",
              errorMessage:
                "Ahh, etwas ist schief gelaufen. Bitte versuche es erneut.",
            },
          },
        },
      },
      en: {
        translation: {
          navbar: {
            about: "About",
            projects: "Projects",
            contact: "Contact",
          },
          hero: {
            header: "Hi, I'm",
            p1: "I develop user interfaces and web applications ",
            p2: "Nice to meet you!",
          },
          about: {
            headerSmall: "INTRODUCTION",
            headerBig: "OVERVIEW",
            p: "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
          },
          works: {
            headerSmall: "MY WORK",
            headerBig: "PROJECTS",
            p: "The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
            angler: {
              name: "Angler's Catch Diary",
              description: "Web application with serverless backend. After creating an account, you can use a form to quickly and flexibly save all catch information digitally.",
            },
            hotel: {
              name: "Hotel - information page",
              description: "Guests of the hotel can access this website via a QR code placed on the reception. The website contains a lot of useful information such as check-out/in times, breakfast times, restaurant tips etc.",
            },
            shop: {
              name: "Awesome Sneaker Shop",
              description: "This project simulates an e-commerce shop specializing in the sale of sneakers. The website is fully responsive and offers a wide range of functions such as adding items to the shopping cart, viewing product details and completing orders.",
            }
          },
          contact: {
            headerSmall: "GET IN TOUCH",
            headerBig: "Contact",
            form: {
              name: "Your Name",
              placeholderName: "What's your name?",
              email: "Your email",
              placeholderEmail: "What's your web address?",
              message: "Your message",
              placeholderMessage: "What do you want to say?",
              send: "Send",
              sending: "Sending",
              successMessage:
                "Thank you. I will get back to you as soon as possible.",
              errorMessage: "Ahh, something went wrong. Please try again.",
            },
          },
        },
      },
    },
  });

export default i18n;
