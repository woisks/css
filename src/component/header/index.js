import React from 'react';
import './index.css'
import Navbar from './navbar'
import {withRouter} from "react-router-dom";

const Header = (props) => {

    const logoClick = () => {
        props.history.push('/');
    };

    return (
        <header className="container">
            <div className="nav line8">
                <div className="nav-item">
                    <img className="logo" onClick={logoClick} src={props.logo} alt="Woisk"/>
                </div>

                <Navbar/>
            </div>
        </header>
    )
};

export default withRouter(Header);