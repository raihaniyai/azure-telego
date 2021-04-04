import React from 'react';
import { Row, Col } from 'antd';
import { ContentList } from './../constants';
import { ContentsContainer, Content, ContentDesc, Thumbnail } from './style'

const Carousel = () => {
  return (
    <Row className={ContentsContainer} gutter={[8, 0]} wrap={false}>
      {ContentList.map(content => (
        <Col key={content.id}>
          <a href={content.url}>
            <div className={Content}>
              <div>
                <img className={Thumbnail} src={content.img} alt={content.title} />
              </div>
              <div className={ContentDesc}>{content.title}</div>
            </div>
          </a>
        </Col>
      ))}
    </Row>
  )
};

export default Carousel;