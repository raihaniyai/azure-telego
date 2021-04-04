import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';


export const Container = css`
  height: 100%;
  width: 100%;
  background: #6700EA;
`;

export const HeaderTitle = css`
  background: #1E1E3F;
  height: 55px;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 23px;
  color: ${N0};
  font-size: 18px;
  font-weight: 500;

  > span {
    margin-left: 12px;
  }
`;

export const ProfileContainer = css`
    background: #6700EA;
    width: 100%;
    height: 370px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CompanyLogo = css`
    width: 100px;
    border: 5px solid #FFFFFF;
    border-radius: 10px;
`;

export const CompanyName = css`
    font-weight: 600;
    font-size: 18px;
    padding-top: 10px;
    color: #FFFFFF
`;

export const CompanyType = css`
    font-size: 15px;
    font-style: italic;
    padding-top: 2px;
    color: #FFFFFF
`;

export const ItemContainer = css`
  padding: 2% 5% 0 5%;
  background: ${N0};
  border-radius: 27px 27px 0 0;
  box-shadow: 0px -20px 50px rgba(54, 12, 107, 0.4);
`;

export const SubscriptionCard = css`
  margin: 16px 0;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40));
`

export const CardContainer = css`
  position: relative;
  text-align: center;
  color: white;
`;

export const CardTitle = css`
  position: absolute;
  top: 40%;
  left: 155px;
  transform: translate(-50%, -50%);
  font-family: Racing Sans One;
  font-size: 300%;
  width: 100%;
`;

export const CardSubtitle = css`
  position: absolute;
  top: 64%;
  left: 125px;
  transform: translate(-50%, -50%);
  font-size: 130%;
  width: 100%;
`;