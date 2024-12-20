import './style.css';
import Next from '/src/components/forMain/nextPrev/next.jsx'
import Images from '/src/components/forMain/line__images/images.jsx'
function Thisweek(){
    return (
        <div className="thisweek">
            <div className="container">
                <div className="thisweek__title">
                    <p className="new">NEW <br/> THIS WEEK</p>
                    <button className="see">See All</button>
                </div>
                <Images category="other" />
                <Next />
            </div>
        </div>
    )
}

export default Thisweek;