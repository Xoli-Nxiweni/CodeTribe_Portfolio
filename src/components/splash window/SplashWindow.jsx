import { useState, useEffect } from 'react';
import './SplashWindow.css';

const SplashWindow = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            window.location.hash = 'cover';
            console.log('SplashWindow disappearing, changing hash to cover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="splash-window">
            <h1>Welcome to CodeTribe</h1>
        </div>
    );
};

export default SplashWindow;