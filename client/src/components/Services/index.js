import React from 'react';
import { Input, Row, Col, Skeleton } from 'antd'; 
import { SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useFetchServiceData } from '../../helpers/apiGet';
import capitalize from '../../helpers/capitalize';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  CompanyBox,
  CompanyContainer,
  CompanyWrapper,
  CompanyLogo,
  CompanyName,
  HeaderBox,
  HeaderTitle,
  HeaderWrapper,
  InputStyle,
  SkeletonStyle,
  Title,
} from './style';

const Services = () => {
  const { servicesName } = useParams();
  const { loading, response: serviceList } = useFetchServiceData(servicesName);
  const skeleton = new Array(6).fill({});

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12}>
          <div className={Container}>
            <Link to="/">
              <div className={HeaderTitle}>
                <ArrowLeftOutlined/>
              </div>
            </Link>

            <div className={HeaderBox}>
              <div className={HeaderWrapper}>
                <div>Services and plans</div>
                <div className={Title}>{capitalize(servicesName).replace('_', ' ')}</div>
              </div>
            </div>

            <div className={CompanyBox}>
              <Input className={InputStyle} placeholder="Search Provider" prefix={<SearchOutlined />} />

              <Row className={CompanyContainer} gutter={[16,16]}>
                {!loading && serviceList.map(Company => (
                  <Col xs={12} md={8} key={Company.id}>
                    <Link to={{pathname: `/company/${Company.id}`, services: servicesName, company: Company}}>
                      <div className={CompanyWrapper}>
                        <img className={CompanyLogo} src={Company.logo} alt={Company.name} />
                        <div className={CompanyName}>{Company.name}</div>
                      </div>
                    </Link>
                  </Col>
                ))}

                {loading && skeleton.map((_, index) => (
                  <Col xs={12} md={8} key={index}>
                    <div className={CompanyWrapper}>
                      <Skeleton.Avatar active size={64} shape="square" />
                      <Skeleton className={SkeletonStyle} active paragraph={false} />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
};

export default Services;