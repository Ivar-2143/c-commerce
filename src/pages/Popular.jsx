import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { ProductWrapper } from '../components/globalStyles';

function Popular() {
    const [popular, setPopular] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8000/products?_sort=sold&_order=desc')
            .then(res => {
                return res.json();
            })
            .then(data =>{
                console.log(data);
                setPopular(data);
            }) 
    },[]);

    return (
    <div>
        <ProductWrapper>
            {popular && popular.map((product)=>{
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

export default Popular;