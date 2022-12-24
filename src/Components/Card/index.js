import React from 'react';
import styles from './Card.module.scss';

function Card({onFavorite, title, imageUrl, price, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavirite, setIsFavirite] = React.useState(false);

    const onClickPlus = () => {
        onPlus ({title, imageUrl, price});
        setIsAdded (!isAdded);
    };

    const onClickFavorite = () => {
        setIsFavirite(!isFavirite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavirite ? "/img/earn_like.svg" : "/img/earn_unlike.svg"} alt="Unlike "/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{price} rub.</b>
                </div>
                <img 
                    className={styles.plus} 
                    onClick={onClickPlus} 
                    src={isAdded ? '/img/btn_check.svg' : '/img/btn_plus.svg'} 
                    alt="Plus"
                />
            </div>
        </div> 
    );  
}        

export default Card;