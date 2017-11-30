import React from 'react';
import { Input, Tooltip } from 'antd';

let title;

function formatNumber(value) {
  const list = value.toString().split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
  onChange = (e) => {
    const { value } = e.target;
    const { min, max } = this.props;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if (((!isNaN(value) && reg.test(value)) || value === '' || value === '-') && (value >= min && value <= max)) {
      this.props.onChange(value);
    }
  };
  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange({ value: value.slice(0, -1) });
    }
    if (onBlur) {
      onBlur();
    }
  };
  render() {
    const { value, min, max } = this.props;
    title = value ? ((min && max) && (value <= min || value >= max) ? `输入范围${min} ~ ${max}` : value) : '只能输入数字';
    // const title = value ? (
    //   <span className="numeric-input-title">
    //     {value !== '-' ? formatNumber(value) : '-'}
    //   </span>
    // ) : '只能输入数字';
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="bottomLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          maxLength="25"
        />
      </Tooltip>
    );
  }
}

export default NumericInput;
