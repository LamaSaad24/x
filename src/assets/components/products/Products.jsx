import React,{useEffect, useState} from 'react'

export default function Products() {

    let [products,setProducts] = useState([]);

    // const getProducts = async ()=>{
    //     let response = await fetch("https://fakestoreapi.com/products");
    //     let data = await response.json();
    //     // console.log(data);
    //     setProducts(data);
    // }
    const getProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json());
            setProducts(data);
    }
    useEffect( ()=>{
        getProducts();
    }, [])

  return (
    <div className='row'>
     p

    </div>
  )
}
