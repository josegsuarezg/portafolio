import Image from 'next/image';
import UseDark from '../hooks/useDataForm';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  
    const { isDark } = UseDark();
  
  return (
    <Layout
      pagina="Home"
    >
      <header className={styles.header}>
        <h1>José Suárez</h1>
        <p>Full Stack Developer</p>
      </header>
      <div className={styles.contenidoPrincipal}>
        <section className={styles.about}>
          <h2>Sobre Mí</h2>
          <p>Siempre he tenido la sed de conocimientos en el área de la tecnología por ello, de manera autodidacta he estado en formación constante en las tecnologías de Desarrollo Web más actuales tanto Frontend como en el Backend.</p>
          <p>Mi experiencia (como Ingeniero) me ha llevado a desarrollar habilidades de trabajo en equipo, liderazgo, entre otras SoftSkill, además de que también he adquirido conocimientos en la Implementación de Herramientas AGILE como SCRUM.</p>
          <p>Dentro del ámbito de la Logística he implementado aplicaciones web para el control de Wharehouse y Stock Control, creando para ello aplicaciones FullStack completas desde el Backend, Base de Datos y FrotEnd, en ocaciones apollado con ORM y CMS según se la complejidad lo permita</p>
          <div className={styles.botones}>
            <a href='/CV José Suárez.pdf' target="_blank" className={styles.button} >Visualizar Resumen</a>
            <a href='/CV José Suárez.pdf' download="CV José Suárez.pdf" className={styles.button} >Descargar Resumen</a>
          </div>
        </section>
        <aside className={isDark ? styles.perfil__dark : styles.perfil}>
          <div className={styles.imagen}>
          </div>
          <div className={styles.card}>
            <h3>Nombre</h3>
            <p>José Gregorio Suárez García</p>
            <h3>Nacimiento</h3>
            <p>23 Septiembre 1983</p>
            <h3>Ubicación</h3>
            <p>Ciudad Autónoma de Buenos Aires, Argentina</p>
            <h3>Contactos</h3>
            <p><Image width={15} height={15} src="/img/gmail.png" alt="Correo Logo"/>  josegsuarezg@gmail.com</p>
            <p><Image width={15} height={15} src="/img/whatsapp.png" alt="Teléfono Logo"/>  +54 11 2344 9703</p>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
