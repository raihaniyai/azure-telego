import React, { useEffect, useState } from 'react';
import { Container, HeaderTitle } from './style';
import { Tabs } from 'antd';
import SubscriptionCard from '../../SubscriptionCard';
import { useFetchOrderData } from '../../../helpers/apiGet';

const { TabPane } = Tabs;

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const date = yyyy + '-' + mm + '-' + dd;

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

  console.log(ongoing)
  console.log(history)

  return (
    <>
      <div className={Container}>
        <div className={HeaderTitle}>My Subscriptions</div>
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
