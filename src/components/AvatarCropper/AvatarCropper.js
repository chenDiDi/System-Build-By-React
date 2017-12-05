/**
 * create by didi on 2017.12.5
 **/

import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import Cropper from './Cropper';
import styles from './AvatarCropper.less';

class AvatarCropper extends React.Component {
  render() {
    return (
      <Modal
        title="裁剪图片"
        visible={this.props.cropperOpen}
        closable={false}
        footer={null}
      >
        <div className={styles.AvatarCropperBase}>
          <Cropper
            image={this.props.image}
            width={this.props.width}
            height={this.props.height}
            closeBtn={this.props.closeBtn}
            cropBtn={this.props.cropBtn}
            onRequestHide={this.props.onRequestHide}
          />
        </div>
      </Modal>
    );
  }
}
AvatarCropper.propTypes = {
  image: PropTypes.string.isRequired,
  closeBtn: PropTypes.string,
  cropBtn: PropTypes.string,
  onRequestHide: PropTypes.func.isRequired,
};

AvatarCropper.defaultProps = {
  closeBtn: '取消',
  cropBtn: '裁剪并且保存',
};

export default AvatarCropper;
