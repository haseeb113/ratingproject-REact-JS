import '../Components/style.css';
import '../Components/spinner.css';
import { ForProduct, showallreview } from '../Models/ProductFetch';
import { useState, useEffect } from 'react';
import NewsTicker from 'react-advanced-news-ticker';
import Loading from './Loading';

const Home = () => {

    const [product, setproduct] = useState([]);
    // const [count, setcount] = useState('');
    const [rproduct, setrproduct] = useState([]);
    const [Isloaded, setisloaded] = useState(false);
    useEffect(() => {
        setisloaded(true);
        showallreview(setrproduct);
        ForProduct(setproduct);
        setisloaded(false);
    }, [])
    const renderproduct = (
        <div>
            {
                product.length > 0 ?
                    product.map((row, key) => {
                        return (
                            <div className='Homebody'>
                                <img src={window.URL + row.ProductImage} width="375" height="275" alt="" />

                                <h4> {row.ProductName}</h4>
                                <h4>Rs.{row.Price}</h4>

                                {/* <h4> <i className="fa fa-star checked" aria-hidden="true"></i></h4> */}


                            </div>
                        )
                    }) :
                    <Loading />
            }

        </div>

    );
    const renderticker = (
               <NewsTicker
        rowHeight = {10}
        maxRows = {28}
        autoStart = {true}
        pauseOnHover = {true}
        >
        <div className='maplist'>

            {
                rproduct.length > 0 ?
                    rproduct.map((row) => {
                        return (
                            <>
                                <div>

                                   <li> {row.RID} - {row.ProductName} <br />
                                    

                                
                                {row.Comments} - Reviewed By:{row.ReviewedBy}</li></div>
                            </>
                        )
                    }) : <Loading />
            }

        </div>
</NewsTicker>
    );
    return (
        <>
            <div className='slider'>
                <h2>Product Display</h2>
            </div>

            {/* {Isloaded ? <Loading /> : renderticker} */}
            {Isloaded ? <Loading /> : renderproduct}

        </>
    )
}
export default Home;