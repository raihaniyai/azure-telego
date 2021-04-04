import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import { CategoriesContainer, Category, CategoryActive, CategoryNonActive } from './style';
import ExploreContext from '../../../../contexts/ExploreContext';

const Tabs = ({ categoryList }) => {
    const { activeTab, setActiveTab } = useContext(ExploreContext);

    return (
        <Row className={CategoriesContainer} gutter={[8, 0]} wrap={false}>
            {categoryList.map(category => (
            <Col key={category.id}>
                <div className={activeTab === category.id ? CategoryActive : CategoryNonActive }
                    onClick={() => setActiveTab(category.id)}>
                    {category.label}
                </div>
            </Col>
            ))}
        </Row>
    )
}

export default Tabs;