import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import { Link } from 'dva/router';
import styles from './App.less';
import './Common.less';
import { NICKNAME, HEADER_PATH } from '../utils/constant';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      openKeys: [''],
    };
  }
  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
  render() {
    const children = this.props.children;
    const menuUser = (
      <Menu className="DownMenu">
        <Menu.Item>
          <div onClick={() => { this.props.dispatch({ type: 'app/logout', payload: {} }); }}>
            <Icon type="login" />
            <span>注销登录</span>
          </div>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout className="AppLayout">
        <Sider
          collapsible
          breakpoint="lg"
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} collapsed={this.state.collapsed} >
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">系统使用概况</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="user" /><span>消息公告</span></span>}>
              <Menu.Item key="2">消息列表</Menu.Item>
              <Menu.Item key="3">发送消息</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="user" /><span>用户管理</span></span>}>
              <Menu.Item key="4"><Link to="/user">用户列表</Link></Menu.Item>
              <Menu.Item key="5">个人资料</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="user" /><span>任务管理</span></span>}>
              <Menu.Item key="6">任务列表</Menu.Item>
              <Menu.Item key="7">任务提醒</Menu.Item>
            </SubMenu>
            <Menu.Item key="8">
              <Icon type="user" />
              <span className="nav-text">系统设置</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="AppLayoutContent">
          <Header className={styles.header}>
            <div />
            <h3>后台管理系统</h3>
            <div className={styles.headerRight} id="headerRight">
              <Dropdown className={styles.DownMenu} overlay={menuUser} getPopupContainer={() => document.getElementById('headerRight')}>
                <span className={styles.avatarStyle}>
                  <Avatar size="large" src={`${window.localStorage.getItem(HEADER_PATH)}`} />
                  <span className={styles.avatarName}>{`${window.localStorage.getItem(NICKNAME)}`}</span>
                </span>
              </Dropdown>
            </div>
          </Header>
          <Content>
            {children}
          </Content>
          <Footer>System Design &copy;2017 Created by DiDi on 2017.10</Footer>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default connect()(App);
