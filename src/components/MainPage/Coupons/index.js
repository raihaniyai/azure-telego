import React from 'react';
import { Container, HeaderTitle } from './style';
import { useFetchCouponData } from '../../../helpers/apiGet';
import CouponCard from '../../CouponCard';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Coupons = () => {

  const { loading, response: couponList } = useFetchCouponData(1);

  const handleCopyCode = (e) => {
    e.stopPropagation();
  }

  return (
    <>
      <div className={Container}>
          <div className={HeaderTitle}>My Coupons</div>
          {
            !loading && couponList.map(coupon => (
              // <Link to={`/coupon/${couponId}`} key={couponId}>
                <CouponCard name={coupon.deal_name} company={coupon.service_name} expiry={coupon.end_date.slice(0, 10)} thumbnail={coupon.img} onCopyCode={(handleCopyCode)}/>
              // </Link>
            ))
          }
          {
            loading && 
              <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <Spin indicator={loadIcon} size="large"/>
              </div>
          }
      </div>
    </>
  )
}

export default Coupons;
