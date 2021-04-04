import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const Container = css`
  padding: 5% 5% 0 5%;
  height: 100%;
  width: 100%;
  background: #FFFFFF;
  margin: 60px 0 50px 0;
`;

export const Title = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Background = css`
  margin: 16px 0;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40));
`;

export const CardContainer = css`
  position: relative;
  text-align: center;
  color: white;
`;

export const CardTitle = css`
  position: absolute;
  top: 40%;
  left: 160px;
  transform: translate(-50%, -50%);
  font-family: Racing Sans One;
  font-size: 320%;
  width: 100%;
`;

export const CardSubtitle = css`
  position: absolute;
  top: 63%;
  left: 125px;
  transform: translate(-50%, -50%);
  font-size: 130%;
  width: 100%;
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