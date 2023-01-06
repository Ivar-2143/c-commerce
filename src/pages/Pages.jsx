import Popular from './Popular';
import { Route, Routes } from 'react-router-dom';
import Category from './Category';


function Pages() {
  return (
    
    <Routes>
      <Route path="/" element={<Popular/>}>
        <Route path="products/:type" element={<Category/>}>
        </Route>
      </Route>
      {/* <Route path=":product_id" /> */}
    </Routes>
    
  )
}

export default Pages;