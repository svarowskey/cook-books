import style from './Product.module.scss';

const Product = ({match}) => {
    return (
        <div>
            <button onClick={() => {console.log(match)}}>Click</button>
        </div>
    )
}

export default Product;
