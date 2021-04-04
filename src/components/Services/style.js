import { css } from '@emotion/css';
import { N0, N50, N600 } from 'unify-token/build/v2/colors';

export const Header = css`
  background: ${N600};
  height: 25%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: ${N0};
  display: flex;
`;

export const HeaderBox = css `
  width: 100%;
  height: 90px;
  margin-top: 55px;
  padding: 0px 7px;
  position: absolute;
  top: 0;
  left: 0;
  background: #404EFB;
  border-radius: 0 0 27px 27px;
  color: ${N0};
`;

export const HeaderTitle = css`
  background: #404EFB;
  height: 55px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 23px;
  color: ${N0};
  font-size: 18px;
  font-weight: 600;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const HeaderWrapper = css`
  margin: 0% 4%;
`;

export const Title = css`
  font-size: 24px;
  font-weight: 700;
  color: ${N0};
`;

export const InputStyle = css`
  border-radius: 8px;
  margin: 8px 0px;
`;

export const Container = css`
  padding: 5% 5% 0 5%;
  height: 100%;
  width: 100%;
  background: ${N50};
  margin: 0 0 50px 0;
`;

export const CompanyBox = css`
  margin-top: 132px;
`;

export const CompanyContainer = css`
  margin-top: 16px;
`;

export const CompanyWrapper = css`
  height: 160px;
  width: 100%;
  background: ${N0};
  border-radius: 12px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
`;

export const CompanyLogo = css`
  height: 64px;
  max-width: 100%;
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 12px;
`;

export const CompanyName = css`
  font-weight: 600;
  color: ${N600};
`;

export const SkeletonStyle = css`
  padding: 0 42px;
  text-align: -webkit-center;
`;
