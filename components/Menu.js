import UseDark from '../hooks/useDataForm';
import Link from "next/link";
import styles from "../styles/Menu.module.scss";
import Image from "next/image";


const Menu = ({pagina}) => {
  
  const { isDark, handleDarkMode } = UseDark();
  
  return (
    <nav className={styles.navegation}>
      <Link href="/" className={pagina === "Home" ? styles.link : styles.home}>
          <Image src="/img/icons/casa.png" alt="home" width={30} height={30}
          />
      </Link>
      <Link href="/skills" className={pagina === "Skills" ? styles.link : styles.havilidades}>
          <Image src="/img/icons/pluma.png" alt="pluma" width={30} height={30}/>
      </Link>
      <Link href="/projects" className={pagina === "Experience" ? styles.link : styles.proyectos}>
          <Image src="/img/icons/maletin.png" alt="maletin" width={30} height={30} />
      </Link>
      <Link href="/study" className={pagina === "Study" ? styles.link : styles.estudios}>
          <Image src="/img/icons/libro.png" alt="libro" width={30} height={30} />  
      </Link>
      <Link href="/contact" className={pagina === "Contact" ? styles.link : styles.contacto}>
          <Image src="/img/icons/correo-de-contacto.png" alt="correo-de-contacto" width={30} height={30} />  
      </Link>
      <a className={styles.darkmode} onClick={handleDarkMode}>
        {isDark ?
          <Image src="/img/icons/dom.png" alt="luna" width={30} height={30} />
        :
          <Image src="/img/icons/luna.png" alt="luna" width={30} height={30} />
        }
      </a>
  </nav>
  )
}

export default Menu