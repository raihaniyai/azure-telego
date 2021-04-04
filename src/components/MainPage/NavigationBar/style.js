import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const NavbarStyle = css`
  background: #1E1E3F;
  height: 96px;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 12px 32px;
  justify-content: center;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.08), 4px 8px 24px rgba(0, 0, 0, 0.025);
  z-index: 20;
`;

export const MenuWrapper = css`
  text-align: center;
  margin: 0 8px;
  font-size: 12px;
  color: #A0A3B1;
`;

export const ActiveTitle = css`
  color: #404EFB;
  font-weight: 600;
`;

export const MenuIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 15px;
  text-align: center;
  font-size: 24px;
  margin-bottom: 4px;
  color: #A0A3B1;
`;

export const MenuIconActive = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 15px;
  text-align: center;
  font-size: 24px;
  background: #404EFB;
  color: ${N0};
  margin-bottom: 4px;
`;
