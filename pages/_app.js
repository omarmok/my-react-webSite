import { useEffect, useRef, useState } from "react";
import { hotjar } from 'react-hotjar';
import Head from 'next/head';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import '../styles/globals.scss';
import Layouts from '../components/Layouts';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonColor, setButtonColor] = useState('#25D366'); // اللون الافتراضي للزر

  useEffect(() => {
    (function(h, o, t, j, a, r) {
      h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments) };
      h._hjSettings = { hjid: 1978942, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script'); r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setButtonColor('#25D366'); // إعادة اللون الافتراضي بعد التوقف
      } else {
        audioRef.current.play();
        setButtonColor('#FF5733'); // تغيير اللون أثناء التشغيل
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <Head> 
        <meta charSet="UTF-8" />
        <title>Omar Mokhtar</title>
        <meta name="description" content="UI/UX Designer" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap" rel="stylesheet" />
      </Head>

      <Layouts>
        <a href="http://wa.me/+966535468309" target="_blank" rel="noreferrer">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="whatsapp-button">
            {/* ... أيقونة SVG ... */}
          </svg>
        </a>

        <button 
          onClick={playAudio} 
          style={{
            position: 'fixed',
            bottom: '80px',
            left: '20px',
            zIndex: 1000,
            backgroundColor: buttonColor, // استخدام اللون المحدد
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          {isPlaying ? "إيقاف الصوت" : "استمع إلى نبذة عني "}
        </button>

        {/* مشغل الصوت (مخفي) */}
        <audio ref={audioRef} style={{ display: 'none' }}>
          <source src="/summary.mp3" type="audio/mpeg" />
          المتصفح لا يدعم تشغيل الصوت.
        </audio>

        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;
