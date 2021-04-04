import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { TitleContainer, TitleStyle } from './style'

const PageHeader = ({ title, onBack }) => {
  return (
    <div className={TitleContainer}>
      <div><ArrowLeftOutlined onClick={onBack} /></div>
      <div className={TitleStyle}>{title}</div>
    </div>
  );
};

export default PageHeader;