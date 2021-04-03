import React, { useState, useContext, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import { CategoryList } from './constants';
import { Container, Title, InputStyle } from './style'
import ExploreContext from '../../../contexts/ExploreContext';
import Tabs from './Tabs';
import NewsPageAutomotive from './NewsPageAutomotive';
import NewsPageGaming from './NewsPageGaming';
import NewsPageInternet from './NewsPageInternet';
import NewsPageIoT from './NewsPageIoT';
import NewsPageAny from './NewsPageAny';
import HotPage from './HotPage';


const Explore = () => {
  
  const { activeTab, setActiveTab } = useContext(ExploreContext);
  const [news, setNews] = useState(<HotPage />);

  useEffect(() => {
    switch (activeTab) {
      case 1: 
        setNews(<HotPage />);
        break;
      case 2: 
        setNews(<NewsPageInternet query={CategoryList[1].query}/>);
        break;
      case 3:
        setNews(<NewsPageIoT query={CategoryList[2].query}/>);
        break;
      case 4:
        setNews(<NewsPageGaming query={CategoryList[3].query}/>);
        break;
      case 5:
        setNews(<NewsPageAutomotive query={CategoryList[4].query}/>);
        break;
      default:
        break;
    }
  }, [activeTab]);

  return (
    <div className={Container}>
      <div>
        <div>Explore!</div>
        <div className={Title}>What's New?</div>
      </div>
      <Tabs categoryList={CategoryList}/>
      <Input className={InputStyle} placeholder="Search" prefix={<SearchOutlined />}
        onKeyPress={(event) => {
          if (event.key === 'Enter' && (event.target.value.trim().length)) {
            setNews(<NewsPageAny query={event.target.value.replace(/[ ,]+/g, "-")}/>);
            setActiveTab();
          }
        }} bordered />
      {news}
    </div>
  )
}

export default Explore;
