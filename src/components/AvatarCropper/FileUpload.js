/**
 * create by dd on 2017.12.4
 **/
import React from 'react';

// 使用FileReader对象异步读取文件内容
class FileUpload extends React.Component {
  handleFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    if (!file) return;
    reader.onload = function (img) {
      this.input.value = '';
      this.props.handleFileChange(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  };
  render() {
    return (
      <div onClick={() => this.input.click()}>
        <input
          style={{ display: 'none' }}
          ref={(input) => { this.input = input; }}
          type="file"
          accept="image/*"
          onChange={e => this.handleFile(e)}
        />
        {this.props.children}
      </div>
    );
  }
}

export default FileUpload;
