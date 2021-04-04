import React from "react";
import { Row, Col, List } from "antd";
import { ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import {
  Container,
  Title,
  DetailsContainer,
  DetailsList,
  ButtonContainer,
  BuyButton,
  CheckStyle,
  HeaderTitle,
  ProductImage,
} from "./style";

const dataulala = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const CouponDetails = e => {
  
  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12}>
          <div className={Container}>
            <div className={HeaderTitle}>
                <Link to={`/`}><ArrowLeftOutlined/></Link>
                <span>&nbsp;&nbsp;Coupon</span>
            </div>

            <img className={ProductImage} src="../images/gaming-deal.png" alt="product" />
          </div>
          
          <div className={DetailsContainer}>
            <div className={Title}>Terms and Conditions</div>
              <>
                <List
                  className={DetailsList}
                  dataSource={dataulala}
                  renderItem={(plan) => (
                    <List.Item style={{ borderBottom: "0px" }}>
                      <div>
                        <CheckOutlined className={CheckStyle} />
                        <span>{plan}</span>
                      </div>
                    </List.Item>
                  )}
                />

                <div className={ButtonContainer}>
                  <div className={BuyButton}>Copy Promo Code</div>
                </div>
              </>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CouponDetails;
