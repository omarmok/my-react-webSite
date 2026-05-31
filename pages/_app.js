import { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/globals.scss';
import Layouts from '../components/Layouts';
import { TranslationProvider, useTranslation } from '../src/i18n/useTranslation';
import { ibmPlexSansArabic } from "../src/fonts";
import { initHotjar } from "../lib/analytics/hotjar";
config.autoAddCss = false;

const WhatsAppLink = () => {
  const { t } = useTranslation();
  return (
    <a
      href="https://wa.me/+966535468309"
      target="_blank"
      rel="noreferrer noopener"
      aria-label={t('contact.whatsappAria')}
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
  );
};

const WAVEFORM_BARS = [3, 8, 14, 20, 16, 10, 22, 18, 12, 24, 16, 8, 20, 14, 10, 18, 12, 6];

const fmt = (s) => {
  if (!s || !isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
};

const AudioCard = ({ isPlaying, onClick, audioRef }) => {
  const { t, language } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isRTL = language === 'ar';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    if (audio.readyState >= 1) onMeta();
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
    };
  }, [audioRef]);

  const timeStr = duration > 0
    ? `${fmt(currentTime)} / ${fmt(duration)}`
    : fmt(currentTime);

  return (
    <div
      className={[
        'audio-card',
        isExpanded ? 'audio-card--open' : 'audio-card--closed',
        isRTL ? 'audio-card--rtl' : '',
      ].filter(Boolean).join(' ')}
      role="region"
      aria-label={t('audio.cardTitle')}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* ── Collapsible body: heading + description ── */}
      <div
        className="audio-card__body"
        aria-hidden={!isExpanded ? 'true' : undefined}
        id="audio-card-body"
      >
        <div className="audio-card__header">
          <strong className="audio-card__title">{t('audio.cardTitle')}</strong>
          <button
            className="audio-card__toggle"
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label={t('audio.collapseLabel')}
            aria-expanded={isExpanded}
            aria-controls="audio-card-body"
            tabIndex={isExpanded ? 0 : -1}
          >
            {/* chevron-down */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" focusable="false">
              <path d="M3.5 5.5l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <p className="audio-card__desc">{t('audio.cardDesc')}</p>
        <hr className="audio-card__rule" aria-hidden="true" />
      </div>

      {/* ── Controls: always visible ── */}
      <div className="audio-card__controls" dir="ltr">
        {/* Mic pill — shown only when collapsed, acts as expand handle */}
        <button
          className="audio-card__mic"
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-label={t('audio.expandLabel')}
          aria-hidden={isExpanded ? 'true' : undefined}
          tabIndex={isExpanded ? -1 : 0}
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true" focusable="false">
            <rect x="3.5" y="0.5" width="5" height="8" rx="2.5" fill="currentColor"/>
            <path d="M1 7C1 10.314 3.239 13 6 13C8.761 13 11 10.314 11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <line x1="6" y1="13" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Play / Pause */}
        <button
          className={`audio-card__play${isPlaying ? ' is-playing' : ''}`}
          type="button"
          onClick={onClick}
          aria-label={isPlaying ? t('audio.pauseLabel') : t('audio.playLabel')}
          aria-pressed={isPlaying}
        >
          {isPlaying ? (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false">
              <rect x="2" y="1" width="3.5" height="11" rx="1.5" fill="currentColor"/>
              <rect x="7.5" y="1" width="3.5" height="11" rx="1.5" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" focusable="false">
              <path d="M3 1.5L11.5 6.5L3 11.5V1.5Z" fill="currentColor"/>
            </svg>
          )}
        </button>

        {/* Waveform visualization */}
        <div className="audio-card__waveform" aria-hidden="true">
          {WAVEFORM_BARS.map((peak, i) => (
            <span
              key={i}
              className={`audio-card__bar${isPlaying ? ' is-active' : ''}`}
              style={{ '--peak': `${peak}px`, '--i': i }}
            />
          ))}
        </div>

        {/* Elapsed / total time */}
        <span className="audio-card__time" aria-live="off" aria-atomic="true">
          {timeStr}
        </span>
      </div>
    </div>
  );
};

const AudioFallbackText = () => {
  const { t } = useTranslation();
  return <>{t('audio.fallbackText')}</>;
};

function MyApp({ Component, pageProps }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState('en');
  const hotjarId = 1978942;
  const hotjarVersion = 6;

  useEffect(() => {
    initHotjar({ id: hotjarId, version: hotjarVersion });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let mounted = true;
    let aosModule;
    let idleId;
    let timeoutId;
    let mutationObserver;

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

    // Normalize accessibility attributes on injected widgets
    const normalizeInjectedWidgets = () => {
      document
        .querySelectorAll('.chat-gpt-query-model button, .chat-gpt-query-model-wrapper button')
        .forEach((btn) => {
          if (!btn.getAttribute('aria-label')) {
            btn.setAttribute('aria-label', 'Toggle translator panel');
          }
          if (!btn.getAttribute('type')) {
            btn.setAttribute('type', 'button');
          }
        });

      const tabbableWrapper = document.querySelector('.chat-gpt-query-model-wrapper[tabindex]');
      if (tabbableWrapper && tabbableWrapper.tabIndex > 0) {
        tabbableWrapper.tabIndex = 0;
      }
    };

    normalizeInjectedWidgets();
    mutationObserver = new MutationObserver(normalizeInjectedWidgets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mounted = false;
      if (typeof window !== 'undefined' && idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      if (aosModule?.refreshHard) {
        aosModule.refreshHard();
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const storedLang = window.localStorage.getItem('site_lang');
    if (storedLang === 'ar' || storedLang === 'en') {
      setLanguage(storedLang);
    } else {
      window.localStorage.setItem('site_lang', 'en');
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const root = document.documentElement;
    const nextLang = language === 'ar' ? 'ar' : 'en';
    root.lang = nextLang;
    root.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    root.classList.toggle('rtl', nextLang === 'ar');
    root.classList.toggle('ltr', nextLang === 'en');
    return undefined;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'ar' : 'en';
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('site_lang', next);
      }
      return next;
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
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
  return (
    <TranslationProvider language={language}>
      <Layouts
        fontClass={`${ibmPlexSansArabic.className} ${ibmPlexSansArabic.variable} font-ibm-plex-sans-arabic`}
        onToggleLanguage={toggleLanguage}
      >
        <WhatsAppLink />

        <AudioCard isPlaying={isPlaying} onClick={playAudio} audioRef={audioRef} />

        {/* مشغل الصوت (مخفي) */}
        <audio ref={audioRef} style={{ display: 'none' }}>
          <source src="/summary.mp3" type="audio/mpeg" />
          <AudioFallbackText />
        </audio>

        <Component {...pageProps} />
      </Layouts>
    </TranslationProvider>
  );
}

export default MyApp;
