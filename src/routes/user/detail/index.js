/**
 * create by didi on 2017.12.01
 **/
import React from 'react';
import { Row, Col, Form, Checkbox, Button, Select, Input, Radio, Avatar } from 'antd';
import styles from './detail.less';
import UserHead from '../../../components/AvatarCropper';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,    // 是否启用禁用的status, 默认为1启用
    };
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row>
          <Col span={24}>
            <span style={{ fontSize: 18, color: '#656565' }}>用户信息</span>
          </Col>
        </Row>
        <div className={styles.userDetailContainer}>
          <Form>
            {/* 基本信息*/}
            <div className={styles.userDetailInfo}>
              <h2>
                <Row>
                  <Col span={3}>
                    <svg className={styles.iconfont} aria-hidden="true"><use xlinkHref="#icon-jibenxinxi" /></svg>基本信息
                  </Col>
                  <Checkbox checked={this.state.status} onChange={this.handleChange}>是否启用</Checkbox>
                </Row>
              </h2>
              <div className={styles.UInfo}>
                <div className={styles.UInfoCont}>
                  <span>用户名</span>
                  <div>didi</div>
                </div>
                <div className={styles.UInfoCont}>
                  <span>ID号</span>
                  <div>201341402435678</div>
                </div>
                <div className={styles.UInfoCont}>
                  <span>昵称</span>
                  {getFieldDecorator('nickName', {
                    initialValue: 'chendidi',
                    rules: [{ required: true, message: '请输入您的昵称' }],
                  })(
                    <Input placeholder="请输入您的昵称" />,
                  )}
                </div>
                <div className={styles.UInfoCont}>
                  <span>手机号码</span>
                  {getFieldDecorator('phone', {
                    initialValue: 15818999111,
                    rules: [{ required: true, message: '请输入您的手机号码' }],
                  })(
                    <Input placeholder="请输入您的手机号码" />,
                  )}
                </div>
                <div className={styles.UInfoCont}>
                  <span>邮箱</span>
                  {getFieldDecorator('email', {
                    initialValue: '757958161@qq.com',
                    rules: [{ required: true, message: '请输入您的邮箱' }],
                  })(
                    <Input placeholder="请输入您的邮箱" />,
                  )}
                </div>
                <div className={styles.UInfoCont}>
                  <span>性别</span>
                  {getFieldDecorator('sex', {
                    initialValue: '1',
                  })(
                    <Select placeholder="请选择">
                      <Option value="1">男</Option>
                      <Option value="2">女</Option>
                    </Select>,
                  )}
                </div>
                <div className="UAvatar">
                  {/* <Avatar src={this.props.baseInfo && this.props.baseInfo.header_path ? this.props.baseInfo.header_path : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} shape="square" />*/}
                  <UserHead croppedImg={this.props.header_path ? this.props.header_path : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />
                  <p>访客用户</p>
                </div>
              </div>
              <Button type="primary">编辑</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

UserDetail.propTypes = {};

export default Form.create()(UserDetail);
