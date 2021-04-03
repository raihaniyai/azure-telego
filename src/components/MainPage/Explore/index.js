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
import NewsPage from './NewsPage';


const Explore = () => {
  
  const { activeTab, setActiveTab } = useContext(ExploreContext);
  const [news, setNews] = useState(<HotPage />);

  useEffect(() => {
    switch (activeTab) {
      case 1: 
        setNews(<HotPage />);
        break;
      case 2: 
        setNews(<NewsPage key='{CategoryList[1].query}' query={CategoryList[1].query}/>);
        break;
      case 3:
        setNews(<NewsPage key='{CategoryList[2].query}' query={CategoryList[2].query}/>);
        break;
      case 4:
        setNews(<NewsPage key='{CategoryList[3].query}' query={CategoryList[3].query}/>);
        break;
      case 5:
        setNews(<NewsPage key='{CategoryList[4].query}' query={CategoryList[4].query}/>);
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
            setNews(<NewsPage key='{event.target.value.replace(/[ ,]+/g, "-")}' query={event.target.value.replace(/[ ,]+/g, "-")}/>);
            setActiveTab();
          }
        }} bordered />
      {news}
    </div>
  )
}

export default Explore;
