import React from 'react';
import axios from 'axios';
import Card from './Components/Card';
import Header from './Components/Header';
import Drawer from './Components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
      axios.get('https://63a5c3a2318b23efa79cfd42.mockapi.io/items').then((res) => {
        setItems(res.data);
      });
      axios.get('https://63a5c3a2318b23efa79cfd42.mockapi.io/Cart').then((res) => {
        setCartItems(res.data);
      });
  }, []);
  
  const onAddToCart = (obj) => {
    axios.post('https://63a5c3a2318b23efa79cfd42.mockapi.io/Cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63a5c3a2318b23efa79cfd42.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id != id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear"> 

      {cartOpened && <Drawer 
                        items={cartItems} 
                        onClose={()=> setCartOpened(false)} 
                        onRemove={onRemoveItem}
                      />}

      <Header onClickCart={()=> setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue 
                ? `Search in target: ${searchValue}`
                : 'All Sneakers'
          }</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img 
                              onClick={()=> setSearchValue('')}
                              className="clear cu-p" 
                              src="/img/btn-remove.svg" 
                              alt="Clear"
                            />
            }
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>
        
        <div className="d-flex flex-wrap">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imegeUrl}
              onFavorite={() => console.log('add to Favorite')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
