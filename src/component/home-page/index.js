import React from 'react';


const Index = () => {
    return (
        <div className='container'>

            <hr/>

            <div className="columns is-align-end is-wrap">
                <div className="column is-self-start text">
                    <a className="ant-btn " href="/login">start</a>

                </div>


                <div className="column">
                    <a className="ant-btn " href="/login">center</a>

                </div>

                <div className="column is-6">

                    <a className="ant-btn " href="/login">end</a>

                </div>
                <div className="column ">

                    <a className="ant-btn " href="/login">end</a>

                </div>
                <div className="column ">

                    <a className="ant-btn " href="/login">end</a>

                </div>
                <div className="column ">

                    <a className="ant-btn " href="/login">end</a>

                </div>
            </div>

        </div>

    )
};

export default Index;