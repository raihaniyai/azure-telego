import React from 'react';
import { CouponCardStyle, CouponDesc, Company, Expiration, Thumbnail } from './style';
import { Button } from 'antd';

const CouponCard = ({ name, company, expiry, thumbnail, onCopyCode }) => {
   
    return (
        <div className={CouponCardStyle}>
            <div>
            <img className={Thumbnail} src={thumbnail} alt=""/>
            </div>
            <div className={CouponDesc}> 
            <strong>{name}</strong>
            <div className={Company}>{company}</div>
            {expiry && (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", paddingTop: "3px"}}>
                <Button type="dashed" style={{borderColor: "#404EFB", color: "#404EFB", marginTop: "2px"}} onClick={onCopyCode}>
                    <strong>Copy promo code</strong>
                </Button>
                <div className={Expiration}>
                    {expiry}
                </div>
            </div>)}
            </div>
        </div>
    )
}

export default CouponCard;