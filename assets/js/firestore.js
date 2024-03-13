
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove }   from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
    databaseURL: "https://miniproject-740e2-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const CartList = ref(database, "Cart")
const addButton = document.getElementById('cartButton');



onValue(CartList, function(snapshot){ // runs everytime theres is an edit
    
    if(snapshot.exists())
    {
        let cartListArray = Object.entries(snapshot.val()) // return array of arrays 
        clearMovieList()

        for(let i =0;i< cartListArray.length;i++)
        {
        let currentcartItem = cartListArray[i]
        let currentcartItemId = currentcartItem[0]
        let currentcartItemName = currentcartItem[1]

        addMovieItems(currentcartItem)
        }
    }
    else{
        movies.innerHTML = "cart is currently Empty"
    }

})

function addMovieItems(item)
{
    let itemId = item[0]
    let itemName = item[1]
    // movies.innerHTML +=`<li>${moviename}</li>`
    let newEl = document.createElement("li")

    newEl.textContent = itemName
    movies.append(newEl)

    newEl.addEventListener('dblclick',function(){
        let exactMovieName = ref(database,`Watch List/${itemId}`)
        remove(exactMovieName)
    })
    
}

function clearMovieList()
{
    movies.innerHTML=""
}

addButton.addEventListener('click',function(){

    const inputVal = inputF.value
    if(inputVal == "")
    {

    }
    else
    {
        push(MovieList, inputVal)
        clearInputField()
        console.log( `${inputVal} added to DataBase`);
    }


})
