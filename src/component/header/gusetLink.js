import React from 'react';
import {Link} from "react-router-dom";

const GusetLink = () => {
    return (
        <React.Fragment>
            <Link className="ant-btn ant-btn-link" to="/login">登 录</Link>
            <Link className="ant-btn ant-btn-link" to="/register">免费注册</Link>
        </React.Fragment>
    );
};

export default GusetLink;