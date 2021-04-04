import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const CategoriesContainer = css`
  margin: 16px 0;
  overflow-y: auto;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
`;

export const CategoryActive = css`
  background: #404EFB;
  border-radius: 36px;
  color: ${N0};
  padding: 4px 12px;
  white-space: nowrap;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
  cursor: pointer;
`;

export const CategoryNonActive = css`
  background: #1E1E3F;
  border-radius: 36px;
  color: ${N0};
  padding: 4px 12px;
  white-space: nowrap;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
  cursor: pointer;
`;