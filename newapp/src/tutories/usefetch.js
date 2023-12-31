import React from "react";
import { useFetch } from "./custom fetch";

const url =  'http://course-api.netlify.app/api/javascript-store-products' ;
const Example = () =>{
    const { loading, products }= useFetch(url);
    console.log(products);
    return (
        <div>
            <h2>{loading ? 'loading...' : 'data'}</h2>
        </div>
    );
};
export default Example;