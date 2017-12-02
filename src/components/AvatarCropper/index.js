/**
 * create by dd on 2017.12.2
 **/
import React from 'react';
import { Icon } from 'antd';
import styles from './AvatarCropper.less';

class UserHead extends React.Component {
  state = {
    croppedImg: '',
  };
  render() {
    const { croppedImg } = this.props;
    return (
      <div>
        <div className={styles.AvatarUploader}>
          <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default UserHead;
