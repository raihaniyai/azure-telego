import React from 'react';
import { CardContainer, CardSubtitle, CardTitle, TextContainer, Background } from './style';

const SubscriptionCard = ({ id, title, price, durationType }) => {
    let duration;

    if (durationType === 1) duration = 'Day';
    else if (durationType === 2) duration = 'Month';
    else if (durationType === 3) duration = 'Year';

    const subtitle = durationType === 0 ? `$ ${price}` : `$${price}/${duration}`;

    return (
        <div>
            <div className={CardContainer}>
                <img className={Background} src={`../../images/plan-${id % 3}.svg`} alt=""/>
                <div className={TextContainer}>
                    <div className={CardTitle}>{title}</div>
                    <div className={CardSubtitle}>{subtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionCard;