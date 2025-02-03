// DisplayShow.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../action/action'; 

function DisplayShow() {
  const dispatch = useDispatch();
  const { store, error } = useSelector((state) => state.userData);  

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(store);  
  
  return (
    <div>
      <h1>Redux Saga</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>} 
      <ul>
        {store.length > 0 ? (
          store.map((product) => (
            <li key={product.id}>{product.title}</li>  
          ))
        ) : (
          <p>No products available.</p>  
        )}
      </ul>
    </div>
  );
}

export default DisplayShow;
