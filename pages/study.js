import Layout from '../components/Layout';
import Cursos from '../components/Cursos';
import Styles from '../styles/Study.module.scss';

const data = [
  
  {
    id: 1,
    nombre: "CSS La Guía Completa - Flexbox, CSS Grid, SASS +20 proyectos",
    resumen: "Aprende Flexbox, CSS Grid, Custom Properties, SASS, Mixins, Gulp Workflows, Animaciones, RWD",
    imagen: "/img/cursos/html-css.png",
    url: 'https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/'
  },
  
  {
    id: 2,
    nombre: "Bootstrap 5 y SASS - La Guía Práctica - Crea 10 Sitios Web",
    resumen: "Aprende La nueva versión de Bootstrap con SASS - Además incluye: Gulp, Parcel, NPM, Performance y Buenas Practicas!",
    imagen: "/img/cursos/bootstrap.png",
    url: 'https://www.udemy.com/course/aprende-bootstrap-4-el-framework-responsive-html5-css3-y-js/'
  },
  
  {
    id: 3,
    nombre: "JavaScript Moderno Guía Definitiva Construye +15 Proyectos",
    resumen: "Aprende el Lenguaje de Programación Web más popular paso a paso con +15 Proyectos - Incluye Proyecto MERN Full Stack",
    imagen: "/img/cursos/js.png",
    url: 'https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/'
  },
  
  {
    id: 4,
    nombre: "React - La Guía Completa: Hooks Context Redux MERN +15 Apps",
    resumen: "Incluye React Hooks Gatsby GraphQL Firestore Redux Context MERN Next.js Styled Components Testing Cypress",
    imagen: "/img/cursos/react-redux.png",
    url: 'https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/'
  },
  
  {
    id: 5,
    nombre: "React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL",
    resumen: "Construye una Aplicación en Tiempo Real Completa con React Next.js GraphQL Apollo MongoDB Tailwind Formik",
    imagen: "/img/cursos/react-avanzado.png",
    url: 'https://www.udemy.com/course/fullstack-react-graphql-y-apollo-de-principiante-a-experto/'
  },
  
  {
    id: 6,
    nombre: "React Native - Crea aplicaciones para Android y iOS c/ ReactL",
    resumen: "Aprende a crear aplicaciones iOS y Android con React, incluye: React Navigation, GraphQL, MongoDB, Firebase y más!",
    imagen: "/img/cursos/reactnative.png",
    url: 'https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/'
  },
  
  {
    id: 7,
    nombre: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
    resumen: "Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previo INCLUYE 4 PROYECTOS FINALES",
    imagen: "/img/cursos/desarrolloweb.png",
    url: 'https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/'
  },
  
  {
    id: 8,
    nombre: "Laravel 9 Crea Aplicaciones y Sitios Web con PHP 8 y MVC",
    resumen: "Aprende Laravel y Comienza a Crear Aplicaciones Web Dinámicas, Interactivas y Seguras con este curso INCLUYE 3 PROYECTOS",
    imagen: "/img/cursos/laravel.png",
    url: 'https://www.udemy.com/course/curso-laravel-crea-aplicaciones-y-sitios-web-con-php-y-mvc/'
  },
  
  {
    id: 9,
    nombre: "JavaScript Moderno: Guía para dominar el lenguaje",
    resumen: "Webpack, Clases, Propiedades privadas, ESNext, Node, Npm, Babel, Hot Reaload, CRUD, Carga de archivos y más!",
    imagen: "/img/cursos/Javascript-moderno.png",
    url: 'https://www.udemy.com/course/javascript-fernando-herrera/'
  },
  
  {
    id: 10,
    nombre: "React: De cero a experto ( Hooks y MERN )",
    resumen: "Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers...",
    imagen: "/img/cursos/react.jpg",
    url: 'https://www.udemy.com/course/react-cero-experto/'
  },
  {
    id: 11,
    nombre: "React PRO: Lleva tus bases al siguiente nivel",
    resumen: "Storybook, Github Actions, publicar NPM, TypeScript, patrones de componentes, PWA, Formik, formularios dinámicos y más",
    imagen: "/img/cursos/react-pro.jpg",
    url: 'https://www.udemy.com/course/react-pro/'
  },
  {
    id: 12,
    nombre: "Next.js: El framework de React para producción",
    resumen: "SSR, SSG, CSR, ISR, Middlewares, Rutas dinámicas, Next API, Next Auth, Material UI, despliegues, Cookies y más.",
    imagen: "/img/cursos/next.jpg",
    url: 'https://www.udemy.com/course/nextjs-fh/'
  },
  {
    id: 13,
    nombre: "React Native: Aplicaciones nativas para IOS y Android",
    resumen: "TypeScript, React Native CLI, Google y Apple maps, cámara, GPS, polylines, hooks, autenticación, despliegues y más",
    imagen: "/img/cursos/react-native.jpg",
    url: 'https://www.udemy.com/course/react-native-fh/'
  },
  {
    id: 14,
    nombre: "TypeScript: Tu completa guía y manual de mano.",
    resumen: "La base sólida que necesitas para trabajar con TypeScript",
    imagen: "/img/cursos/typescript.jpg",
    url: 'https://www.udemy.com/course/typescript-guia-completa/'
  },
  {
    id: 15,
    nombre: "Node: De cero a experto",
    resumen: "Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT y mucho más para ser un experto en Node",
    imagen: "/img/cursos/node-cero-experto.jpg",
    url: 'https://www.udemy.com/course/node-de-cero-a-experto/'
  },
  {
    id: 16,
    nombre: "Principios SOLID y Clean Code",
    resumen: "Fundamentos de la arquitectura y desarrollo de software.",
    imagen: "/img/cursos/solid.jpg",
    url: 'https://www.udemy.com/course/solid-clean/'
  },
  {
    id: 17,
    nombre: "Docker - Guía práctica de uso para desarrolladores",
    resumen: "Dockerfile, Compose, DockerHub, Registros, Despliegues, Volúmenes, Multi-staged builds, Multi architecture builds, y más",
    imagen: "/img/cursos/Docker.jpg",
    url: 'https://www.udemy.com/course/docker-guia-practica/'
  },
  {
    id: 18,
    nombre: "Nest: Desarrollo backend escalable con Node",
    resumen: "REST, TypeScript, Websockets, Autenticación, Authorización, Docker, Mongo, Postgres, TypeOrm,",
    imagen: "/img/cursos/nest.jpg",
    url: 'https://www.udemy.com/course/nest-framework/'
  },
  {
    id: 19,
    nombre: "Nest + GraphQL: Evoluciona tus APIs",
    resumen: "Autenticación, autorización, DigitalOcean, Docker, Docker Hub, code first, queries, mutations, enumeraciones y más",
    imagen: "/img/cursos/nest-graphql.jpg",
    url: 'https://www.udemy.com/course/nest-graphql/'
  },
  {
    id: 20,
    nombre: "Vue.js: De cero a experto",
    resumen: "Vuex, unit test, composition api, options api, autenticación, composables, deployment, file structure, lazy load, y más",
    imagen: "/img/cursos/vuejs.jpg",
    url: 'https://www.udemy.com/course/vuejs-fh/'
  },
  {
    id: 21,
    nombre: "Vue.js - Intermedio: Lleva tus bases al siguiente nivel",
    resumen: "Vue 3, Pinia, Vite, TypeScript, Composition API, Script Setup, Vue-Query, Quasar, Caché y más",
    imagen: "/img/cursos/vuejs-intermedio.png",
    url: 'https://www.udemy.com/course/vue-intermedio/'
  },
  

]

const study = () => {
  return (
    <Layout
      pagina="Study"
    >
      <div className={Styles.container}>
        <div className={Styles.universidad}>
          <h1>Título Universitario</h1>
          <h3>Institución Universitaria: La Universidad del Zulia</h3>
          <h2><span>Título Obtenido: </span>Ingeniero Industrial</h2>
        </div>
        <div className={Styles.Cursos}>
          <h1>Cursos Realizados</h1>
          <p>Los cursos realizados son en su mayoría bastantes completos y equilibradamente diseñados entre el conocimiento teórico necesario así como la aplicación práctica de todo el contenido del mismo, todos parten desde el nivel básico hasta el nivel avanzado, incluyendo las pruebas del código necesarias y las refactorizaciones del mismo..</p>
          <Cursos 
            cursos = {data}
          />
        </div>
      </div>
    </Layout>
  )
}

export default study