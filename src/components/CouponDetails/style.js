import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

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
`;

export const Container = css`
  width: 100%;
  background: #FFFFFF;
`;

export const Title = css`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #E4E6FD;
  color: #1E1E3F;
`;

export const DetailsContainer = css`
  padding: 3% 5% 0% 5%;
  width: 100%;
  background: #FFFFFF;
  margin: 0 0 50px 0;
  display: flex;
  flex-direction: column;
`;

export const DetailsList = css`
  margin: 8px 120px 0 0;
  padding: 10px 20px;
  width: 100%;
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  color: #1E1E3F;
`;

export const ButtonContainer = css`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const BuyButton = css`
  background: #1E1E3F;
  border-radius: 38px;
  width: 100%;
  font-size: 16px;
  font-weight: 650;
  color: ${N0};
  text-align: center;
  padding: 20px;
  margin-bottom: 15px;
`;

export const ProductImage = css`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 100%;
`;

export const CheckStyle = css`
  color: #404EFB;
  margin-right: 12px;
`;

export const TotalPayment = css`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #F4F4F4;
  color: #1E1E3F;
`;
