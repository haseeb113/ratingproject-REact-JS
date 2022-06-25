import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DisplayRProduct, deletereview } from "../Models/ProductFetch";
import '../Components/style.css';
import Loading from "./Loading";


const Dashboard = () => {
    var udata = localStorage.getItem('data');
    const [rproduct, setrproduct] = useState([]);
    const [Isloaded, setisloaded] = useState(false);
    useEffect(() => {
        
        DisplayRProduct(udata, function (result) {
            
            if(result)
            {
                setisloaded(true);
                setrproduct(result);
            }
            else
            {
                setisloaded(false);
            }
            // console.log(result);
            
        })


    }, [])
const Renderdata=(
    <table>
    <thead>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Comments</th>
        <th>Rating Stars</th>
        {/* <th>Action</th> */}

    </thead>
    <tbody>
        
        {
            rproduct.length > 0 ?
                rproduct.map((row) => {
                    return (
                        <tr>
                            <td>{row.ProductID}</td>
                            <td>{row.ProductName}</td>
                            <td>{row.Comments}</td>
                            <td>{row.RatingStars}</td>
                            {/* <td><Link to={{pathname:'/delete',search:'?rPid='+ row.ProductID }}>Delete Review</Link></td> */}
                            
                            {/* <td><Link to={{pathname:'/review',search:'?rPid='+ row.ProductID }}>Edit Review</Link></td> */}

                        </tr>
                    )
                }) :

                <tr>
                   <h2>No Reviews</h2>
                </tr>
        }
    </tbody>
</table>
);


    return (
        
        <div >
             <div className='slider'>
             <h2> Reviewed Product List - {udata}</h2>
            </div>
            <div className="tabdiv">
            <i className="fa fa-star checked" aria-hidden="true"></i> =  Bad &nbsp;&nbsp;
            <i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i> = OK&nbsp;&nbsp;
            <i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i> = Average&nbsp;&nbsp;
            <i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i> = Good&nbsp;&nbsp;
            <i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i><i className="fa fa-star checked" aria-hidden="true"></i> =  Awesome
            <br /><br />
            { Renderdata}
    
            </div>
        </div>
    )
}
export default Dashboard;