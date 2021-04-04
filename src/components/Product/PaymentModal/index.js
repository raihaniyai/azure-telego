import React, { useCallback, useEffect, useState } from "react";
import { Modal, Input, Select } from 'antd';
import SubscriptionCard from '../../SubscriptionCard';
import { useHistory } from 'react-router-dom';
import { usePostOrder } from '../../../helpers/apiPost';
import { useFetchCouponPlan } from '../../../helpers/apiGet';
import { PaymentContainer, PaymentData, TotalPayment } from './../style';

const { Option } = Select;

const PaymentModal = ({ visible, setVisible, plan, duration }) => {
  const { replace } = useHistory();
  const totalPrice = plan.price;
  const [discountPrice, setDiscountPrice] = useState(0);
  const { loadingCoupon, isErrorCoupon, coupons } = useFetchCouponPlan(1, plan.id)
  const { postOrder, isSuccess, isError, loading, messageError } = usePostOrder();

  const handlePayment = useCallback(() => {
    const params = {
      userID: 1,
      planID: plan.id,
      planType: plan.durationType,
      price: totalPrice - (totalPrice * discountPrice),
    };

    postOrder(params);
    setVisible(false);
  }, [postOrder, setVisible, plan, totalPrice, discountPrice]);

  useEffect(() => {
    if (isSuccess) {
      Modal.success({
        title: "Payment Success",
        content: "Your payment has been received",
        onOk: () => {
          replace(`/`);
        }
      });
    }

    if (isError) {
      Modal.error({
        title: "Error",
        content: messageError
      });
    }
  }, [loading, isSuccess, isError, messageError, replace]);

  useEffect(() => {
    if (isErrorCoupon) {
      Modal.error({
        title: "Error",
        content: "An Error has occured",
        onOk: () => {
          replace(`/`);
        }
      });
    }
  }, [loadingCoupon, isErrorCoupon])

  return (
    <Modal
      title="Payment Confirmation"
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => handlePayment()}
      okText={`Purchase ($ ${totalPrice - (totalPrice * discountPrice)})`}
      style={{ padding: "15px" }}
    >
      <SubscriptionCard id={plan.id} title={plan.name} price={plan.price} durationType={plan.durationType} />
      <div className={PaymentContainer}>
        <div className={PaymentData}>
          <div>Plan name</div>
          <div>
            <strong>{plan.name}</strong>
          </div>
        </div>

        <div className={PaymentData}>
          <div>Subscription period</div>
          <div>
            <strong>1 {duration}</strong>
          </div>
        </div>

        <div className={PaymentData}>
          <div>Subscription fee</div>
          <div>
            <strong>$ {plan.price}</strong>
          </div>
        </div>

        <div className={PaymentData}>
          <div>Discounts</div>
          <div>
            <strong>$ {discountPrice}</strong>
          </div>
        </div>

        <div className={PaymentData}>
          <div>Promo Code</div>

          {!loadingCoupon && (
            <Select
              showSearch
              allowClear
              style={{ width: 200 }}
              placeholder="Enter promo code"
              optionFilterProp="children"
              dropdownStyle={{minWidth: '150px'}}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
              onChange={value => {
                const found = coupons.find(element => element.promo_code === value);
                setDiscountPrice(found.discount_price)
              }}
            >
              {coupons?.map((coupon, index) => (
                <Option value={coupon.promo_code} key={index}>{coupon.deal_name}</Option>
              ))}
            </Select>
          )}
        </div>

        <div className={TotalPayment}>
          <div>Total payment</div>
          <div style={{ color: "#404EFB", fontSize: "20px" }}>
            <strong>$ {totalPrice - (totalPrice - discountPrice)}</strong>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
