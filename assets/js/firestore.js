
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove }   from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
    databaseURL: "https://miniproject-740e2-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const CartList = ref(database, "Cart")
const addButton = document.getElementById('cartButton');



function addCartItems()
{
    let uid =  window.localStorage.getItem("UserUid")
    let cartItem = {
        Userid: uid,
        name: "Product 1",
        price: 100,
        quantity: 1
    }
    firebase.database().ref('carts/' + uid).push(cartItem)

}

addCartItems();

