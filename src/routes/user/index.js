import React from 'react';
import { connect } from 'dva';
import { Row, Table, Button } from 'antd';
import Handle from './Handle';
import List from './List';

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

const userInfo = () => {
  const listProps = {
    dataSource,
  };
  return (
    <div>
      <Row>
        <h2 className="pageTitle" style={{ color: '#656565' }}>用户列表</h2>
        <Handle />
      </Row>
      <List {...listProps} />
    </div>
  );
};

export default userInfo;
