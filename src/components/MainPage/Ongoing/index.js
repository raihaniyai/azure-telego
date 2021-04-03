import React, { useEffect, useState } from 'react';
import { Container, HeaderTitle } from './style';
import { Spin, Tabs } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import SubscriptionCard from '../../SubscriptionCard';
import { useFetchOrderData } from '../../../helpers/apiGet';

const { TabPane } = Tabs;

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const date = yyyy + '-' + mm + '-' + dd;

const loadIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Ongoing = () => {
  const { loading, response: orderList } = useFetchOrderData(1);
  const [ongoing, setOngoing] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!loading) {
        setOngoing(orderList.filter(order => date <= order.end_date));
        setHistory(orderList.filter(order => date > order.end_date));
    }
  }, [loading, orderList]);

  return (
    <>
      <div className={Container}>
        <div className={HeaderTitle}>My Subscriptions</div>
        {
          loading && 
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
              <Spin indicator={loadIcon} size="large"/>
            </div>
        }
        <Tabs defaultActiveKey="1" centered size="large">

        {!loading && ongoing.length > 0 && (
          <TabPane tab="Ongoing" key="1">
            {ongoing.map(product => (
                <div key={product.id}>
                    {/* <Link to={{pathname: `/product/${product.id}`, company: company, services: services}}> */}
                        <SubscriptionCard id={product.name.charCodeAt(0)} title={product.name} price={product.price} durationType={product.duration_type} />                                        
                    {/* </Link> */}
                </div>
            ))}
          </TabPane>
        )}
        {!loading && history.length > 0 && (
          <TabPane tab="History" key="2">
            {history.map(product => (
                <div key={product.id}>
                    <div key={product.name}>
                        {/* <Link to={{pathname: `/product/${product.id}`, company: company, services: services}}> */}
                            <SubscriptionCard id={product.name.charCodeAt(0)} title={product.name} price={product.price} durationType={product.duration_type} />                                        
                        {/* </Link> */}
                    </div>
                </div>
            ))}
          </TabPane>
        )}
        </Tabs>
      </div>
    </>
  )
}

export default Ongoing;
