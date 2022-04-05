

import {
    AppstoreOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, CarryOutOutlined, QuestionCircleOutlined
} from '@ant-design/icons';
import { Box } from '@mui/material';
// import './index.css';
import { Button, Divider, Menu, Switch } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Category from '../../category/category';
import Difficult from '../../difficult/difficult';
import Question from '../../question/question';
import Survey from '../../survey/survey';
import Topbar from '../topbar/topbar';
import './sidebar.css';


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('dark');

    const changeMode = value => {
        setMode(value ? 'vertical' : 'inline');
    };

    const changeTheme = value => {
        setTheme(value ? 'light' : 'dark');
    };

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    const { SubMenu } = Menu;
    return (
        <Box className='sidebar' >

            <div style={{ width: 256 }} className='sidebar-left'>
                <Switch onChange={changeMode} /> Change Mode
                <Divider type="vertical" />
                <Switch onChange={changeTheme} /> Change Style
                <br />
                <br />
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={mode}
                    theme={theme}
                    inlineCollapsed={collapsed}
                >
                    <SubMenu key="sub1" icon={<CarryOutOutlined />} title="Category">
                        <Menu.Item key="1"><NavLink to='/admin/category'>Create Category</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Difficult">
                        <Menu.Item key="9"><NavLink to='/admin/difficult'>Create Difficult</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<MailOutlined />} title="Survey">
                        <Menu.Item key="5"><NavLink to='/admin/survey'>Create Survey</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<QuestionCircleOutlined />} title="Question">
                        <Menu.Item key="2"><NavLink to='/admin/question'>Create Question</NavLink></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
            <Box className='sidebar-right'>
                <Topbar />
                <Routes>
                    <Route path="survey" element={<Survey />} />
                    <Route path="question" element={<Question />} />
                    <Route path="category" element={<Category />} />
                    <Route path="difficult" element={<Difficult />} />
                </Routes>
            </Box>
        </Box>
    )
}

export default Sidebar