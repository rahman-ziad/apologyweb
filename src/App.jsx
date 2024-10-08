
import { useRef, useEffect, useState } from 'react';
import moon from './components/section-1.webp'; // first picture
import hill from './components/section-2.webp'; //second picture
import land from './components/section-3.webp';  //third picture 
import Bear from './components/bear.gif'; // bear with parachute 
import rainSound from './components/rain1.mp3'; // change this if you want to add your custom music
import Preview from './Preview';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Sorry from './Sorry';
import Slider from './Slider';
import Playerv from './playerv';
import { FaHeadphones, FaDesktop } from 'react-icons/fa'; 


// Text variables, change those according to your needs
const TEXT = {
  popupHeading: "Embark on a Heartfelt Journey",
  popupText: "Best experienced on desktop." ,
  popupText2: "Use earphones for an immersive experience.",
  button: "Let's Begin",
  section1: "Hey there",
  section2: "I wanna say something",
  section3: "And that is abcdefghijklmnopqrstuvwxyz",
};

// dont change anything from here if you have no idea whats going on.
function App() {
  const [showPopup, setShowPopup] = useState(true);
  const audioRef = useRef(new Audio(rainSound));

  // Function to handle starting the interaction
  const handleStart = () => {
    setShowPopup(false);
    const audio = audioRef.current;
    audio.loop = false;
    audio.play().catch((error) => console.log('Error playing audio:', error));
  };

  useEffect(() => {
    const audio = audioRef.current;

    const section2Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            audio.play().catch((error) => console.log('Error playing audio:', error));
          }
        });
      },
      { threshold: 0.5 }
    );

    const section3Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            audio.play().catch((error) => console.log('Error playing audio:', error));
          }
        });
      },
      { threshold: 0.5 }
    );

    const section2 = document.querySelector('#section-2');
    const section3 = document.querySelector('#section-3');

    if (section2) section2Observer.observe(section2);
    if (section3) section3Observer.observe(section3);

    return () => {
      if (section2) section2Observer.disconnect();
      if (section3) section3Observer.disconnect();
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <div style={popupStyle}>
          <div style={cardStyle}>
            <h2 style={popupHeadingStyle}>{TEXT.popupHeading}</h2>
            <p style={popupTextStyle}>
              <FaDesktop style={iconStyle} /> {TEXT.popupText} <br />
              <FaHeadphones style={iconStyle} /> {TEXT.popupText2}
            </p>
            <button onClick={handleStart} style={buttonStyle}>{TEXT.button}</button>
          </div>
        </div>
      )}

      <Parallax pages={7}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="rain">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="rain-drop" style={{ left: `${Math.random() * 100}%`, '--i': i }}></div>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          id="section-2"
          offset={1}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${hill})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="rain">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="rain-drop" style={{ left: `${Math.random() * 100}%`, '--i': i }}></div>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          id="section-3"
          offset={2}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="rain">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="rain-drop" style={{ left: `${Math.random() * 100}%`, '--i': i }}></div>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          factor={1}
          style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}
        >
          <Preview/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4}
          speed={0}
          style={{
            backgroundColor:'white', color:'white', textAlign: 'center'
          }}
        >
          <Slider/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={5}
          speed={0}
          style={{
            backgroundColor:'black', color:'white', textAlign: 'center'
          }}
        >
          <Sorry/>
        </ParallaxLayer>

        <ParallaxLayer
        offset={6}
        speed={0}
        
        >
          <Playerv/>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.1 }}
          style={{ textAlign: 'center' }}
        >
          <img src={Bear} alt="Bear" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.15}>
          <h2>{TEXT.section1}</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={2}>
          <h2>{TEXT.section2}</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={1.5}
        >
          <h3>{TEXT.section3}</h3>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

// Inline styles for popup and button
const popupStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  padding: '30px',
  borderRadius: '12px',
  textAlign: 'center',
  zIndex: 1000,
  boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.2)',
};

const cardStyle = {
  backgroundColor: '#282828',
  padding: '20px',
  borderRadius: '10px',
};

const popupHeadingStyle = {
  fontSize: '24px',
  color: '#FFD700',
  marginBottom: '15px',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
};

const popupTextStyle = {
  color: '#fff',
  fontSize: '16px',
  marginBottom: '20px',
  lineHeight: '1.5',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '12px 25px',
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: '#FFD700',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.3)',
};

const iconStyle = {
  marginRight: '8px',
  verticalAlign: 'middle',
};

export default App;