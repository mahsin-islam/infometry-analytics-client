import React from 'react';
import notFoundImg from '../../images/404.svg'
const NotFound = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
            <img src={`${notFoundImg}`} alt="" style={{height: '80vh', padding: '2rem 0 0 0'}}/>
        </div>
        </div>
    );
};

export default NotFound;