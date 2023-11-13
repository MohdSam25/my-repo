import React from "react";
import Product from "./tutories/product";
import { useFetch } from './tutories/custom fetch'


const url = 'https://course-api.netlify.app/api/react-pro-types-example'; 
const Index = ()=> {
    const { products } = useFetch(url);
    return (
        <div>
            <h2>Products</h2>
            <section>
                {products.map((product)=> {
                    return <Product key={product.id} {...product}/> 
                })}
            </section>
        </div>

    );
};

export default Index ;

