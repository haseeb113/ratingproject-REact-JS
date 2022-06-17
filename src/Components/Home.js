import '../Components/style.css';
import { ForProduct, countReviews } from '../Models/ProductFetch';
import { useState, useEffect } from 'react';
const Home = () => {
    // const [SearchParams] = useSearchParams();
    const [product, setproduct] = useState([]);
    const [count, setcount] = useState('');
    useEffect(() => {
        ForProduct(setproduct);
        
        for (let index = 0; index <= product.length; index++) {
            // var element = product[index];

            countReviews(product[index], function (result) {
                setcount(result);

                 console.log(count);
                // console.log(product.length);
            });
        }

        // countReviews(1,function(result){
        //     setcount(result);
        //     // console.log(product.length);
        // });
    }, [])
    return (
        <>
            <div className='slider'>
                <h2>Product Gallery</h2>
            </div>
            <div>
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
                                    {/* <input type="text" onChange={(e) => { setcount(e.target.value) }} value={count} readOnly /> */}
                                </div>
                            )
                        }) :
                        <h3>No Product Found </h3>
                }
            </div>


        </>
    )
}
export default Home;