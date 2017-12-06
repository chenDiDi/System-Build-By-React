/**
 * create by didi on 2017.12.5
 **/

import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { isDataUrl } from './utils';

// 结合canvas，并在canvas中使用images图片，对图片进行处理实现裁剪功能
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
    const canvas = this.refs.canvas;
    const context = canvas.getContext('2d');
    this.prepareImage(this.props.image);

    this.listeners = {
      mousemove: e => this.mouseMoveListener(e),
      mouseup: e => this.mouseUpListener(e),
      mousedown: e => this.mouseDownListener(e),
    };
    console.log(context, 'context00-----');
  }
  // 使用跨域image元素实例
  prepareImage = (imageUrl) => {
    const img = new Image();
    if (!isDataUrl(imageUrl)) { img.crossOrigin = 'anonymous'; }   // 开启图片本地的跨域允许
    img.onload = () => {
      const scaledImage = this.fitImageToCanvas(img.width, img.height);
      scaledImage.resource = img;
      scaledImage.x = 0;
      scaledImage.y = 0;
      this.setState({
        dragging: false,
        image: scaledImage,
        preview: this.toDataURL(),
      });
    };
    img.src = imageUrl;
  };
  // 使image大小适应canvas宽高
  fitImageToCanvas = (width, height) => {
    let scaledHeight;
    let scaledWidth;

    const canvasAspectRatio = this.props.height / this.props.width;    // 画布自身宽高横纵比
    const imageAspectRatio = height / width;                           // 图片自身宽高横纵比

    if (canvasAspectRatio > imageAspectRatio) {          // //////////获取值的原理??????
      scaledHeight = this.props.height;
      const scaleRatio = scaledHeight / height;
      scaledWidth = width * scaleRatio;
    } else {
      scaledWidth = this.props.width;
      const scaleRatio = scaledWidth / width;
      scaledHeight = scaleRatio * height;
    }

    return { width: scaledWidth, height: scaledHeight };
  };
  // 显示图片并返回图片dataUrl
  toDataURL() {
    const canvas = this.refs.canvas;
    const context = canvas.getContext('2d');

    canvas.width = this.props.width;
    canvas.height = this.props.height;

    this.addImageToCanvas(context, {
      resource: this.state.image.resource,
      x: this.state.image.x,
      y: this.state.image.y,
      height: this.state.image.height,
      width: this.state.image.width,
    });

    return canvas.toDataURL();
  }
  // 在画布中渲染图片
  addImageToCanvas = (context, image) => {
    if (!image.resource) return;
    context.save();   // 保存当前的绘画状态
    context.globalCompositeOperation = 'destination-over';    // 使用不同的 globalCompositeOperation 值绘制矩形, 在源图像上方显示目标图像。

    const scaledWidth = this.state.image.width * this.state.zoom;
    const scaledHeight = this.state.image.height * this.state.zoom;
    console.log(this.state.image.width, this.state.zoom, this.state.image.height, 'this.state.image.height');

    let x = image.x - ((scaledWidth - this.state.image.width) / 2);
    let y = image.y - ((scaledHeight - this.state.image.height) / 2);

    x = Math.min(x, 0);
    y = Math.max(y, 0);
    y = scaledHeight + y >= this.props.height ? y : (y + (this.props.height - (scaledHeight + y)));
    x = scaledWidth + x >= this.props.width ? x : (x + (this.props.width - (scaledWidth + x)));

    context.drawImage(image.resource, x, y, image.width * this.props.zoom, image.height * this.props.zoom);
    context.restore();
  };
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
