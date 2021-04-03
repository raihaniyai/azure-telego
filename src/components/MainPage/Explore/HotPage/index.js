import React from 'react';
import Carousel from '../Carousel';
import Trendings from '../Trendings';
import { useFetchNews } from '../../../../helpers/apiGet';
import { Skeleton, List } from 'antd';
import { SkeletonStyle, ListStyle } from './style';
import { TrendingWrapper } from './style';

const HotPage = () => {
    const { loading, response: newsInfo } = useFetchNews();
    const skeleton = new Array(5).fill({});
    return (
        <div>
            <Carousel />
            {
                !loading &&  <Trendings news={newsInfo.slice(0,5)}/>
            }
            {
                loading && 
                    (
                    <>
                        <List
                        className={ListStyle}
                        dataSource={skeleton}
                        renderItem={(trending, index) => (
                            <a href = {trending.url}>
                            <List.Item>
                                <div className={TrendingWrapper}>
                                <Skeleton.Input style={{ width: '300px' }} />
                                <Skeleton className={SkeletonStyle} paragraph={false} />
                                </div>
                            </List.Item>
                            </a>
                        )}
                        />
                  </>
                )
            }
        </div>
    )
}

export default HotPage;