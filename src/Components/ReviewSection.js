import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import { ForRProduct, getbyID } from "../Models/ProductFetch";

const ReviewSection = () => {
    const [SearchParams] = useSearchParams();
    const Navigate = useNavigate();
    const [comments, setcomments] = useState('');
    const [Productimage, setimage] = useState('');
    const [rating, setRating] = useState(0);
    const [ds, setds] = useState('');
    const [PID,setPID]=useState('');
    const [Reviewby,setReviewby]=useState('');
    // console.log(rating);

    var udata = localStorage.getItem('data');
   
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }
    var d;
    useEffect(() => {
        var pid = SearchParams.get('id');
        getbyID(pid, function (result) {
            setds(result.ProductName);
            setimage(result.ProductImage);
            setPID(pid);

            setReviewby(udata);
            // console.log(udata.FullName);
        })
    }, [])
    const handlesubmit = (e) => {
        e.preventDefault();
        var Ratemsg;
        if (rating === 100) {
            Ratemsg = "Awesome";
        }
        else if (rating === 80) {
            Ratemsg = "Good";
        } else if (rating === 60) {
            Ratemsg = "Average"
        }
        else if (rating === 40) {
            Ratemsg = "Ok";
        }
        else if (rating === 20) {
            Ratemsg = "Bad";
        }
        ForRProduct({ comments: comments,pid:PID, Productname: ds, Reviewby:Reviewby,rating: Ratemsg }, function (result) {
            console.log(result);
            Navigate('/ProductGallery');
        });

    }
    return (
        <div>
            <h2></h2>
            <h2>Review Products</h2>
            <img src={window.URL + Productimage} alt="" width="375" height="275" onChange={(e) => { setimage(e.target.src) }} />
            <form onSubmit={handlesubmit}>

                <label>Product Name: <input type="text" value={ds} onChange={(e) => { setds(e.target.value) }} readOnly /></label><br />
                <label>Your Comments:  <textarea value={comments} onChange={(e) => { setcomments(e.target.value) }} placeholder="Place Your Review about this Product"></textarea></label><br />
                <label>Rating Stars <Rating initialValue={0} showTooltip onClick={handleRating} ratingValue={rating} /* Available Props */ /> </label><br />
                <button type="submit">Submit Reviews</button>
            </form>

        </div>
    )
}
export default ReviewSection;