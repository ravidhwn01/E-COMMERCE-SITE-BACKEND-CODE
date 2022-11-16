import React, { useEffect } from "react";
// css file
// Path: frontend\src\components\product\ProductDetails.css
import "../product/ProductDetails.css";
//import carousel
import Carousel from "react-material-ui-carousel";
//import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";
import {getProductDetails} from "../../actions/productAction"
function ProductDetails(match) {
    const dispatch = useDispatch();
    // useEffect
    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch, match.params.id]);
    // useSelector
    const { loading, error, product } = useSelector((state) => state.productDetails);
  

  return (
    <>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.images &&
              product.images.map((item , i) => (
                <img
                className = "CarouselImage"
                  key={item.public_id}
                    src={item.url}
                    alt={product.title}
                    height="500"
                    width="500"
                />
                ))}

          </Carousel>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
