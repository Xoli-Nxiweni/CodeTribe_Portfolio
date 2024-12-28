import { useState, useEffect } from 'react';
import './SplashWindow.css';
import image from '../../assets/NewLogo.png';

const SplashWindow = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            window.location.hash = 'cover';
            console.log('SplashWindow disappearing, changing hash to cover');
        }, 100000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="splash-window">
            <img src={image} alt="" />
        </div>
    );
};

export default SplashWindow;