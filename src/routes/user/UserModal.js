import React from 'react';
import { Button, Modal, Form, Input, Select, Radio } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

function handleSexChange(value) {
  console.log(`selected ${value}`);
}

class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  onChange = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
  };
  handleCancel = () => {
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };
    return (
      <div className="inline-style">
        <Button size="large" type="primary" onClick={this.showModal}>添加用户</Button>
        <Modal className="roleModal" title={'添加用户'} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Form>
            <FormItem className="input-btn-inline" {...formItemLayout} label="教工号">
              {getFieldDecorator('username', {})(
                <Input />,
              )}
              <Button type="primary">点击自动生成8位教工号</Button>
            </FormItem>
            <FormItem {...formItemLayout} label="姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名！' }],
              })(
                <Input placeholder="请输入" />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="性别">
              {getFieldDecorator('sex', {
                rules: [{ required: true, message: '请选择性别！' }],
              })(
                <Select placeholder="请选择" style={{ width: 120 }} onChange={handleSexChange}>
                  <Option value="1">男</Option>
                  <Option value="2">女</Option>
                </Select>,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="证件类型">
              {getFieldDecorator('id_type', {
                rules: [{ required: true, message: '请选择证件类型！' }],
              })(
                <Select placeholder="请选择" style={{ width: 240 }} onChange={handleSexChange}>
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
            <FormItem {...formItemLayout} label="证件号码">
              {getFieldDecorator('id_card', {
                rules: [{ required: true, message: '请填写证件号码！' }],
              })(
                <Input placeholder="请输入" />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="用户类型">
              {getFieldDecorator('type', {
                rules: [{ required: true, message: '请选择用户类型！' }],
              })(
                <Select placeholder="请选择" style={{ width: 240 }}>
                  <Option value="1">学生用户</Option>
                  <Option value="2">教师用户</Option>
                  <Option value="3">临时用户</Option>
                </Select>,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="联系电话">
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请填写联系电话！' }],
              })(
                <Input placeholder="请输入" />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="备注">
              {getFieldDecorator('remark')(
                <TextArea placeholder="请输入备注" rows={4} />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="状态">
              {getFieldDecorator('status', {
                rules: [{ required: true, message: '请选择状态！' }],
              })(
                <RadioGroup onChange={this.onChange}>
                  <Radio value={1}>开启</Radio>
                  <Radio value={0}>关闭</Radio>
                </RadioGroup>,
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default UserModal;
