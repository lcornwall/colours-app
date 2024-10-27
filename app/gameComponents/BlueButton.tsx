import React from 'react';



const BlueButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {

    return (

        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={onClick}>

            Click Me

        </button>

    );

};



export default BlueButton;