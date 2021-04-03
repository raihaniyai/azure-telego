import React from 'react';
import { Popover, List, Spin } from 'antd';
import Slider from "react-slick";
import { MoreOutlined } from '@ant-design/icons';
import { Container, Title, Header } from './style';
import { useFetchCouponData } from '../../../../../helpers/apiGet';
import CouponCard from '../../../../CouponCard';
import { CouponCardStyle, CouponDesc } from '../../../../CouponCard/style';
import { SkeletonStyle } from '../../../Explore/HotPage/style';
import { Skeleton } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Deal = () => {
  const empty = (<></>)
  const skeleton = new Array(5).fill({});
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
    var deals = [];
    if (index > max - 5) {
      deals = couponList.slice(index, max).concat(couponList.slice(0, (index + 5) % max));
    }
    else {
      deals = couponList.slice(index, index + 5);
    }
    return deals;
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


      {
          loading && 
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
              <Spin indicator={loadIcon} size="large"/>
            </div>
      }

      <Slider dots prevArrow={empty} nextArrow={empty} infinite slidesToScroll={1}>
        {/* {tempDeals.map(deal => (
          <div key={deal}>
            <img className={Thumbnail} src="images/gaming-deal.png" alt="gaming-deal"/>
          </div>
        ))} */}

          {
            !loading && getDeals(0, couponList.length).map(coupon => (
              // <Link to={`/coupon/${couponId}`} key={couponId}>
                <CouponCard key={coupon.deal_name} style={{boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.1)'}} name={coupon.deal_name} company={coupon.service_name} thumbnail={coupon.img}/>
              // </Link>
            ))
          }
          {/* {
            loading && 
              (
                skeleton.map((_, index) => 
                (
                  <div className={CouponCardStyle}>
                    <div className={CouponDesc}>
                        <div>
                        <Skeleton.Input />
                        <Skeleton/>
                        <Skeleton.Input />
                        <Skeleton />
                        </div>
                    </div>
                  </div>
                ))
            )
          } */}
      </Slider>
    </div>
  )
}

export default Deal;
