import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
    return (
        <Loader
        type="Oval"
        color="#ff5d22"
        height={70}
        width={70}
      />
    );
};

export default Spinner;