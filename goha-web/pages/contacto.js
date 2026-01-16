// import React, { useEffect, useRef, useState } from 'react';
// import ContactoContenido from '@/components/contacto/ContactoContenido';
// import Navbar from '@/components/Navbar';
// import styles from './Contacto.module.css';
// import Footer from '@/components/Footer';

// export default function Contacto() {
//   const sloganRef = useRef(null);
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setShowNavbar(!entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (sloganRef.current) {
//       observer.observe(sloganRef.current);
//     }

//     return () => {
//       if (sloganRef.current) {
//         observer.unobserve(sloganRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div className={styles.contactoPage}>
//         <Navbar visible={true} />
//         <main className={styles.contactoMain}>
//           <ContactoContenido />
//           <Footer />
//         </main>

//       </div>
//     </div>
//   );
// }

import React from 'react';
import styles from './Contacto.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BarrasDecorativas from '@/components/BarrasDecorativas';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['ventas@goha.mx'],
      link: 'mailto:info@empresa.com'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Teléfono',
      details: ['614 412 1803'],
      link: 'tel:+526141234567'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Horario',
      details: ['Lun - Vie: 8:00 - 18:00'],
      link: null
    }
  ];

  return (
    <>  
                <Navbar visible={true} />
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Contáctanos
          </h2>
      <BarrasDecorativas />
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros
            para cualquier consulta o información que necesites.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {contactInfo.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <h3 className={styles.cardTitle}>
                  {item.title}
                </h3>
                <div className={styles.detailsWrapper}>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className={styles.detail}>
                      {item.link && idx === 0 ? (
                        <a href={item.link} className={styles.detailLink}>
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        <div style={{ height: '25vh', background: '#ffffffff' }} />

    <Footer />      

    </>
  );
}