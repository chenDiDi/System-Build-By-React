/**
 * create by didi on 2017.12.01
 **/
import React from 'react';
import { Row, Col, Form, Checkbox, Button, Select, Input, Radio, Avatar } from 'antd';
import styles from './detail.less';

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
            <div id={'demoInfo'} className={styles.userDetailInfo}>
              <h2>
                <Row>
                  <Col span={3}>
                    <svg className={styles.iconfont} aria-hidden="true"><use xlinkHref="#icon-jibenxinxi1" /></svg>基本信息
                  </Col>
                  <Checkbox checked={this.state.status} onChange={this.handleChange}>是否启用</Checkbox>
                  <Button className="pull-right" style={{ marginRight: 65 }} type="primary">保存更改</Button>
                </Row>
              </h2>
              <div className={styles.InfoContent}>
                <div className={styles.InfoContentLeft}>
                  <FormItem label="学号/工号">
                    {getFieldDecorator('faculty', {
                      rules: [{ required: true, message: '请选择你所在的学号/工号' }],
                      initialValue: this.props.baseInfo && this.props.baseInfo.faculty ? this.props.baseInfo.faculty && this.props.baseInfo.faculty.toString() : '无',
                    })(
                      <div>{this.props.baseInfo && this.props.baseInfo.username ? this.props.baseInfo.username : '无'}</div>,
                    )}
                  </FormItem>
                  <FormItem label="院系/单位">
                    {getFieldDecorator('faculty', {
                      rules: [{ required: true, message: '请选择你所在的院系／单位' }],
                      initialValue: this.props.baseInfo && this.props.baseInfo.faculty ? this.props.baseInfo.faculty && this.props.baseInfo.faculty.toString() : '无',
                    })(
                      <Select
                        placeholder="请选择"
                        style={{ width: '100%' }}
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      >
                        <Option value="0">无</Option>
                        {/* {showFaculty}*/}
                      </Select>,
                    )}
                  </FormItem>
                </div>
                <div className={styles.InfoContentRight}>
                  <div>
                    <p>证件类型</p>
                    <FormItem style={{ marginBottom: 0 }}>
                      {getFieldDecorator('id_type', {
                        initialValue: this.props.baseInfo && this.props.baseInfo.id_type === 0 ? undefined : this.props.baseInfo && this.props.baseInfo.id_type && this.props.baseInfo.id_type.toString(),
                        rules: [{ required: true, message: '请选择证件类型！' }],
                      })(
                        <Select placeholder="请选择" style={{ width: '100%' }}>
                          <Option value="1">身份证</Option>
                          <Option value="2">军人证</Option>
                          <Option value="3">护照</Option>
                          <Option value="4">外国人永久居留证</Option>
                          <Option value="5">士兵证</Option>
                          <Option value="6">香港居民身份证</Option>
                          <Option value="7">台湾居民身份证</Option>
                          <Option value="8">其他证件类型</Option>
                        </Select>,
                      )}
                    </FormItem>
                  </div>
                  <div>
                    <p>姓名</p>
                    <FormItem style={{ marginBottom: 0 }}>
                      {getFieldDecorator('name', {
                        initialValue: this.props.baseInfo && this.props.baseInfo.name,
                        rules: [{ required: true, message: '请输入姓名！' }],
                      })(
                        <Input placeholder="请输入" />,
                      )}
                    </FormItem>
                  </div>
                </div>
                <div>
                  <Avatar style={{ marginLeft: 60, width: 100, height: 120, borderColor: '#ccc' }} src={this.props.baseInfo && this.props.baseInfo.header_path ? this.props.baseInfo.header_path : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} shape="square" />
                  <p style={{ margin: '10px 0 0 75px' }}>{this.props.ldapInfo && !this.props.ldapInfo.type ? '无' : this.props.ldapInfo && this.props.ldapInfo.type === 1 ? '学生用户' : (this.props.ldapInfo && this.props.ldapInfo.type === 2 ? '教师用户' : (this.props.ldapInfo && this.props.ldapInfo.type === 3 ? '临时用户' : '访客用户'))}</p>
                </div>
              </div>
              <Row className={styles.InfoContent}>
                <Col span={7}>
                  <Row gutter={32}>
                    <Col span={7}>专业名称</Col>
                    <Col span={16}>
                      <FormItem style={{ marginBottom: 0 }}>
                        {getFieldDecorator('major_id', {
                          initialValue: this.props.baseInfo && this.props.baseInfo.major_id === 0 ? '无' : this.props.baseInfo && this.props.baseInfo.major_id && this.props.baseInfo.major_id.toString(),
                        })(
                          <Select
                            showSearch
                            placeholder="请选择专业"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            <Option value="0">无</Option>
                            {/* {showMajor}*/}
                          </Select>,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={32}>
                    <Col span={7} style={{ marginTop: 3 }} className="mustIcon">证件号码</Col>
                    <Col span={16}>
                      <FormItem style={{ marginBottom: 0 }}>
                        {getFieldDecorator('id_card', {
                          initialValue: (this.props.baseInfo && this.props.baseInfo.id_card === '0') || (this.props.baseInfo && this.props.baseInfo.id_card === '') ? '无' : this.props.baseInfo && this.props.baseInfo.id_card,
                          rules: [{ required: true, message: '请填写证件号码！' }],
                        })(
                          <Input placeholder="请输入" />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Col>
                <Col span={7}>
                  <Row gutter={32}>
                    <Col span={7} style={{ marginTop: 3 }} className="mustIcon">性别</Col>
                    <Col span={16}>
                      <FormItem style={{ marginBottom: 0 }}>
                        {getFieldDecorator('sex', {
                          initialValue: this.props.baseInfo && this.props.baseInfo.sex,
                          rules: [{ required: true, message: '请选择性别！' }],
                        })(
                          <RadioGroup>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                          </RadioGroup>,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={32}>
                    <Col span={7} style={{ marginTop: 3 }}>班级</Col>
                    <Col span={16}>
                      <FormItem style={{ marginBottom: 0 }}>
                        {getFieldDecorator('class_id', {
                          initialValue: this.props.baseInfo && this.props.baseInfo.class_id === 0 ? '无' : this.props.baseInfo && this.props.baseInfo.class_id && this.props.baseInfo.class_id.toString(),
                        })(
                          <Select
                            placeholder="请选择"
                            style={{ width: '90%' }}
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            <Option value="0">无</Option>
                            {/* {showClass}*/}
                          </Select>,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={32}>
                    <Col span={7} style={{ marginTop: 3 }}>联系方式</Col>
                    <Col span={16}>
                      <FormItem style={{ marginBottom: 0 }}>
                        {getFieldDecorator('phoneBase', {
                          initialValue: this.props.baseInfo && this.props.baseInfo.phone,
                          rules: [{
                            pattern: /^1[34578]{1}\d{9}$/, message: '请填写正确手机号码!',
                          }],
                        })(
                          <Input style={{ width: '90%' }} placeholder="请输入" />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Col>
                <Col span={3}>
                  {/* <UserHead uploadAvator={this.uploadAvator} croppedImg={this.props.baseInfo.header_path === 'undefined' || this.props.baseInfo.header_path === '' || this.props.baseInfo.header_path === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : this.props.baseInfo.header_path} />*/}
                  <Avatar style={{ marginLeft: 60, width: 100, height: 120, borderColor: '#ccc' }} src={this.props.baseInfo && this.props.baseInfo.header_path ? this.props.baseInfo.header_path : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} shape="square" />
                  <p style={{ margin: '10px 0 0 75px' }}>{this.props.ldapInfo && !this.props.ldapInfo.type ? '无' : this.props.ldapInfo && this.props.ldapInfo.type === 1 ? '学生用户' : (this.props.ldapInfo && this.props.ldapInfo.type === 2 ? '教师用户' : (this.props.ldapInfo && this.props.ldapInfo.type === 3 ? '临时用户' : '访客用户'))}</p>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

UserDetail.propTypes = {};

export default Form.create()(UserDetail);
