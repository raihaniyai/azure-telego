import React, { useEffect, useState } from 'react';
import { Row, Col, Tabs, Skeleton, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useParams, Link, useHistory } from 'react-router-dom';
import capitalize from '../../helpers/capitalize';
import { useFetchCompanyData } from '../../helpers/apiGet';
import { Container, HeaderTitle, ProfileContainer, CompanyLogo, CompanyName, CompanyType, ItemContainer } from './style';
import SubscriptionCard from '../SubscriptionCard';
import { LoadingOutlined } from '@ant-design/icons';

const loadIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { TabPane } = Tabs;
const skeleton = new Array(3).fill({});

const Company = () => {
    const { location } = useHistory();
    const { companyID } = useParams();
    const { services, company } = location;
    const { loading, response: productList } = useFetchCompanyData(companyID);
    const [products, setProducts] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        if (!loading) {
            setSubscriptions(productList.filter(element => element.type === 1));
            setProducts(productList.filter(element => element.type === 2));
        }
    }, [loading, productList]);
    
    return (
        <>
            <Row justify="center">
                <Col xs={24} md={12}>
                <div className={Container}>
                    <div className={HeaderTitle}>
                        <Link to={`/services/${services}`}><ArrowLeftOutlined/></Link>
                        <span>{company.name}</span>
                    </div>

                    <div className={ProfileContainer}>
                        <img className={CompanyLogo} src={company.logo} width="100%" alt="logo"/>
                        <div className={CompanyName}>{company.name}</div>
                        <div className={CompanyType}>{capitalize(services).replace('_', ' ')}</div>
                    </div>

                    <div className={ItemContainer}>
                        {
                            loading && 
                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                                <Spin indicator={loadIcon} size="large"/>
                                </div>
                        }
                        <Tabs defaultActiveKey={subscriptions.length > 0 ? "1" : "2"} centered size="large">

                            {subscriptions.length > 0 && (
                                <TabPane tab="Subscriptions" key="1">
                                    {!loading && subscriptions.map(product => (
                                        <div key={product.id}>
                                            <div key={product.id}>
                                                <Link to={{pathname: `/product/${product.id}`, company: company, services: services}}>
                                                    <SubscriptionCard id={product.id} title={product.name} price={product.price} durationType={product.duration_type} />                                        
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </TabPane>
                            )}
                            {products.length > 0 && (
                                <TabPane tab="Products" key="2">
                                    {!loading && products.map(product => (
                                        <div key={product.id}>
                                            <div key={product.id}>
                                                <Link to={{pathname: `/product/${product.id}`, company: company, services: services}}>
                                                    <SubscriptionCard id={product.id} title={product.name} price={product.price} durationType={product.duration_type} />                                        
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </TabPane>
                            )}
                        </Tabs>
                    </div>
                </div>
                </Col>
            </Row>
        </>
    )
}

export default Company;