import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { DisplayRProduct } from "../Models/ProductFetch";


const Dashboard = () => {
    var udata = localStorage.getItem('data');
    const [rproduct, setrproduct] = useState([]);
    useEffect(() => {
        DisplayRProduct(udata,function(result){
            setrproduct(result);
        })
        DisplayRProduct(setrproduct);
    }, [])
    return (
        <div>
            <h2> Reviewed Product List</h2>
            <table style={{ border: "1px solid black"}}>
                <thead>
                    <th>Product ID</th>
                    <th>Comments</th>
                    <th>Rating Stars</th>
                   
                    <th>Operation</th>
                    </thead>
                    <tbody>
                    {
                        rproduct.length > 0 ?
                            rproduct.map((row) => {
                                return(
                                <tr>
                                    <td>{row.ProductID}</td>
                                    <td>{row.Comments}</td>
                                    <td>{row.RatingStars}</td>
                                    
                                    <td><Link to={{ pathname: '/Review',search:'?id='+ row.ProductID }}>Edit</Link> - <Link to={{ pathname: '/delete',search:'?id='+ row.ProductID }}>Delete</Link></td>
                                </tr>
                                )
                            }):
                        
                            <tr>
                                <td><h3>No Reviewed Product</h3> </td>
                            </tr>
                }
                </tbody>
            </table>
        </div>
    )
}
export default Dashboard;