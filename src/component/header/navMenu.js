import React from 'react';
import {Dropdown, Icon, Menu} from "antd";
import {Link} from "react-router-dom";


const NavMenu = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <Link className="ant-btn ant-btn-link" to="/article/edit"> <Icon type="edit"/> 写文章</Link>
            </Menu.Item>
            <Menu.Item>
                <Link className="ant-btn ant-btn-link" to="/article/fol"> <Icon type="diff"/>文件夹</Link>
            </Menu.Item>

        </Menu>
    );
    return (
        <React.Fragment>
            <Dropdown overlay={menu}>

                <Link className="ant-btn ant-btn-link ant-dropdown-link" to="/article"><Icon type="read"/> 文 章</Link>

            </Dropdown>
        </React.Fragment>
    );
};

export default NavMenu;