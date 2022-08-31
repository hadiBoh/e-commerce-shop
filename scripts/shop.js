// open and close each item in sidebar

document.addEventListener("click", e =>{

    const isClickedDropdown = e.target.matches("[data-dropdown-link]")
    if (!isClickedDropdown && e.target.closest("[data-dropdown]") != null) {
        //if the parent of clicked item is the dropdown parent so do nothing
        //first condition remove link itself from being child of dropdwon so when click, it will do sth benith
        return
    }

    let currentdropDwon
    if (isClickedDropdown){
        currentdropDwon = e.target.closest("[data-dropdown]")
        currentdropDwon.classList.toggle("active")
    }
    document.querySelectorAll("[data-dropdown]").forEach(dropdwon =>{
        if (currentdropDwon !== dropdwon) {
            dropdwon.classList.remove("active")
        }
    })
})




//put checkmart in sidebar
let checkmarks = Array.from(document.querySelectorAll(".item input"))
checkmarks.forEach(checkmark=>{
    checkmark.classList.add("checkmark")
})

//open and close (slide from bootom) sidebar in none desktop devices
document.addEventListener("click",(e)=>{
    isBottomSideBarBtnClicked = e.target.matches("[sidebar-slide-from-botton-btn]")

    if (!isBottomSideBarBtnClicked && e.target.closest("[sidebar-slide-from-botton]") == null) {
        document.querySelector("[sidebar-slide-from-botton]").classList.remove("active")
    }

    if(isBottomSideBarBtnClicked){
        document.querySelector("[sidebar-slide-from-botton]").classList.add("active")
    }
})








/* document.addEventListener("click", e =>{

    
    function close(){
        document.querySelectorAll("[data-dropdown-content]").forEach(dropdwon =>{
            dropdwon.classList.remove("active")
        })
    }

    const isClickedDropdown = e.target.matches("[ data-dropdown-link]")
    if (!isClickedDropdown && e.target.closest("[ data-dropdown]") == null) {
        close()
        return
    }

    currentdropDwon = e.target.closest("[data-dropdown]")


    if (isClickedDropdown){
        currentdropDwon.childNodes[3].classList.add("active")
    }
   
    document.querySelectorAll("[data-dropdown-content]").forEach(dropdwon =>{
        if (currentdropDwon != null && currentdropDwon.childNodes[3] === dropdwon) {
            return
        }else{
            dropdwon.classList.remove("active")
        }
    })
})

document.addEventListener("click" , e =>{

    function clear(){
        document.querySelectorAll("[data-dropdown-link]").forEach(item=>{
            item.setAttribute("data-dropdown-link","")
        }) 
    }

    isMatchAttr = e.target.matches("[data-dropdown-link]")



    if (isMatchAttr && e.target.getAttribute("data-dropdown-link") === "clicked") {
        clear()

    }else if (isMatchAttr && e.target.getAttribute("data-dropdown-link") === "") {
        clear()
        e.target.setAttribute("data-dropdown-link","clicked")
    }

    if (e.target.closest("[data-dropdown]") == null ) {
        clear()
    } 

    //close drop content if attr is clicked
    document.querySelectorAll("[data-dropdown-content]").forEach(dropdwon =>{
        if (dropdwon.parentNode.childNodes[1].getAttribute("data-dropdown-link") === "") {
            dropdwon.classList.remove("active")
        }
    })
}) */
































function Student(name,age){
    this.name =name
    this.age = age
}

function Logger(func){
    console.log(`name : ${func.name}`);
    console.log(`age : ${func.age}`);
}

var stu1 = new Student("hadi",28)
var stu2 = new Student("tagi",50)

Logger(stu1)
Logger(stu2)

    console.log("__________________boundary______________________________________________");

function Student2(name,age){
    this.name = name
    this.age = age
}

Student2.prototype.SayName = function(){
    console.log(`name : ${this.name}`);
    console.log(`age : ${this.age}`);
}

var secondstu1 = new Student2("milad",24)
var secondstu2 = new Student2("nagi",40)

secondstu1.SayName()
secondstu2.SayName()





const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName};
  }
  
  const Nerd = (name) => {
    const prototype = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return Object.assign(prototype, {doSomethingNerdy});
  }
  
  const jeff = Nerd('jeff');
  
  jeff.sayName(); //my name is jeff
  jeff.doSomethingNerdy(); // nerd stuff