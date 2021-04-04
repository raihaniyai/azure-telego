import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const Container = css`
  padding: 5% 5% 0 5%;
  height: 100%;
  width: 100%;
  background: #F3F4F5;
  margin: 60px 0 60px 0;
`;

export const Title = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const HeaderTitle = css`
  background: #1E1E3F;
  height: 75px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 27px;
  color: ${N0};
  font-size: 18px;
  font-weight: 600;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const CouponCard = css`
  background: ${N0};
  border-radius: 12px;
  overflow: hidden;
  margin: 30px 0;
  justify-content: center;
  width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.10));
`;

export const CouponDesc = css`
  padding: 20px 20px;
  font-size: 20px;
  color: #1E1E3F;
`;

export const Company = css`
  font-size: 17px;
  font-style: italic;
  margin-bottom: 10px;
`;

export const Expiration = css `
  padding-top: 10px;
  font-weight: 500;
  color: #FF3E3E;
  font-size: 15px;
`;

export const Thumbnail = css`
  width: 100%;
  object-fit: cover;
`;