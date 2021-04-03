import React from 'react';
import { useFetchNews } from '../../../../helpers/apiGet';
import NewsCard from '../NewsCard';
import { Skeleton } from 'antd';
import { SkeletonStyle } from '../HotPage/style';
import { Card, CardContent } from '../NewsCard/style';

const NewsPage = ({ query }) => {

  const { loading, response: newsInfo } = useFetchNews(query);
  console.log('newsInfo', newsInfo);

  const skeleton = new Array(3).fill({});

  return (
    <div style={{paddingBottom: '120px'}}>
      {
        !loading && newsInfo.map(news => 
          (
            <NewsCard key={news.name} title={news.name} url={news.url} desc={news.description} date={news.datePublished.slice(0,10)}/>
          )
      )}
      {
        loading && 
          (
            skeleton.map((_, index) => 
            (
              <div className={Card} style={{display: "block"}}>
              <div className={CardContent}>
                  <div>
                  <Skeleton.Input style={{ width: '300px' }} />
                  <Skeleton className={SkeletonStyle} paragraph={false} />
                  <Skeleton.Input style={{ width: '300px' }} />
                  <Skeleton className={SkeletonStyle} paragraph={false} />
                  </div>
              </div>
              </div>
            ))
        )
      }

    </div>
  )
}

export default NewsPage;
