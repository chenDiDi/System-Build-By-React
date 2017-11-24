import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import '../Common.less';
import styles from './index.less';

const List = ({ userData }) => {
  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    width: 150,
  }, {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    fixed: 'left',
    width: 80,
    className: styles.avatar,
    render: text => <img alt={'avatar'} width={24} src={text} />,
  }, {
    title: '姓名',
    dataIndex: 'name',
    fixed: 'left',
    key: 'name',
    width: 200,
  }, {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
    width: 150,
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 300,
    render: (index, record) => {
      return (
        '东莞市洪梅镇里走教河东东路'
      );
    },
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 150,
    render: (index, record) => {
      return (
        '38'
      );
    },
  }, {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 150,
    render: (index, record) => {
      return (
        record.sex === 1 ? '男' : '女'
      );
    },
  }, {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 150,
    render: (index, record) => {
      return (
        record.status === 1 ? '启用' : '禁用'
      );
    },
  }, {
    title: '操作',
    dataIndex: 'deal',
    key: 'deal',
    fixed: 'right',
    width: 200,
    render: (index, record) => {
      return (
        <div className="buttonList">
          <Button>禁用</Button>
          <Button type="primary">启用</Button>
        </div>
      );
    },
  }];
  return (
    <Table
      className={styles.ListTable}
      dataSource={userData.list}
      columns={columns}
      scroll={{ x: 1680 }}
      pagination={{
        total: userData.total,
        pageSize: 6,
        currentPage: userData.page,
        onChange: page => this.pushDataPageChange(page),
      }}
    />
  );
};

export default List;
