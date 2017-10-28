import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterItem.less';

const FilterItem = ({ label = '', children }) => {
  return (
    <div className={styles.filterItem}>
      {label.length > 0 ? <span>{label}</span> : ''}
      {children}
    </div>
  );
};

FilterItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default FilterItem;
