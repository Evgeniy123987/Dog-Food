import cn from "classnames"
import React from "react"
import { useEffect } from "react"
import { CardList } from "../../components/App/CardList/CardList.jsx"
import { Footer } from "../../components/App/Footer/Footer.jsx"
import { Header } from "../../components/App/Header/Header.jsx"
import { SearchInfo } from "../../components/App/Search/Search.jsx"
import Spinner from "../../components/spinner/index.jsx"
import api from "../../utils/Api.jsx"
import s from "./index.module.css"
import { ReactComponent as Save } from "./img/save.svg"
import quality from './img/quality.svg'
import truck from './img/truck.svg'

export const Product = ({pictures, name, price, discount, onProductLike, likes = [], currentUser}) => {
    console.log(price)
    const discount_price = 2;
    const isLike = likes.some((id) => id === currentUser?._id);
    return <>
        <div>
            <a href="#" className="button-back">назад</a>
            <h1 className={s.productTitle}>{name}</h1>
            <div>
                <span>артикул: </span><b>23890</b>
            </div>
        </div>
        <div className={s.product}>
            <div className={s.imgWrapper}>
                <img src={pictures} alt={`Изображение ${name}`} />
            </div>
        </div>
        <div className={s.desc}>
            <span className={discount ? s.oldPrice : s.price}>{price}&nbsp;P</span>
            {discount && (<span className={cn(s.price, 'card__price_type_discount')}>{discount_price}&nbsp;P</span>)}
            <div className={s.btnWrap}>
                <div className={s.left}>
                    <button className={s.minus}>-</button>
                    <span className={s.num}>0</span>
                    <button className={s.plus}y>+</button>
                </div>
                <a href="/#" className={cn('btn', 'btn_type_primary', s.card)}>В корзину</a>
            </div>
            <button className={cn(s.favorite, {[s.favoriteActive]: isLike})} inClick={onProductLike}>
                <Save />
                <span>{isLike ? 'В избранном' : 'В избранное'}</span>
            </button>
            <div className={s.dilivery}>
                <img src={truck} alt='truck' />
                <div className={s.right}>
                    <h3 className={s.name}>Доставка по всему Миру!</h3>
                    <p className={s.text}>
                        Доставка курьером - <span className={s.bold}>от 399 Р</span>
                    </p>
                </div>
            </div>
            <div className={s.dilivery}>
                <img src={quality} alt='quality' />
                <div className={s.right}>
                    <h3 className={s.name}>Доставка по всему Миру!</h3>
                    <p className={s.text}>
                        Доставка курьером - <span className={s.bold}>от 399 P</span>
                    </p>
                </div>
            </div>
        </div>
    </>
}

