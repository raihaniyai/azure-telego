import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import GlobalContext from './../../contexts/GlobalContext';
import Home from './Home';
import Explore from './Explore';
import Coupons from './Coupons';
import Ongoing from './Ongoing';
import Account from './Account';
import Navbar from './NavigationBar';
import { ExploreProvider } from '../../contexts/ExploreContext';

const MainPage = () => {
  const { activeMenu } = useContext(GlobalContext);
  const [content, setContent] = useState();

  useEffect(() => {
    switch (activeMenu) {
      case 1: 
        setContent(<Home />);
        break;
      case 2: 
        setContent(<Coupons />);
        break;
      case 3:
        setContent(<ExploreProvider><Explore /></ExploreProvider>);
        break;
      case 4:
        setContent(<Ongoing />);
        break;
      case 5:
        setContent(<Account />);
        break;
      default:
        break;
    }
  }, [activeMenu]);


  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={16} md={12} lg={10}>
          {content}
        </Col>
      </Row>
      <Navbar />
    </>
  )
};

export default MainPage;