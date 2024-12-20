import  './style.css'

function Images(category){
    return(
        <div className='thisweek__images'>
            <div className="thisweek_wrapper">
                <div className="image__item"></div>
                <div className="image__title">
                    <p className="productWeek" id="categoryProduct">V-Neck T-Shirt</p>
                    <div className="image__text">
                        <p className="productWeek" id="nameProduct">Embroidered Seersucker Shirt</p>
                        <p className="productWeek" id="priceProduct">$99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images;