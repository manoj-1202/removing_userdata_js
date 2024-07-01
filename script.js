// heading 
let heading = document.createElement("h1");
heading.innerHTML = "JavaScript";
document.body.appendChild(heading);

//style
heading.style.display = "flex";
heading.style.justifyContent = "center";


//creating outside container
let container = document.createElement("div");  //for creating a html in javascript style
container.id="container";                       // giving a name to created id
document.body.appendChild(container);           // for displaying in html body

//stylig
container.style.border="2px solid blue "
container.style.padding="10px"
container.style.display="flex"
container.style.flexWrap="wrap"
container.style.justifyContent="center"
container.style.marginTop="5%"


//  All datas
const data=[

    {name:"AAA", id:132, Email:"123@gamil.com"},
    {name:"BBB", id:243, Email:"134@gamil.com"},
    {name:"CCC", id:354, Email:"145@gamil.com"},
    {name:"DDD", id:465, Email:"156@gamil.com"},
    {name:"EEE", id:576, Email:"167@gamil.com"},
    {name:"FFF", id:687, Email:"178@gamil.com"},
    {name:"GGG", id:798, Email:"189@gamil.com"},
    

]
// map method is used

data.map(index=>{
    const card=document.createElement("div")
    card.id="card"
    container.appendChild(card);

 //style
    card.style.border="2px solid orange"
    card.style.padding="20px"
    card.style.width="150px"
    card.style.display="flex"
    card.style.flexWrap="wrap"
    card.style.flexDirection="column"
    card.style.margin="20px"
    card.style.alignItems="center"
   

// Adding content inside box

    const name=document.createElement("h1")
    name.innerHTML=index.name
    card.appendChild(name)

    const id=document.createElement("h2")
    id.innerHTML=index.id
    card.appendChild(id)

    const Email=document.createElement("h2")
    Email.innerHTML=index.Email
    card.appendChild(Email)

// creating a delete button

   const del = document.createElement("button")
   card.appendChild(del);    //for visibile in body 

//style
   del.style.padding="10px"
   del.style.borderBlockColor="red"
   del.style.fontWeight="bold"
   del.innerHTML="Remove"   //adding a name to button



// event listener for delete button function

   del.addEventListener("click", removeCard)

   function removeCard(){

   container.removeChild(card)  //what we want to delete

   }
})





