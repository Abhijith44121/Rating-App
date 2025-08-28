import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";

const Rating = () => {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    const [submit,setSubmit] = useState(false);
    const handleSubmit = ()=>{if(rating > 0) { setSubmit(true) }};
    const stars = Array.from({length: 5}, (_, i) =>i + 1)
    const feedBack = [ "Terrible","Poor","Fair","Good","Excellent"];
    // Close modal and reset UI
const closeModal = () => {
  setSubmit(false);
  setRating(0);
  setHover(0);
};

    
  return <div className="rating-container">
    <h2>
        Rate your Experience</h2>
        <div className="stars">
            {stars.map((star) => (
                <Star key={star}
                 star={ star }
                 rating={ rating }
                 hover={ hover }
                // color={color}
                rateClick = {setRating}
                mouseHover = {setHover}
                mouseLeave = {()=> setHover(null)}

                  />
                // <span onClick = {() => {setRating(star)}}key={star} 
                // onMouseEnter={ () => setHover(star) }
                // onMouseLeave={ () => setHover(0) }
                
                // className={`star ${star <= (hover || rating) ? 'active' : ''}`}>
                    
                //     {'\u2605'}
                // </span>
        )
        )}
        </div>
        {rating > 0 && <p className="feedback">{feedBack[rating-1]}</p>}
        <button className="submit-btn"
        onClick={handleSubmit}
        disabled= {rating ===0 }>Submit</button>
        <Modal 
    isOpen={submit} 
    onClose={closeModal} 
    rating={rating} 
/>

    </div>
    ;
};
export default Rating;