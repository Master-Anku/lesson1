import React from "react";


const Header = ()=> {
    return (
        <header >
            
            <h1>မင်္ဂလာပါ </h1>
            {/* <p>{new Date().getFullYear()}</p> */}

            <nav>
                <ul>
                    <li>
                        <a href="#">Yangon</a>
                    </li>
                    <li>
                        <a href="#">Mandalay</a>
                    </li>
                    <li>
                        <a href="#">Bagan</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;