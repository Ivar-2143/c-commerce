
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ProductWrapper } from '../components/globalStyles';
import ProductCard from '../components/ProductCard';


    function Searched() {
        const params = useParams();
        const [results, setResults] = useState([]);
        const getSearched = (name) => {
            fetch(`http://localhost:8000/products?q=${name}`)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                throw res;
            }) 
            .then(data =>{
                console.log(data);
                setResults(data);

            })
            .catch(error =>
                {console.log("Error fetching")}
            )

        }

        useEffect(()=>{
            console.log(params.searched);
            getSearched(params.searched);

        },[params.searched])
    
        return (
            <div>
                <ProductWrapper>
                    {results && results.map((item)=>{
                        return(
                            <ProductCard 
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                unit={item.unit}
                                price={item.price}
                            />
                        )
                    })
                    }
                </ProductWrapper>
            </div>
      )
    }
    
    export default Searched;