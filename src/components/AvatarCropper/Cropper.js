/**
 * create by didi on 2017.12.5
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';

class Cropper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      image: {},
      mouse: {
        x: null,
        y: null,
      },
      preview: null,
      zoom: 1,
    };
    this.listeners = [];
  }
  componentDidMount() {
    // const canvas = ReactDOM.findDOMNode(this.refs.canvas);
  }
  render() {
    return (
      <div className="AvatarCropperCanvas">
        <div className="row">
          <canvas
            style={{ border: '1px solid #ccc' }}
            ref="canvas"
            width={this.props.width}
            height={this.props.height}
          />
          <div className="row">
            <input
              type="range"
              name="zoom"
              ref="zoom"
              style={{ width: this.props.width }}
              min="1"
              max="3"
              step="0.01"
              defaultValue="1"
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <Button onClick={() => this.props.onRequestHide()}>{this.props.closeBtn}</Button>
            <Button style={{ marginLeft: 15 }} type="primary">{this.props.cropBtn}</Button>
          </div>
        </div>
      </div>
    );
  }
}

Cropper.PropTypes = {
  image: PropTypes.string.isRequired,
  onRequestHide: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  zoom: PropTypes.number,
};

Cropper.defaultProps = { width: 400, height: 400, zoom: 1 };

export default Cropper;
