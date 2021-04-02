import axios from "axios";
import React from "react";

function SaveLater(props) {

    function deleteBook(book, ID) {
        axios.delete("http://localhost:5000/users/save/delete", {data: {
            bookID:book._id,
            userID:ID
        }})
        .then((response) => {
            console.log(response);
            props.setLoad(false);
        })
        .catch((error) => console.log(error))
    };

    function addCart(book, ID) {
        axios.put("http://localhost:5000/users/cart/add" , {
            userID:ID,
            book:book
        })
        .then((response) => {
            console.log(response)
            props.setLoad(false);
        })
        .catch((error) => console.log(error))
    };

    return (
        <div class="card" style={{width: '2 rem' }}>
            <img class="card-img-top" src={props.book.cover} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{props.book.title}</h5>
                    <p class="card-text">{props.book.author}</p>
                    <div class="row">
                        <button type="submit" class="btn btn-danger" onClick={() => {deleteBook(props.book, props.userID)}}>Delete</button>
                        &nbsp;
                        <button type="submit" class="btn btn-success" onClick={() => {addCart(props.book._id, props.userID)}}>Move to Cart</button>
                    </div>
                </div>
        </div>
    )
}

export default SaveLater;