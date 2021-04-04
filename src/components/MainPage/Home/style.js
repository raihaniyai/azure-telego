import { css } from '@emotion/css';

export const Container = css`
  padding: 5% 5% 0 5%;
  height: 100%;
  z-index: 10;
  position: relative;
`;

export const BackgroundContainer = css`
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Background = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #F3F4F5;
`;

export const HeaderBox = css `
  width: 100%;
  height: 145px;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  background: #1E1E3F;
  border-radius: 0 0 27px 27px;
`;