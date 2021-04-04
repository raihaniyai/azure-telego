import React from 'react';
import { GachaContainer, Countdown } from './style';

const GachaButton = ({ onClickGacha }) => {
    return (
        <div className={GachaContainer}>
            {/* <div className={Countdown}> 22:58:02 </div> */}
            <div onClick={onClickGacha}>
                <img src="images/gacha-icon.svg" alt="gacha-icon" width="100%"/>
            </div>
        </div>
    )
}

export default GachaButton;