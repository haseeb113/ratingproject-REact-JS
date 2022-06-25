import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import { ForRProduct, getbyID, getRbyID } from "../Models/ProductFetch";

const ReviewSection = () => {
    const [SearchParams] = useSearchParams();
    const Navigate = useNavigate();
    const [comments, setcomments] = useState('');
    const [Productimage, setimage] = useState('');
    const [rating, setRating] = useState(0);
    const [ds, setds] = useState('');
    const [PID, setPID] = useState('');
    const [rPID, setrPID] = useState('');
    const [price,setprice]=useState('');
    const [Reviewby, setReviewby] = useState('');
    const [Rd,setRd]=useState('');
    // console.log(rating);

    var udata = localStorage.getItem('data');
    //  console.log(udata);
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }
    var d;
    useEffect(() => {
        var pid = SearchParams.get('id');
        var rpid = SearchParams.get('rPid')
        getbyID(pid, function (result) {
            setds(result.ProductName);
            setimage(result.ProductImage);
            setprice(result.Price);
            setPID(pid);

            setReviewby(udata);
            // console.log(udata.FullName);
        })
        getRbyID({ rpid, udata }, function (result) {
            // console.log(result);
            setds(result.ProductName);
            setcomments(result.Comments)
            // setimage(result.ProductImage);
            setrPID(rpid);
            setRd(result);
            setReviewby(udata);
        })
    }, [])

    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log(d);
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

        if (Rd.ProductID) {
            // console.log(rPID);
            var f=Rd.ProductID;
            ForRProduct({ comments: comments, pid: f, Productname: ds, Reviewby: Reviewby, rating: Ratemsg }, function (result) {
                // console.log(result);
                Navigate('/dashboard');
            });
        } else {

            ForRProduct({ comments: comments, pid: PID, Productname: ds, Reviewby: Reviewby, rating: Ratemsg }, function (result) {
                // console.log(result);
                Navigate('/ProductGallery');
            });
        }
    }
    return (
        <div>
         
            <h2>Review Products</h2>

            <img src={window.URL + Productimage} alt="" width="375" height="275" onChange={(e) => { setimage(e.target.src) }} />

            <i className="fa fa-star checked" aria-hidden="true"></i> =  Bad
            <i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i> = OK
            <i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i> = Average
            <i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i> = Good
            <i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i> =  Awesome
            <form onSubmit={(e) => { handlesubmit(e) }}>
Product Price:<input type="text" value={price} onChange={(e)=>{setprice(e.target.value)}} readOnly/> <br/>
                <label>Product Name: <input type="text" value={ds} onChange={(e) => { setds(e.target.value) }} readOnly /></label><br />
                <label>Your Comments:  <textarea value={comments} onChange={(e) => { setcomments(e.target.value) }} placeholder="Place Your Review about this Product" required></textarea></label><br />
                <label>Rate in Stars <Rating initialValue={0} showTooltip onClick={handleRating} ratingValue={rating} /> </label><br />
                <button type="submit">Submit Reviews</button>
            </form>

        </div>
    )
}
export default ReviewSection;