import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const Container = css`
  width: -webkit-fill-available;
  background: ${N0};
  border-radius: 20px;
  margin: 12px 0 120px 0;
  display: inline-block;
  padding: 16px;
  padding-bottom: 40px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
`;

export const Header = css`
  display: flex;
  justify-content: space-between;
`;

export const Title = css`
  padding-left: 8px;
  font-weight: 700;
  font-size: 17px;
  color: #1E1E3F;
`;

export const Thumbnail = css`
  width: 100%;
  object-fit: cover;
  padding: 1% 2%;
`;