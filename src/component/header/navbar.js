import React from 'react';
import NavMenu from "./navMenu";
import GusetLink from "./gusetLink";


const HeaderLink = () => {


    return (
        <div className="nav-right">
            {/*<div className="nav-item">*/}
            <GusetLink/>

            <NavMenu/>
            {/*</div>*/}


        </div>
    )
};

export default HeaderLink;