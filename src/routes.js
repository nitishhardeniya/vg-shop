import React from 'react';
import Products from './components/shop/Products';
import Fashion from './components/shop/Fashion';
import Electronics from './components/shop/Electronics';
import Tshirts from './components/shop/Tshirts';
import Headphones from './components/shop/Headphones';
import Default from './components/shop/Default';

const nodes = {
      products : {
          title : "Products",
          component : <Products />,
          child : {
              fashion : {
                  title : "Fashion",
                  component : <Fashion />,
                  child : {
                      tshirts : {
                          title : "Tshirts",
                          component : <Tshirts />,
                          child : null
                      },
                      jeans : {
                          title : "Jeans",
                          component : <Default />,
                          child : null
                      }
                  }
              },
              electronics : {
                  title : "Electronics",
                  component : <Electronics />,
                  child : {
                      headphones : {
                          title : "Headphones",
                          component : <Headphones />,
                          child : null
                      },
                      speakers : {
                          title : "Speakers",
                          component : <Default />,
                          child : null
                      }
                  }
              }
          }
      }
};

export default nodes;