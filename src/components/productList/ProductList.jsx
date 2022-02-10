import "./productList.css"
import Product from "../product/Product.jsx"
import {products} from "../../data"


const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Confira meus trabalhos <i className="fa-solid fa-turn-down"></i></h1>
                <p className="pl-desc">Todos sites foram desenvolvidos individualmente para cada cliente, com designs únicos que refletem a identidade visual de cada empresa. Além disso, todos são responsivos e modernos.</p>
            </div>
            <div className="pl-list">
                {products.map(item => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList