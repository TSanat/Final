import './main.css';
import Search from '/src/components/forMain/search/search.jsx';
import Collection from '/src/components/forMain/newCollection/collection.jsx';
import Thisweek from '/src/components/forMain/thisWeek/thisweek.jsx';
import Xiv from '/src/components/forMain/xiv/xiv.jsx';
import Fashion from '/src/components/forMain/fashionDisign/fashionDesign.jsx';

function Main(){
    return(
        <div className="mainPage">
            <div className="container">
                <div className="main__wrapper">
                    <Search />
                    <Collection />
                    <Thisweek />
                    <Xiv />
                    <Fashion />
                </div>
            </div>
        </div>
    )
}

export default Main;