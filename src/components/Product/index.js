import React, { useEffect, useState } from 'react';
import { Row, Col, List, Skeleton } from 'antd';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useFetchProductData } from '../../helpers/apiGet';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { Container, HeaderTitle, Title, DetailsContainer, DetailsList, ButtonContainer, BuyButton, CheckStyle } from './style';
import SubscriptionCard from '../SubscriptionCard';
import PaymentModal from './PaymentModal';

const skeleton = new Array(5).fill({});

const Product = () => {
    const { location } = useHistory();
    const { company, services } = location;
    const { productID } = useParams();
    const { loading, response: plan } = useFetchProductData(productID);
    const [duration, setDuration] = useState('')
    const [paymentPop, setPaymentPop] = useState(false);

    useEffect(() => {
        if (!loading) {
            if (plan.durationType === 1) setDuration('Day')
            else if (plan.durationType === 2) setDuration('Month')
            else if (plan.durationType === 3) setDuration('Year')
        }
    }, [loading, plan]);

    return (
        <>
            <Row justify="center">
                <Col xs={24} md={12}>
                    <div className={Container}>
                        <div className={HeaderTitle}>
                            <Link to={{ pathname: company ? `/company/${company.id}` : `/`, services: services, company: company }}><ArrowLeftOutlined/></Link>
                        </div>
                        {!loading && <SubscriptionCard id={5} title={plan.name} price={plan.price} durationType={plan.durationType} />}
                    </div>
                    <div className={DetailsContainer}>
                        <div className={Title}>Details</div>
                        {!loading && (
                            <>
                                <List
                                    className={DetailsList}
                                    dataSource={plan.description}
                                    renderItem={(item) => (
                                    <List.Item style={{borderBottom: "0px"}}>
                                        <div>
                                            <CheckOutlined className={CheckStyle}/>
                                            <span>{item}</span>
                                        </div>
                                    </List.Item>
                                    )}
                                />

                                <div className={ButtonContainer}>
                                    <div className={BuyButton} onClick={setPaymentPop}>
                                        Buy Now ($ {plan.price}/{duration})
                                    </div>
                                </div>
                            </>
                        )}
                        
                        {loading && skeleton.map((_, index) => (
                            <Skeleton paragraph={{ rows: 1 }} key={index} />
                        ))}
                    </div>
                </Col>
            </Row>

            {!loading && <PaymentModal visible={paymentPop} setVisible={setPaymentPop} plan={plan} duration={duration} />}
        </>
    )
}

export default Product;