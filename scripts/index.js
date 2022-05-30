// Add the coffee to local storage with key "coffee"

let menu = document.getElementById("menu")

 
let url = "https://masai-mock-api.herokuapp.com/coffee/menu"

async function catchData(){

    let res = await fetch(url)

    let reqData = await res.json();

    let filtered = reqData.menu.data;
    console.log(filtered)

    localStorage.setItem("data",JSON.stringify(filtered))

    append(filtered)

}


function append(data){
    data.forEach(function(el,i){
        let one = document.createElement("div")
        one.setAttribute("class","coffee")

        let image  =document.createElement('img')
        image.src = el.image

        let title = document.createElement("div")
        title.innerText = el.title

        let price = document.createElement("div")
        price.innerText = el.price

        let button = document.createElement("button")
        button.innerText = "Add to Cart"
        button.setAttribute("id","add_to_bucket")

        button.addEventListener("click",function(){

            addTocart(el,i);
        })

        one.append(image,title,price,button)
        
        menu.append(one)


    })
    



}    
let count = 0;


catchData()

function addTocart(el,i){
let coffeeData  = JSON.parse(localStorage.getItem("data"))
// console.log(data)

    let bucketData = coffeeData.filter(function(e,index){
        if(i == index){
            let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
            coffee.push(el)
            localStorage.setItem("coffee",JSON.stringify(coffee))
        }
        else{
            return i != index
        }

    })

count++;
 
// console.log(count)
let inner = document.getElementById("one")
inner.innerHTML=count

append(coffeeData)
    


} 




