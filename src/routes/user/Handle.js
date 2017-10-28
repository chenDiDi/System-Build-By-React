import React from 'react';
import PropTypes from 'prop-types';
import { Button, Select, Input } from 'antd';
import FilterItem from '../../components/FilterItem/FilterItem';

const Option = Select.Option;
const Search = Input.Search;

const Handle = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
      <div>
        <Button style={{ marginRight: 16 }} type="primary">添加用户</Button>
        <Select style={{ width: 120 }} placeholder="更多操作">
          <Option value="0">关闭</Option>
          <Option value="1">开启</Option>
          <Option value="-1">删除</Option>
        </Select>
      </div>
      <div>
        <FilterItem label={'用户类型'}>
          <Select style={{ width: 120, marginRight: 16 }} placeholder="请选择">
            <Option value="0">全部</Option>
            <Option value="1">学生用户</Option>
            <Option value="2">教工用户</Option>
            <Option value="3">临时用户</Option>
            <Option value="4">访客用户</Option>
          </Select>
        </FilterItem>
        <Search placeholder="请输入教工号/姓名/证件号" style={{ width: 250 }} />
      </div>
    </div>
  );
};

Handle.propTypes = {
};

export default Handle;
