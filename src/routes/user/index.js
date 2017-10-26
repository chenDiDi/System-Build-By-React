import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Row, Col, Table, Form, Select, Input, Icon, Menu, Dropdown, message, Modal } from 'antd';
import '../Common.less';
import Loading from '../../components/Loading';
import UserModal from './UserModal';

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const confirm = Modal.confirm;
const content = '';

const uid = 0;
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号',
}];
class userInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
    };
  }
  // 表格前面选择框的状态
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
    this.props.dispatch({ type: 'userInfo/save', payload: { selectedRowKeys } });
  };
  // 重置表格前面选择框的选中状态
  start = () => {
    this.setState({
      selectedRowKeys: [],
    });
  };
  render() {
    const that = this;
    // table标题
    const columns = [{
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      width: '6%',
    }, {
      title: '学/工号',
      dataIndex: 'username',
      key: 'username',
      width: '10%',
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
    }, {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      width: '7%',
    }, {
      title: '证件号',
      dataIndex: 'id_card',
      key: 'id_card',
      width: '15%',
    }, {
      title: '用户类型',
      dataIndex: 'type',
      key: 'type',
      width: '10%',
    }, {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
      width: '10%',
    }, {
      title: '开通时间',
      dataIndex: 'create_time',
      key: 'create_time',
      width: '11%',
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: '6%',
    }, {
      title: '操作',
      dataIndex: 'deal',
      key: 'deal',
      width: '15%',
      render: (index, record) => {
        // 更多菜单
        const menu = (
          <Menu>
            <Menu.Item>
              <a onClick={() => { }} >关闭</a>
            </Menu.Item>
            <Menu.Item>
              <a onClick={() => {}} >开启</a>
            </Menu.Item>
            <Menu.Item>
              <a onClick={() => { }}>删除</a>
            </Menu.Item>
          </Menu>
        );
        return (
          <div>
            <div id="RoleHandle" className="RoleHandle">
              <a onClick={() => {}}>授权</a>
              <a onClick={() => {}}>编辑</a>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" style={{ padding: '0 8px' }}>
                  更多
                  <Icon type="down" />
                </a>
              </Dropdown>
            </div>
          </div>
        );
      },
    }];
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const { getFieldDecorator } = this.props.form;
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div>
        <Row>
          <h2 className="title" style={{ color: '#656565' }}>用户列表</h2>
          <Form>
            <Col span={12} style={{ marginTop: 8 }}>
              <FormItem style={{ display: 'inline-block', marginRight: 10 }}>
                <UserModal />
              </FormItem>
              <FormItem style={{ display: 'inline-block' }}>
                {getFieldDecorator('userName', {
                  initialValue: '更多操作',
                })(
                  <Select style={{ width: 120 }} onChange={() => {}} >
                    <Option value={'0'}>关闭</Option>
                    <Option value={'1'}>开启</Option>
                    <Option value={'-1'}>
                      <div onClick={() => { }}>删除</div>
                    </Option>
                  </Select>,
                )}
              </FormItem>
            </Col>
            <Col
              span={12}
              style={{ textAlign: 'right', marginTop: 8 }}
            >
              <span style={{ marginRight: 10 }}>用户类型</span>
              <Select
                style={{ width: 120, marginRight: 15 }}
                placeholder="请选择"
              >
                <Option value="0">全部</Option>
                <Option value="1">学生用户</Option>
                <Option value="2">教工用户</Option>
                <Option value="3">临时用户</Option>
                <Option value="4">访客用户</Option>
              </Select>
              <Search
                placeholder="请输入教工号/姓名/证件号"
                style={{ width: 250 }}
                onSearch={() => {}}
              />
            </Col>
          </Form>
        </Row>
        <div className="clearfix">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
              pageSize: 8,
              total: 56,
              current: 1,
            }}
            rowSelection={rowSelection}
          />
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    // loading: state.loading.models.userInfo,
  };
})(Form.create()(userInfo));
