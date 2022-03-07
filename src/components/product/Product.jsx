import "./product.css"

const Product = ({img, link, state}) => {
    
    return (
        <div className={"p " + state}>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <p className={state}>Em finalização</p>
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    );
};

export default Product