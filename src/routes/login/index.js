import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Button, Input, Icon, Checkbox } from 'antd';
import styles from './Login.less';

const FormItem = Form.Item;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.dispatch({ type: 'app/authLogin', payload: { password: values.password, username: values.userName } });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.Login}>
        <div className={styles.container}>
          <div>
            <h1>Welcome to the system!</h1>
          </div>
          <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username !' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>,
              )}
              <a className={styles.loginFormForgot} href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {};

export default connect(() => {
  return {};
})(Form.create()(LoginPage));
