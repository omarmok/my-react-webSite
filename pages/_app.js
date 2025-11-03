import { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';
import '../styles/globals.scss';
import Layouts from '../components/Layouts';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hotjarId = Number(process.env.NEXT_PUBLIC_HOTJAR_ID);
  const hotjarVersion = Number(process.env.NEXT_PUBLIC_HOTJAR_VERSION) || 6;
  const enableHotjar = process.env.NODE_ENV === 'production' && Number.isFinite(hotjarId);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let mounted = true;
    let aosModule;
    let idleId;
    let timeoutId;

    const loadAOS = async () => {
      const [{ default: AOS }] = await Promise.all([
        import('aos'),
        import('aos/dist/aos.css'),
      ]);
      if (!mounted) {
        return;
      }
      aosModule = AOS;
      AOS.init({
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
    };

    const scheduleAOS = () => {
      loadAOS().catch(() => {});
    };

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(scheduleAOS);
    } else {
      timeoutId = window.setTimeout(scheduleAOS, 200);
    }

    return () => {
      mounted = false;
      if (typeof window !== 'undefined' && idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (aosModule?.refreshHard) {
        aosModule.refreshHard();
      }
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const audioButtonLabel = isPlaying ? 'Pause summary audio playback' : 'Play summary audio description';

  return (
    <>
      <Layouts fontClass="font-ibm-plex-sans-arabic">
      {enableHotjar && (
        <Script
          id="hotjar-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${hotjarId},hjsv:${hotjarVersion}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      )}
      <a
        href="http://wa.me/+966535468309"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat with Omar Mokhtar"
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="whatsapp-button"
          aria-hidden="true"
          focusable="false"
        ><path d="M30.7195 7.32408C27.9449 4.53633 24.2538 3.0018 20.3219 3C12.2191 3 5.6258 9.61415 5.62221 17.7448C5.62221 20.3432 6.2979 22.8803 7.58457 25.1163L5.5 32.7565L13.2919 30.7062C15.4394 31.8801 17.8564 32.5004 20.3165 32.5004H20.3219C28.4229 32.5004 35.018 25.8863 35.0216 17.7556C35.0216 13.8156 33.496 10.1118 30.7195 7.32408ZM20.3219 30.0102H20.3165C18.1242 30.0102 15.9731 29.4187 14.0988 28.3026L13.6531 28.0375L9.02937 29.2546L10.2639 24.7322L9.97281 24.2688C8.74903 22.3177 8.1039 20.0619 8.10569 17.7466C8.10749 10.99 13.5884 5.49203 20.3273 5.49203C23.5907 5.49203 26.6582 6.7705 28.9638 9.08581C31.2712 11.4029 32.5399 14.481 32.5381 17.7556C32.5363 24.514 27.0554 30.012 20.3201 30.012L20.3219 30.0102ZM27.023 20.8319C26.6564 20.6479 24.8504 19.7554 24.5126 19.6327C24.1765 19.5101 23.9304 19.4488 23.686 19.8167C23.4416 20.1863 22.7371 21.0158 22.5233 21.261C22.3094 21.5063 22.0956 21.5369 21.7272 21.353C21.3606 21.1691 20.1764 20.7796 18.7729 19.5246C17.6803 18.5472 16.9435 17.3409 16.7297 16.973C16.5158 16.6034 16.7063 16.405 16.8914 16.2211C17.0567 16.057 17.258 15.7901 17.4431 15.5755C17.6264 15.361 17.6875 15.2059 17.8097 14.9606C17.9319 14.7154 17.8708 14.499 17.7791 14.3151C17.6875 14.1312 16.9525 12.3172 16.647 11.5796C16.3487 10.862 16.0468 10.9575 15.8204 10.9467C15.6065 10.9359 15.3621 10.9341 15.1159 10.9341C14.8697 10.9341 14.4726 11.0261 14.1365 11.3957C13.8005 11.7654 12.8517 12.6562 12.8517 14.4702C12.8517 16.2842 14.1671 18.0351 14.3522 18.2821C14.5355 18.5274 16.9417 22.2492 20.6256 23.845C21.5026 24.2255 22.1854 24.4509 22.7192 24.6204C23.5997 24.8999 24.3994 24.862 25.0319 24.7665C25.7382 24.6601 27.2046 23.8757 27.5118 23.0138C27.8173 22.1536 27.8173 21.4161 27.7257 21.261C27.634 21.1078 27.3896 21.0158 27.0212 20.8301L27.023 20.8319Z" fill="white"></path></svg>
      </a>

      <button
          type="button"
          onClick={playAudio}
          className={`audio-button ${isPlaying ? 'audio-button-stop' : ''}`}
          aria-label={audioButtonLabel}
          aria-pressed={isPlaying}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} aria-hidden="true" focusable="false" />
          <span className="audio-button-text">{isPlaying ? "Stop" : "Listen to My Summary"}</span>
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
