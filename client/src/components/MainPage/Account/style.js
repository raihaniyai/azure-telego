import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const Container = css`
  // padding: 5% 5% 0 5%;
  padding-top: 5px;
  height: 100%;
  width: 100%;
  background: #F3F4F5;
`;

export const Title = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ProfileCard = css`
  margin-top: 90px;
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

