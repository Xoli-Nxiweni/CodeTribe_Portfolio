import './App.css';
import { useState, useEffect } from 'react';
import CoverPage from './components/cover page component/CoverPage';
import SplashWindow from './components/splash window/SplashWindow';
import Loader from './components/loader/Loader';
import TableOfContents from './components/table of contents/TableOfContents';

const App = () => {
    const [currentPage, setCurrentPage] = useState('splash');

    useEffect(() => {
        // Show splash window for 2 seconds, then the loader for another 2 seconds
        const splashTimeout = setTimeout(() => setCurrentPage('loader'), 1000);
        const loaderTimeout = setTimeout(() => setCurrentPage('cover'), 4000);
        const coverPageTimeout = setTimeout(() => setCurrentPage('table-of-contents'), 10000);

        return () => {
            // Clear timeouts when the component unmounts
            clearTimeout(splashTimeout);
            clearTimeout(loaderTimeout);
            clearTimeout(coverPageTimeout);
        };
    }, []);

    return (
        <div>
            {currentPage === 'splash' && <SplashWindow />}
            {currentPage === 'loader' && <Loader />}
            {currentPage === 'cover' && <CoverPage />}
            {currentPage === 'table-of-contents' && <TableOfContents />}
        </div>
    );
};

export default App;
