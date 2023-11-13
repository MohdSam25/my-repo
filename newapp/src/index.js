import React from "react";
import Product from "./tutories/product";
import { useFetch } from './tutories/custom fetch'


const url = 'https://course-api.com/react-prop-types-example://coursehttps://course-api.com/react-prop-types-example-api.netlify.app/api/react-prop-types-example'; 
const Index = ()=> {
    const { products } = useFetch(url);
    return (
        <div>
            <h2>Products</h2>
            <section>
                {products.map((product)=> {
                    return <Product key={product.id} {...product}/>; 
                })}
            </section>
        </div>

    );
};

export default Index ;

