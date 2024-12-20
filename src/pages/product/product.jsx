import './product.css';
import Button from '/src/components/ui/button/button.jsx';
function Product() {
    return (
        <div className="product">
            <div className="container">
                <div className="images">
                    <div className="mainImage">
                    </div>
                    <div className="secondaryImage">
                    </div>
                </div>
                <div className="description">
                    <div className="wishlistIcon">
                        <img src="/src/assets/product__like.svg" alt="heart"/>
                    </div>
                    <div className="desc__wrapper">
                        <div className="text">
                            <p className="title">
                                ABSTRACT PRINT SHIRT
                            </p>
                            <p className="price">
                                $99
                            </p>
                            <p className="company">
                                MRP incl. of all taxes
                            </p>
                            <p className="textDesc">
                                Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.
                            </p>
                        </div>
                        <div className="other">
                            <p className="size__text">Size</p>
                            <div className="sizes">
                                <div className="sizes__items"><p>XS</p></div>
                                <div className="sizes__items"><p>S</p></div>
                                <div className="sizes__items"><p>M</p></div>
                                <div className="sizes__items"><p>L</p></div>
                                <div className="sizes__items"><p>XL</p></div>
                                <div className="sizes__items"><p>2X</p></div>

                            </div>
                            <p className="text__add">FIND YOUR SIZE | MEASUREMENT GUIDE</p>
                            <Button value = "ADD"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;