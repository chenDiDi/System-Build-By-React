/**
 * create by dd on 2017.12.2
 **/
import React from 'react';
import { Icon } from 'antd';
import FileUpload from './FileUpload';
import AvatarCropper from './AvatarCropper';
import styles from './AvatarCropper.less';

class UserHead extends React.Component {
  state = {
    croppedImg: '',
    img: null,
    cropperOpen: false,
  };
  // 获取暂存区中的图片base64url数据
  handleFileChange = (dataUrl) => {
    this.setState({
      img: dataUrl,
      cropperOpen: true,
    });
  };
  // 关闭裁剪模态框
  handleRequestHide= () => {
    this.setState({
      cropperOpen: false,
    });
  };
  render() {
    const { croppedImg } = this.props;
    return (
      <div>
        <div className={styles.AvatarUploader}>
          <FileUpload handleFileChange={this.handleFileChange}>
            {croppedImg ?
              <img
                src={croppedImg}
                alt="您可爱的头像"
                className={styles.Avatar}
              />
              :
              <Icon
                type="plus"
                className={styles.Trigger}
              />
            }
          </FileUpload>
          {this.state.cropperOpen &&
            <AvatarCropper
              cropperOpen={this.state.cropperOpen}
              image={this.state.img}
              onRequestHide={this.handleRequestHide}
            />
          }
        </div>
      </div>
    );
  }
}

export default UserHead;
