import React from 'react';
import { Card, CardContent, Name, Desc, Date } from './style';
// { title, url, desc, date }
const NewsCard = ({ title, url, desc, date }) => {

    return (
    <a href={url}>
        <div className={Card} style={{display: "block"}}>
            <div className={CardContent}>
                <div>
                    <div className={Name}>{title}</div>
                    <div className={Desc}>{desc.slice(0, 150)} ...</div>
                    <div className={Date}>{date}</div>
                </div>
            </div>
        </div>
    </a>
    )
}

export default NewsCard;