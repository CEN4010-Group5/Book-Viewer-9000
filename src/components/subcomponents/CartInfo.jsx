import axios from "axios";
import React from "react";

function CartInfo(props) {

  return (
      <div class="card cart-card">
          <div class="cart-card-body">
              <div class="row">
                  <div class="col-md-2 cart-card">
                      <img src={props.book.cover} class="cart-card-img" alt="book cover" />
                  </div>
                  <div id="cart-item-center" class="col-md-7">
                      <h3 class="card-title cart-title">{props.book.title}</h3>
                      <h5 id="bookauthor" class="card-title">By {props.book.author}</h5>
                      <div class="cart-card-p">
                          <p>
                              Quantity: <textarea rows="1" cols="1" placeholder={props.cartItem.quantity}></textarea>
                          </p>
                          <p>Cost: ${props.book.price?.$numberDecimal}</p>
                      </div>
                  </div>
                  <div class="col-md-3">
                      <button id="cart-button" type="submit" class="btn btn-danger" 
                        onClick={() => deleteBook(props.cartItem, props.userID)}>Delete
                      </button>
                      <div>
                          <button id="cart-button" class="btn btn-primary">Save for later</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

function deleteBook(cart, ID) {
    axios.delete("http://localhost:5000/users/cart/delete", {data: {
        cartId:cart._id,
        userID:ID
    }})
    .then((response) => console.log(response))
    .catch((error) => console.log(error))

}
export default CartInfo;

