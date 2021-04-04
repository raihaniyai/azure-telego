import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const Container = css`
  padding: 5% 5% 0 5%;
  height: 100%;
  background: #F3F4F5;
`;

export const Title = css`
  font-size: 18px;
  font-weight: 700;
`;

export const CategoriesContainer = css`
  margin: 16px 0;
  overflow-y: auto;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
`;

export const Category = css`
  background: #404EFB;
  border-radius: 36px;
  color: ${N0};
  padding: 4px 12px;
  white-space: nowrap;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
`;

export const InputStyle = css`
  border-radius: 8px;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.08), 4px 8px 24px rgba(0, 0, 0, 0.025);
  margin-top: 8px;
  margin-bottom: 16px;
`;
