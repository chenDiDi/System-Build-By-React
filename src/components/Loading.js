/**
 * Created by dd on 2017/10/26.
 */
import React from 'react';
import { Row, Col, Spin } from 'antd';

export default class Loading extends React.Component {
  render() {
    return (<Row
      type="flex"
      style={{ width: '100%', height: '100%' }}
      justify="center"
      align="middle"
    >
      <Col>
        <Spin size="large" />
      </Col>
    </Row>);
  }
}
