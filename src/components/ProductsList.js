import React from 'react';
import {connect} from 'react-redux';
import * as Action from './../store/ActionCreator';
import StarBox from './StarBox';


function ProductsList({products,addToCart,history}){
  //console.log(history);
  return(
    <div className="container">
      <ul className="products-list">
        {
          products.map(item=>
          <li key={item.id} className="products-item">
            <img src={item.url} 
                 alt={`${item.manufacture} ${item.model}`}
                 onClick={()=> history.push(`/products/${item.id}`)}
                 />
            {item.comments ? <StarBox rating={item.comments.reduce((acc,c)=>{
              return acc + parseInt(c.rating) / item.comments.length},0)}/> : <StarBox/> }
            <h4>{item.manufacture}</h4>
            <p>{item.model}</p>
            <p><b>${item.price}</b></p>
            <button className="btn" onClick={()=>addToCart(item)}>Add to cart</button>
          </li>
          )
        }
      </ul>
    </div>
  )
}

const mapStateToProps=(state)=>{
  //console.log(state);
  return state;
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addToCart: item => dispatch(Action.addToCart(item)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);