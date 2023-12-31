import UseDark from '../hooks/useDataForm';
import Image from 'next/image';
import Layout from '../components/Layout';
import Styles from '../styles/Skills.module.scss';

export default function skills() {
  
  const { isDark } = UseDark();
  
  return (
    <Layout
      pagina="Skills"
    >
      <main className={Styles.container}>
        <div className={Styles.skills}>
          <section className={Styles.skills__program}>
            <h2>Habilidades</h2>
            <div className={Styles.skills__program_images}>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image Layout="resposive" width={60} height={60} src="/img/skills/html5.svg" alt="HTML" />
                <p>HTML5</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/css3.svg" alt="CSS" />
                <p>CSS3</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/bootstrap-5.svg" alt="Boostrap" />
                <p>Bootstrap</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/tailwind.svg" alt="Tailwind" />
                <p>TAILWIND</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/sass.svg" alt="SASS" />
                <p>SASS</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/javascript.svg" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/Typescript_logo_2020.svg" alt="TYPESCRIPT" />
                <p>Typescript</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/react.svg" alt="REACT" />
                <p>REACT</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/redux.svg" alt="REDUX" />
                <p>REDUX</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/nextjs.svg" alt="NEXT" />
                <p>NEXT</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/jest.svg" alt="JEST" />
                <p>JEST</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/git.svg" alt="GIT" />
                <p>GIT</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/nodejs.svg" alt="NODE" />
                <p>NODE</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/express.svg" alt="EXPRESS" />
                <p>EXPRESS</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/NestJS.svg" alt="NESTJS" />
                <p>NestJS</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/mongodb.svg" alt="MONGODB" />
                <p>MONGODB</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/firebase.svg" alt="FIREBASE" />
                <p>FIREBASE</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/mysql.svg" alt="MYSQL" />
                <p>MYSQL</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/docker.svg" alt="DOCKER" />
                <p>Docker</p>
              </div>
              <div className={isDark ? Styles.programa__dark : Styles.programa}>
                <Image width={60} height={60} src="/img/skills/Vue.js_logo_2.svg" alt="VUEJS" />
                <p>VueJS</p>
              </div>
            </div>
          </section>
          <section className={Styles.skills__program_description}>
            <h2>Descripción</h2>
            <div className={Styles.skill__list}>
              <ul className={Styles.skill__list_items}>
                <li>
                  <h3>HTML5</h3>
                  <p>HTML Semantico - Performance - Lazy loading - SEO - Layout - Formularios</p>
                </li>
                <li>
                  <h3>CSS3</h3>
                  <p>Responsive web design - Layout - Grid layout - Flex layout - Animaciones</p>
                </li>
                <li>
                  <h3>BOTSTRAP 5</h3>
                  <p>Modules - Introducción a Proyectos de React</p>
                </li>
                <li>
                  <h3>TAILWIND CSS</h3>
                  <p>Modules - Introducción a Proyectos de React</p>
                </li>
                <li>
                  <h3>SASS</h3>
                  <p>Variables - Funciones - Mixins - Herencia</p>
                </li>
                <li>
                  <h3>JavaScript (ES6+)</h3>
                  <p>Document object model - POO - Functional programming - API Rest - Asynchronism - Data management</p>
                </li>
                <li>
                  <h3>Typescript</h3>
                  <p>Clases y POO - Interfaces - NameSpaces - Decoradores - Depuración de Errores</p>
                </li>
                <li>
                  <h3>React JS</h3>
                  <p>Hooks - API Rest - React router - State management - Functional programming - POO - Clean code</p>
                </li>
                <li>
                  <h3>Redux</h3>
                  <p>State Management</p>
                </li>
                <li>
                  <h3>NEXT JS</h3>
                  <p>Server Side Rendering - SEO Optimitation Friendly SPA</p>
                </li>
                <li>
                  <h3>JEST JS</h3>
                  <p>Unitary Testing - Integration Testing - TDD</p>
                </li>
                <li>
                  <h3>GIT</h3>
                  <p>Commit management - Pull - Push - Checkout - Reset - Branch management</p>
                </li>
                <li>
                  <h3>Node.JS</h3>
                  <p>Model View Controller - Database connection - API Rest - CRUD</p>
                </li>
                <li>
                  <h3>EXPRESS</h3>
                  <p>Rutes Definition to HTTP method - GET - POST - PUT - DELETE</p>
                </li>
                <li>
                  <h3>NEST JS</h3>
                  <p>REST, TypeScript, Websockets, Autenticación, Authorización</p>
                </li>
                <li>
                  <h3>MongoDB</h3>
                  <p>CRUD - Subconsults - Inner joins</p>
                </li>
                <li>
                  <h3>MySQL</h3>
                  <p>CRUD - Subconsults - Inner joins</p>
                </li>
                <li>
                  <h3>FireBase</h3>
                  <p>Cloud Firestore - Storage Functions - Realtime Database - SSL</p>
                </li>
                <li>
                  <h3>Docker</h3>
                  <p>Dockerfile - Compose - DockerHub - Registros - Despliegues - Volúmenes - Multi-staged builds - Multi architecture builds</p>
                </li>
                <li>
                  <h3>VueJS</h3>
                  <p>Vuex - Autenticación - Composables - Deployment - Vue 3 - Pinia - Vite - Composition API - Script Setup - Vue-Query - Quasar - Caché</p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
