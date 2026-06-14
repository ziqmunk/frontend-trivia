export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const TRIVIA_DATA: Question[] = [
  {
    id: 1,
    question: "Which directive in Angular is used for two-way data binding?",
    options: ["*ngIf", "[(ngModel)]", "ngClass", "bindValue"],
    correctAnswer: "[(ngModel)]"
  },
  {
    id: 2,
    question: "Which Tailwind v4 directive is used to import the entire framework into your CSS?",
    options: ["@tailwind utilities;", "@import \"tailwindcss\";", "@use \"tailwind\";", "@theme;"],
    correctAnswer: "@import \"tailwindcss\";"
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink Text Management Law", "Home Tool Markup Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 4,
    question: "In Angular standalone components, where must you declare local component dependencies like RouterLink or CommonModule?",
    options: ["In the app.module.ts file", "In the main.ts bootstrap function", "Inside the component's 'imports' array", "Inside the component's 'providers' array"],
    correctAnswer: "Inside the component's 'imports' array"
  },
  {
    id: 5,
    question: "Which CSS display property allows you to easily align items both vertically and horizontally using 'justify-center' and 'items-center' in Tailwind?",
    options: ["display: block;", "display: inline;", "display: grid;", "display: flex;"],
    correctAnswer: "display: flex;"
  },
  {
    id: 6,
    question: "Which HTML element is the most appropriate semantic tag to wrap your primary page navigation links?",
    options: ["<nav>", "<section>", "<div>", "<header>"],
    correctAnswer: "<nav>"
  },
  {
    id: 7,
    question: "What does the Angular life-cycle hook 'ngOnDestroy' primarily get used for?",
    options: ["To initialize data from an API", "To clean up resources, like clearing active timers or unsubscribing from observables", "To render HTML components on the screen", "To force-refresh Tailwind layout styles"],
    correctAnswer: "To clean up resources, like clearing active timers or unsubscribing from observables"
  },
  {
    id: 8,
    question: "In Tailwind CSS, what is the default behavior of utility classes like 'md:text-xl'?",
    options: ["Mobile-first (applies to screens matching 'md' width and wider)", "Desktop-first (applies only to screens smaller than 'md')", "It applies strictly to tablets only", "It applies globally regardless of screen dimension"],
    correctAnswer: "Mobile-first (applies to screens matching 'md' width and wider)"
  },
  {
    id: 9,
    question: "Which modern CSS layout system uses track lines and fractional units (fr) to build highly structured complex two-dimensional grids?",
    options: ["Flexbox", "CSS Grid", "Absolute Positioning", "Table layouts"],
    correctAnswer: "CSS Grid"
  },
  {
    id: 10,
    question: "Which attribute is required on an HTML <img> tag to provide accessibility for screen readers and show fallback text if the image fails to load?",
    options: ["title", "src", "href", "alt"],
    correctAnswer: "alt"
  }
];