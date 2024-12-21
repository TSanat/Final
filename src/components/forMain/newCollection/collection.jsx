import './style.css';
import Next from '/src/components/forMain/nextPrev/next.jsx';
import Button from "../../ui/button/buttonArrow.jsx";
function Collection() {
    return (
        <div className="collections">
            <div className="container">
                <div className="collections__wrapper">
                    <div className="collections__text">
                        <div className="title">
                            <p className="new">NEW <br/> COLLECTIONS</p>
                            <p className="summer">Summer <br/>2024</p>
                        </div>
                        <div className="collection__buttons">
                            <Button value="Go To Shop"/>
                            <Next />
                        </div>
                    </div>
                    <div className="collections__image">
                        <div className="image__item" id="first"></div>
                        <div className="image__item" id="second"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;