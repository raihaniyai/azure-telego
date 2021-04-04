import React from 'react';
import { List } from 'antd';
import { Title } from './../style'
import { TrendingWrapper, ListStyle, TrendingOrder } from'./style';

const Trendings = ({ news }) => {
  return (
    <>
      <div>
        <div className={Title}>Trendings</div>
      </div>

      <List
        className={ListStyle}
        dataSource={news}
        renderItem={(trending, index) => (
          <a href = {trending.url}>
            <List.Item>
              <div className={TrendingWrapper}>
                <div className={TrendingOrder}>{index + 1}</div>
                <div>{trending.name}</div>
              </div>
            </List.Item>
          </a>
        )}
      />
    </>
  )
};

export default Trendings;