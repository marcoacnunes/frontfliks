import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://fontmeme.com/permalink/220103/606266d90b36ab13e334e6fa6d00b4fc.png" alt="Frontfliks"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User"></img>
                </a>
            </div>
        </header>
    );
}