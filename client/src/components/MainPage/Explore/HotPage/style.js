import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';


export const SkeletonStyle = css`
  padding: 0 42px;
  text-align: -webkit-center;
`;

export const ListStyle = css`
  margin-top: 8px;
  margin-bottom: 120px;
  display: inline-block;

  .ant-list-item {
    padding: 8px 0;
  }
`;

export const TrendingWrapper = css`
  display: flex;
  background: ${N0};
  width: 100%;
  padding: 8px 16px;
  border-radius: 12px;
  align-items: center;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
`;