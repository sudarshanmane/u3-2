// On clicking remove button the item should be removed from DOM as well as localstorage.

let count1 = document.getElementById("total_amount")
let count =0;
console.log(count)
count1.innerHTML=null



let data = JSON.parse(localStorage.getItem("coffee")) 
let menu = document.getElementById("bucket")

function append(data){
    menu.innerHTML = null
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
        button.innerText = "Remove"
        button.setAttribute("id","remove_coffee")

        button.addEventListener("click",function(){

            DeteteFunction(el,i);
        })

        one.append(image,title,price,button)
        
        bucket.append(one)

        // data.forEach(function(el){
        //     count1.innerHTML=null
        //    count = count + ( +(el.price))
        //    count1.innerText = count
           
        //    })
        //    console.log(count)
        


    })

}


append(data)
data.forEach(function(el){
     count1.innerHTML=null
    count = count + ( +(el.price))
    count1.innerText = count
    // window.location.reload()
    
    })
    console.log(count)
    



function DeteteFunction(el,i){
let deleteData  = JSON.parse(localStorage.getItem("coffee"))

// console.log(data)

    let bucketData = deleteData.filter(function(e,index){
        if(i == index){
            let deData = JSON.parse(localStorage.getItem("Trash")) || [];
            deData.push(el)
            localStorage.setItem("Trash",JSON.stringify(deData))
        }
        else{
            return i != index
        }
    })

    localStorage.setItem("coffee",JSON.stringify(bucketData))
    
    

    append(bucketData)
    window.location.reload()

       
       
   
   
}




