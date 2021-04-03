import React from 'react';
import { Popover, List } from 'antd';
import Slider from "react-slick";
import { MoreOutlined } from '@ant-design/icons';
import { Container, Title, Header } from './style';
import { useFetchCouponData } from '../../../../../helpers/apiGet';
import CouponCard from '../../../../CouponCard';

const Deal = () => {
  const empty = (<></>)
  const { loading, response: couponList } = useFetchCouponData(1);

  const popoverContent = (
    <List
      size="small"
      dataSource={[{text: 'Not interested', onClick: () => {}}, {text: 'Why this ad?', onClick: () => {}}]}
      renderItem={item => <List.Item onClick={item.onClick}>{item.text}</List.Item>}
    />
  );

  const getDeals = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    return couponList.slice(index, index + 5);
  }

  return (
    <div className={Container}>
      <div className={Header}>
        <div className={Title}>
          Deals for you
        </div>
        <div>
        <Popover placement="leftTop" content={popoverContent} trigger="click">
          <MoreOutlined />
        </Popover>
        </div>
      </div>

      <Slider dots prevArrow={empty} nextArrow={empty} infinite slidesToScroll={1}>
        {/* {tempDeals.map(deal => (
          <div key={deal}>
            <img className={Thumbnail} src="images/gaming-deal.png" alt="gaming-deal"/>
          </div>
        ))} */}

          {
            !loading && getDeals(0, couponList.length).map(coupon => (
              // <Link to={`/coupon/${couponId}`} key={couponId}>
                <CouponCard style={{boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.1)'}} name={coupon.deal_name} company={coupon.service_name} thumbnail={coupon.img}/>
              // </Link>
            ))
          }
      </Slider>
    </div>
  )
}

export default Deal;
