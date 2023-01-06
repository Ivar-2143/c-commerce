import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { ProductWrapper } from '../components/globalStyles';
import { Link, useLocation, useParams } from 'react-router-dom';

function Category() {
    const [products, setProducts] = useState([]);
    let params = useParams();
    let location = useLocation();

    const getProducts = (category) =>{
        fetch(`http://localhost:8000/products?category=${category}`)
            .then(res => {
                return res.json();
            }) 
            .then(data =>{
                console.log(data);
                setProducts(data);
            })
    }

    useEffect(()=>{
        console.log(location.pathname);
        getProducts(params.type);
    },[params]);


    return (
    <div>
        <ProductWrapper>
            {products && products.map((product)=>{
                return(
                    <ProductCard 
                        key={product.id}
                        name={product.name} 
                        image={product.image} 
                        price={product.price}
                        unit={product.unit}
                        category={product.category}
                        id={product.id}
                        
                    />
                )
            })}
        </ProductWrapper>
    </div>
  )
}

export default Category;