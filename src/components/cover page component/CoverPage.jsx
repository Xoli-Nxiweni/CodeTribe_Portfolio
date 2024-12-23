import './CoverPage.css';
// import TableOfContents from '../table of contents/TableOfContents';

const CoverPage = () => {

    const handleNavigate = () => {
        window.location.hash = 'table-of-contents';
    }

    return (
        <div className="cover-page">
                {/* <TableOfContents /> */}
                <div className="cover-content">
                    <h1 className="full-name">Your Full Name</h1>
                    <p className="location">CodeTribe Location: Your Location</p>
                    <p className="program">Program Enrolled: Your Program</p>
                    <p className="contact">Contact Information: Your Contact Info</p>
                    <p className="date">Date: Your Date</p>
                    <button onClick={handleNavigate}>lets get started</button>
                </div>
        </div>
    );
};

export default CoverPage;