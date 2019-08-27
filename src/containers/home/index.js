import React, {Component} from 'react';

import Header from '../../component/header'
import HomePage from '../../component/home-page'
import logo from '../../logo.png'


class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Header logo={logo}/>
                <div>

                </div>
                <HomePage/>
            </React.Fragment>
        );
    }
}


export default Home;
