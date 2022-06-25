import { Link } from 'react-router-dom'
import { ForProduct } from '../Models/ProductFetch';
import { useState, useEffect } from 'react';
import Loading from './Loading';
const Gallery = () => {
    const [product, setproduct] = useState([]);
    useEffect(() => {
        ForProduct(setproduct);
    }, [])
    return (
        <>
            <div className='slider'>
                <h2>Product Gallery</h2>
            </div>
            <div >
                {
                    product.length > 0 ?
                        product.map((row, key) => {
                            return (
                                <div className='Homebody'>
                                    <img src={window.URL + row.ProductImage} width="375" height="275" alt="" />
                                    {/* <h5>{row.ProductID}</h5> */}
                                    <h4>Product Name: {row.ProductName}</h4>
                                    <h4>Product Category:{row.ProductCategory}</h4>
                                    <h3>Product Price: Rs.{row.Price}</h3>
                                    <h4> Description: {row.Details}</h4>
                                    <Link className='linkcss' to={{ pathname: '/Review', search: '?id=' + row.ProductID }}>Give Reviews</Link><br />
                                    {/* <Link to="/">Back to Home Page</Link> */}
                                </div>
                            )
                        }) :
                        <Loading/>
                }
            </div>


        </>
    )
}
export default Gallery;