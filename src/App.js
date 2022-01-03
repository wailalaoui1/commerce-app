import { useState, useEffect } from 'react';
import { AllProducts, Cart, Checkout, Footer, Navbar } from './components';
import { About, Contact, Home, PageNotFound, ProductDetails, Terms } from './components/pages';
import { commerce } from './lib/commerce';
import { Switch, Route } from 'react-router-dom';
import './App.css';

  const App = () => {
    
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ cart, setCart ] = useState({});

    const fetchProducts = async () => {
      const response = await commerce.products.list({limit: 100,});
       setProducts(response.data);
    }
                    
    const fetchByCategory = async () => {
      const { data: products } = await commerce.products.list({limit: 100,});
      const { data: catergoriesData } = await commerce.categories.list({limit: 100,});

      const productsPerCategory = catergoriesData.reduce((acc, category) => {
        return [
          ...acc,
          {
            ...category,
            productsData: products.filter(product => 
              product.categories.find(cat => cat.id === category.id)
            ),
            
          },
        ]
      }, [])

      setCategories(productsPerCategory);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    const handleAddToCart = async (productId, quantity) => {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
    }

    const handleEmptyCart = async () => {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    }

    useEffect( () => {
        fetchProducts();
        fetchByCategory();
        fetchCart();
    }, [])
    

      return (
        <>         
            <Navbar totalItems={cart.total_items} />

            <Switch>
              <Route exact path='/'>
                <Home products={products} totalItems={cart.total_items} onAddToCart={handleAddToCart} /> 
              </Route>

              <Route path='/allproducts'>
                <AllProducts categories={categories} products={products} onAddToCart={handleAddToCart} />
              </Route>

              <Route path='/cart'>
                <Cart cart={cart} onAddToCartQty={handleUpdateCartQty} onRemoveCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
              </Route>

              <Route path='/checkout'>
                <Checkout cart={cart} />
              </Route>

              <Route path='/contact'>
                <Contact />
              </Route>

              <Route path='/about'>
                <About />
              </Route>

              <Route path='/terms-of-service'>
                <Terms />
              </Route>


              <Route path='/productdetails/:id'> 
                <ProductDetails cart={cart} onAddToCartQty={handleUpdateCartQty}  onAddToCart={handleAddToCart} products={products} />
              </Route>

              <Route path='*'> 
                <PageNotFound />
              </Route>
            </Switch>
            
            <Footer products={products} />
              
        </> 
      );   
}


export default App;
 