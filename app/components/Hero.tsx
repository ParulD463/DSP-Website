import { useEffect, useRef } from 'react';

const Hero = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          const contentCurrent = contentRef.current;
          if (contentCurrent) {
            const scrollY = window.scrollY;
            contentCurrent.style.transform = `translateY(${scrollY * 0.3}px)`; // Adjust the 0.5 to control the speed
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/dsp_homePage_video.mp4"
        ></video>

        <div ref={contentRef} className="text-center z-10">
          <main className="p-24">
            <h1 style={{ 
              fontFamily: 'Lato', 
              fontSize: '96px', 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'white'
            }}>
              DELTA SIGMA PI
            </h1>        
            <p style={{ 
              fontFamily: 'Lato ', 
              fontWeight: '300',
              fontSize: '23px', 
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'white'
            }}>
              AMERICA'S FOREMOST CO-ED BUSINESS FRATERNITY
            </p>
            <div className="flex justify-center my-8">
              <div className="h-1 w-48 bg-white"></div>
            </div>
            <p style={{ 
              fontFamily: 'Lato', 
              fontWeight: '300',
              fontSize: '27px', 
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'white'
            }}>
              PI CHI CHAPTER | UC SANTA CRUZ
            </p>
          </main>
        </div>
      </div>
    )
}

export default Hero