import { css } from '@emotion/css';

export const Card = css`
    width: -webkit-fill-available;
    background: #FFFFFF;
    border-radius: 20px;
    margin: 15px 0;
    display: inline-block;
    padding: 10px;
    padding-bottom: 23px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

export const CardContent = css`
    background: #FFFFFF;
    margin: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
`;

export const Name = css`
    font-weight: 600;
    font-size: 17px;
    color: #1E1E3F;
`;

export const Desc = css`
    margin: 5px 0;
    font-size: 13px;
    line-height: 22px;
    font-weight: 300;
    color: #1E1E3F;
`;

export const Date = css`
    margin: 4px 0;
    font-size: 13px;
    font-style: italic;
    line-height: 22px;
    font-weight: 500;
    color: #1E1E3F;
`;

