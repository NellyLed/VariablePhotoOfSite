import React from 'react';
import Confetti from 'react-confetti';
import '../../style/Menu/menu.css';
const Menu = () => {
    return (
        <div className="body">
            <Confetti />
            <div className="border-radius">
                <div className="words">
                    <span style={{ number: 1 }}>П</span>
                    <span style={{ number: 2 }}>Р</span>
                    <span style={{ number: 3 }}>И</span>
                    <span style={{ number: 4 }}>В</span>
                    <span style={{ number: 5 }}>Е</span>
                    <span style={{ number: 6 }}>Т</span>
                    <span style={{ number: 7 }}>!</span>
                </div>
            </div>
        </div>
    );
};
export default Menu;
