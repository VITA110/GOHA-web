import styles from './CarruselEmpresas.module.css';
import Image from 'next/image';

// Mapeo de logos a sus respectivos PDFs
const empresas = [
  { logo: 'logos/Microsoft.svg', nombre: 'Microsoft', pdf: '/catalogos/microsoft-catalogo.pdf' },
  { logo: 'logos/HP.svg', nombre: 'HP', pdf: '/catalogos/hp-catalogo.pdf' },
  { logo: 'logos/Adobe.svg', nombre: 'Adobe', pdf: '/catalogos/adobe-catalogo.pdf' },
  { logo: '/logos/actualizados/Dell-logo.png', nombre: 'Dell', pdf: '' },
  { logo: '/logos/actualizados/elo.png', nombre: 'ELO TOUCH', pdf: '' },
  { logo: '/logos/actualizados/Epcom-log.png', nombre: 'Epcom', pdf: '' },
  { logo: '/logos/actualizados/Honeywell-logo.png', nombre: 'Honeywell', pdf: '' },
  { logo: 'logos/Zebra.svg', nombre: 'Zebra', pdf: '/catalogos/zebra-catalogo.pdf' },
  { logo: 'logos/Intel.svg', nombre: 'Intel', pdf: '/catalogos/intel-catalogo.pdf' },
  { logo: 'logos/Cisco.svg', nombre: 'Cisco', pdf: '/catalogos/cisco-catalogo.pdf' },
  { logo: 'logos/Autodesk_Logo.svg', nombre: 'Asus', pdf: '/catalogos/cisco-catalogo.pdf' },
  { logo: '/logos/actualizados/APC-logo.png', nombre: 'APC', pdf: '' },
  { logo: '/logos/actualizados/AXIS-LOGO.png', nombre: 'Axis', pdf: '' },
  { logo: '/logos/actualizados/Brother_logo.png', nombre: 'Brother', pdf: '' },
  { logo: '/logos/actualizados/KAspersky_Lab_logo.png', nombre: 'Kaspersky', pdf: '' },
  { logo: '/logos/actualizados/Lenovo_Logo.png', nombre: 'Lenovo', pdf: '' },
  { logo: '/logos/actualizados/Lexmark-logo.png', nombre: 'Lexmark', pdf: '' },
  { logo: '/logos/actualizados/Logitech_logo.png', nombre: 'Logitech', pdf: '' },
  { logo: '/logos/actualizados/hikvision-logo.png', nombre: 'HIK VISION', pdf: '' },
  
];
export default function CarruselEmpresas() {
  const descargarPDF = (pdfUrl, nombreEmpresa) => {
    // Crear un elemento <a> temporal
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `catalogo-${nombreEmpresa.toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.carruselWrapper}>
      <h2 className={styles.titulo}>TRABAJAMOS CON MARCAS RECONOCIDAS</h2>

      {/* Primer carril */}
      <div className={styles.carrilContainer}>
        <div className={styles.filtro + ' ' + styles.izquierda}></div>
        <div className={styles.filtro + ' ' + styles.derecha}></div>
        <div className={styles.carril}>
          {empresas.concat(empresas).map((empresa, i) => (
            <div
              key={`fila1-${i}`}
              onClick={() => descargarPDF(empresa.pdf, empresa.nombre)}
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              <Image 
                src={empresa.logo} 
                alt={`Logo ${empresa.nombre}`} 
                width={100} 
                height={60} 
                className={styles.logo} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Segundo carril (inverso) */}
      <div className={styles.carrilContainer}>
        <div className={styles.filtro + ' ' + styles.izquierda}></div>
        <div className={styles.filtro + ' ' + styles.derecha}></div>
        <div className={`${styles.carril} ${styles.carrilInverso}`}>
          {empresas.concat(empresas).map((empresa, i) => (
            <div
              key={`fila2-${i}`}
              onClick={() => descargarPDF(empresa.pdf, empresa.nombre)}
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              <Image 
                src={empresa.logo} 
                alt={`Logo ${empresa.nombre}`} 
                width={100} 
                height={60} 
                className={styles.logo} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}