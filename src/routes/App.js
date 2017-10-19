import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import './App.less';
import './common.less';

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
    console.log(collapsed);
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
    return (
      <Layout className="AppLayout">
        <Sider
          collapsible
          breakpoint="lg"
          onCollapse={this.onCollapse}
          // collapsedWidth="0"
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
              <Menu.Item key="4">用户列表</Menu.Item>
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
          <Header>系统</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              {children}
            </div>
            <Footer>System Design &copy;2017 Created by DiDi on 2017.10</Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
