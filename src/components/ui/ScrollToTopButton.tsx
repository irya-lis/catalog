import React from "react";

const ScrollToTopButton: React.FC = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button onClick={handleScrollToTop} className='btn' style={{float: 'right', marginTop: '-40px'}}>
           to Top
        </button>
    );
};

export default ScrollToTopButton;