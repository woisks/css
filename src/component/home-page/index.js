import React from 'react';
import {Menu, Dropdown, Icon} from 'antd';


const Index = () => {
    return (
        <div className='container'>

            <div className="tags ">
                <span className="tag is-dark image">
                    <img src="http://woisk.cn/156449273297519376"/>
                    npm
                </span>
                <span className="tag is-info image">
                    <img src="http://woisk.cn/156449273297519376"
                         alt=''/>0.5.0</span>
                <span className="tag is-black image"><img
                    src="http://woisk.cn/156449273297519376"/>Black</span>
                <span className="tag is-dark">Dark</span>
                <span className="tag is-light">Light</span>
                <span className="tag is-white image"><img
                    src="http://woisk.cn/156449273297519376"/>White</span>
                <span className="tag is-large is-primary">Primary</span>
                <span className="tag is-link">Link</span>
                <span className="tag is-info is-large is-rounded image">
                    <img src="http://woisk.cn/156449273297519376"
                         alt=''/>Info</span>
                <span className="tag is-success">Success</span>
                <span className="tag is-large is-warning image">
                    <img src="http://woisk.cn/156449273297519376"
                         alt=''/>Warning</span>
                <span className="tag is-danger">Danger</span>
                <span className="tag is-black">Black</span>
                <span className="tag is-dark">Dark</span>
                <span className="tag is-light image"><img
                    src="http://woisk.cn/156449273297519376"/>Light</span>
                <span className="tag is-white">White</span>
                <span className="tag is-large is-primary image">
                    <img src="http://woisk.cn/156449273297519376"
                         alt=''/>Primary</span>
                <span className="tag is-link">Link</span>
                <span className="tag is-info">Info</span>
                <span className="tag is-success">Success</span>
                <span className="tag is-warning">Warning</span>
                <span className="tag is-danger image"><img
                    src="http://woisk.cn/156449273297519376"/>Danger</span>
                <span className="tag is-black is-large">Black</span>
                <span className="tag is-dark">Dark</span>
                <span className="tag is-light">Light</span>
                <span className="tag is-white image"><img
                    src="http://woisk.cn/156449273297519376"/>White</span>
                <span className="tag is-primary">Primary</span>
                <span className="tag is-link">Link</span>
                <span className="tag is-info  image is-medium"><img
                    src="http://woisk.cn/156449273297519376"/>Info</span>
                <span className="tag image is-success"><img
                    src="http://woisk.cn/156449273297519376"/>Success</span>
                <span className="tag is-warning">Warning</span>
                <span className="tag is-success image  "><img
                    src="http://woisk.cn/156449273297519376"/>Danger</span>
            </div>
            <hr/>
            <div className="tags-group">
                <div className="item">
                    <div className="tags has-addons">

                        <span className="tag image  is-normal">
                        <img src="http://woisk.cn/156449273297519376"/>Warning</span>
                        <i className="tag  is-delete "/>
                    </div>
                </div>
            </div>

            <hr/>


            <span className="tag image is-large is-danger ">
                        <img className='animate-rotate' src="http://woisk.cn/156449273297519376"/>Danger Warning <i
                className="delete"/></span>


            <hr/>

            <div className="tags">

                <span className="tag is-black ">Black</span>
                <span className="tag is-dark">Dark</span>
                <span className="tag is-light">Light</span>
                <span className="tag is-white">White</span>
                <span className="tag is-primary">Primary</span>
                <span className="tag is-link">Link</span>
                <span className="tag is-info">Info</span>
                <span className="tag is-success">Success</span>
                <span className="tag is-warning">Warning</span>
                <span className="tag is-danger is-invisible">Danger</span>

            </div>


            <hr/>

            <div className="columns is-mobile">
                <div className="column">1</div>
                <div className="column">2</div>
                <div className="column">3</div>
                <div className="column">4</div>
            </div>

            <hr/>

            <figure className="photo is-128x128">
                <img className="is-rounded"
                     src="https://bulma.io/images/placeholders/256x256.png"/>
            </figure>

            <figure className="photo is-128x128">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>

            <figure className="photo is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>

            <hr/>

            <nav className="level is-mobile">


                <div className="level-item">
                    <p className="subtitle is-5">
                        <strong>123</strong> posts
                    </p>
                </div>
                <div className="level-item">
                    <div>

                        <input className="input" type="text" placeholder="Find a post"/>


                        <button className="button">
                            Search
                        </button>

                    </div>
                </div>


                <p className="level-item"><strong>All</strong></p>
                <p className="level-item"><a>Published</a></p>
                <p className="level-item"><a>Drafts</a></p>
                <p className="level-item"><a>Deleted</a></p>
                <p className="level-item"><a className="button is-success">New</a></p>

            </nav>

            <hr/>

            <nav className="level">
                <div className="level-item align-center">
                    <div>
                        <p className="heading">Tweets</p>
                        <p className="title">3,456</p>
                    </div>
                </div>
                <div className="level-item align-center">
                    <div>
                        <p className="heading">Following</p>
                        <p className="title">123</p>
                    </div>
                </div>
                <div className="level-item align-center">
                    <div>
                        <p className="heading">Followers</p>
                        <p className="title">456K</p>
                    </div>
                </div>
                <div className="level-item has-text-justified">

                    <p className="heading">Likes789</p>
                    <p className="title">789</p>

                </div>
            </nav>

            <hr/>

            <nav className="level">

                <h1 className="level-item ">
                    <img src="https://bulma.io/images/bulma-type.png" alt=""
                         style={{height: '100px', width: '100px'}}/>
                </h1>

            </nav>
            <hr/>

        </div>

    )
};

export default Index;