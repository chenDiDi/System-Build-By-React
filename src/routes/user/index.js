/**
 * create by didi on 2017/10/19
 */
import React from 'react';
import { connect } from 'dva';

class user extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>hello react!</h2>
      </div>
    );
  }
}

export default user;
