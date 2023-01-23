import '../CardList/Style.css';
import Card from '../Card/Card.jsx';

export const CardList = ({ data, curentUser, onProductLike }) => {



    return (
        <div className='cards__list'>
            {data.map((item, index) => (
                <Card {...item} key={`${index}-${item.name}`} curentUser={curentUser} onProductLike={onProductLike} />
            ))}
        </div>
    )
}

