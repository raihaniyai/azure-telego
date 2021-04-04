import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const Container = css`
  width: -webkit-fill-available;
  background: ${N0};
  border-radius: 20px;
  margin: 12px 0;
  display: inline-block;
  padding: 16px;
  padding-bottom: 23px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
`;

export const Title = css`
  padding-left: 8px;
  font-size: 17px;
  font-weight: 700;
  color: #1E1E3F;
  margin-bottom: 18px;
`;

export const OptionIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  background: #1E1E3F;
  border-radius: 15px;
  text-align: center;
  font-size: 24px;
  color: ${N0};
  &:hover {
    background: #404EFB;
  }
`;

export const Option = css`
  text-align: -webkit-center;
`;

export const OptionName = css`
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
  color: #1E1E3F;
`;
