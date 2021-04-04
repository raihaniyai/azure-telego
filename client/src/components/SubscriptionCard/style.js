import { css } from '@emotion/css';

export const Background = css`
  margin: 16px 0;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40));
`;

export const TextContainer = css`
  position: absolute;
  top: 40%;
  left: 36%;
  transform: translate(-40%, -40%);
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  width: 100%;
  padding: 10%;
  `;

export const CardContainer = css`
  position: relative;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  width: 100%;
`;

export const CardTitle = css`
  font-family: Racing Sans One;
  font-size: 1.5rem;
  width: 90%;
  text-align: left;
  @media (max-width: 360px) {
    font-size: 1.1rem;
  }
`;

export const CardSubtitle = css`
  font-size: 0.8rem;
  width: 90%;
  text-align: left;
`;