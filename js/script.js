var WelPage = document.getElementById("WelcomePage");
var Menu = document.getElementById("Menu");

function goToMenu() {
    WelPage.style.display = "none";
    Menu.style.display = "block";
}

function HideBackBtn() {
    var back = document.getElementById("BackBtn");
    var search = document.getElementById("SearchBlck");
    var mainPage = document.getElementById("ContCaTBox");
    var inputSearch = document.getElementById("InputSearch");

    if (back.style.display === "none") {
        back.style.display = "flex";
        search.style.display = "none";
        inputSearch.placeholder ="Enter the ingredients...";
        
        
        
    } else {
        back.style.display = "none";
        search.style.display = "flex";
        inputSearch.value ="";
        ContCaTBox.style.display = "flex";
        rand2.style.display = "block"
    rand3.style.display = "block" 
        TitRes.innerHTML =`Category plates`; 
        DishGrid.style.display = "none";  
    }
}



var theBill =  document.getElementById("theBill");
theBill.style.display = "none";

function BillCount() {

    
    ComingWaiter.style.display = "none"; 
    if(theBill.style.display === "none") {
        theBill.style.display = "flex";
        OrderBill.style.display = "block"; 
    } else {
        theBill.style.display = "none";
    }
}






var billValue =  document.getElementById("Bill");
var orderlist = document.getElementById("Order");
var numDish = document.getElementById("numDish");
var bill = 0;
var order= "";
var numD = 0;

function AddToOrder(nameDish,price){
    order += `
        <div class="single-order" >
            <div class="bullet">></div>
            <div class="dish-name"> ${nameDish}</div>
            <div class="dish-price">€ ${price},00</div>
        </div>
        <hr>
        `;
        numD++;
    bill += price;
    console.log(numD);
    numDish.innerHTML = numD;
    numDish.style.display = "block";
    orderlist.innerHTML = order;
    billValue.innerHTML = "<span>Total:</span> € " + bill + ",00";
}



var orderSend = document.getElementById("orderSend");


function HideBill(){
theBill.style.display = "none";
}

function submitOrder(){
    OrderBill.style.display = "none";
    orderSend.style.display = "flex";
}












var searchBtn = document.getElementById("SearchBtn"); 
var dishList = document.getElementById("DishGrid");
var TitRes = document.getElementById("TitRes");
var ingreRes = document.getElementById("InputSearch").value;
var ContCaTBox = document.getElementById("ContCaTBox");

var rand2 = document.getElementById("rand2");
var rand3 = document.getElementById("rand3");








/*----------     Mostra tutti i piatti della categoria        ----------------*/




function ShowDishbyCategory (cat) {
    ContCaTBox.style.display = "none";
    rand2.style.display = "none";
    rand3.style.display = "none";

    DishGrid.style.display = "flex";
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`) 
   .then(response => response.json())
   .then(data => {
       console.log(data); 
       var addCode = "";
       var price = 4;
       if(data.meals){
        data.meals.forEach(meal =>{
            price ++;
                addCode += `
                    
                    <div class="dish-card" dish-id="${meal.idMeal}">
                        <div class="dish-img">
                            <img src="${meal.strMealThumb}" alt="">
                        </div>
                        <div class="dish-tit-cont">
                            <div class="dish-tit">${meal.strMeal}</div>
                        </div>
                        <div class="dish-price-cont">
                            <div class="dish-price">€ ${price},00</div>
                        </div>
                        <div class="dish-cat-cont" style="display: none;">
                            <div class="dish-cat">Pasta</div>
                        </div>
                        <div class="add-btn-cont">
                            <button type="submit" class="icon-single add-btn" onclick="AddToOrder('${meal.strMeal}',${price})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.9" height="13.899" viewBox="0 0 13.9 13.899">
                                    <g id="Raggruppa_306" data-name="Raggruppa 306" transform="translate(6.95 2.418) rotate(45)">
                                    <g id="Raggruppa_300" data-name="Raggruppa 300" transform="translate(-0.296 -0.296)">
                                        <g id="Raggruppa_299" data-name="Raggruppa 299" transform="translate(0 0)">
                                        <line id="Linea_6" data-name="Linea 6" y1="7" x2="7" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                                        <line id="Linea_7" data-name="Linea 7" x2="7" y2="7" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                                        </g>
                                    </g>
                                    </g>
                                </svg>                                                          
                            </button>   
                        </div>
                    </div>
                `;
            }); 

            dishList.innerHTML = addCode;
            TitRes.innerHTML =`All dishes of "${cat}" category`;
            HideBackBtn();
        }


    });
    
}


/*----------     Mostra tutte le Categorie        ----------------*/

var bgColor = [ 'linear-gradient(48deg, rgb(145 126 125 / 59%) 0%, rgb(233 21 28 / 98%) 100%)',
                'linear-gradient(58deg, rgba(217,158,143,1) 0%, rgba(130,61,20,1) 100%)',
                'linear-gradient(58deg, rgba(217,158,143,1) 0%, rgba(155,98,201,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(143,202,217,1) 0%, rgba(49,77,186,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(143,217,147,1) 0%, rgba(186,190,32,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(217,143,173,1) 0%, rgba(32,43,190,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(185,143,217,1) 0%, rgba(32,190,178,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(217,143,143,1) 0%, rgba(190,180,32,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(143,217,158,1) 0%, rgba(32,186,190,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(186,143,217,1) 0%, rgba(210,59,59,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(143,217,168,1) 0%, rgba(59,95,210,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(143,149,217,1) 0%, rgba(210,59,113,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(217,207,143,1) 0%, rgba(59,184,210,0.8939950980392157) 100%)',
                'linear-gradient(58deg, rgba(217,143,210,1) 0%, rgba(213,118,22,0.8939950980392157) 100%)'];
var indBg = 0;


fetch("https://www.themealdb.com/api/json/v1/1/categories.php") 
.then(response => response.json())
.then(data => {
    var addCode = "";
    var price = 4;
    data.categories.forEach(category =>{
             addCode += `
                        <button type="submit" onclick="ShowDishbyCategory('${category.strCategory}')">    
                            <div class="cat-box" cat-id="${category.idCategory}" style="background:${bgColor[indBg]}">
                                <img  class="img-cat" src="${category.strCategoryThumb}" />
                                <div class="tit-cat-box">
                                ${category.strCategory}
                                </div>
                                
                            </div>
                        </button>    
                 
                `;
                indBg++;
         }); 

         ContCaTBox.innerHTML = addCode;
   

 });




/*-------    Card Ricerca by Ingredients    -----------*/



searchBtn.addEventListener('click', researchDish);

function researchDish(){
    ContCaTBox.style.display = "none"; 
    rand2.style.display = "none";
    rand3.style.display = "none";
    DishGrid.style.display = "flex";
    var ingreRes = document.getElementById("InputSearch").value; 
   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingreRes}`) 
   .then(response => response.json())
   .then(data => {
       console.log(data); 
       var addCode = "";
       var price = 4;
       if(data.meals){
        data.meals.forEach(meal =>{
            price ++;
                addCode += `
                    
                    <div class="dish-card" dish-id="${meal.idMeal}">
                        <div class="dish-img">
                            <img src="${meal.strMealThumb}" alt="">
                        </div>
                        <div class="dish-tit-cont">
                            <div class="dish-tit">${meal.strMeal}</div>
                        </div>
                        <div class="dish-price-cont">
                            <div class="dish-price">€ ${price},00</div>
                        </div>
                        <div class="dish-cat-cont">
                            <div class="dish-cat">Pasta</div>
                        </div>
                        <div class="add-btn-cont">
                            <button type="submit" class="icon-single add-btn" onclick="AddToOrder('${meal.strMeal}',${price})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.9" height="13.899" viewBox="0 0 13.9 13.899">
                                    <g id="Raggruppa_306" data-name="Raggruppa 306" transform="translate(6.95 2.418) rotate(45)">
                                    <g id="Raggruppa_300" data-name="Raggruppa 300" transform="translate(-0.296 -0.296)">
                                        <g id="Raggruppa_299" data-name="Raggruppa 299" transform="translate(0 0)">
                                        <line id="Linea_6" data-name="Linea 6" y1="7" x2="7" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                                        <line id="Linea_7" data-name="Linea 7" x2="7" y2="7" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                                        </g>
                                    </g>
                                    </g>
                                </svg>                                                          
                            </button>   
                        </div>
                    </div>
                `;
            }); 

            dishList.innerHTML = addCode;
            TitRes.innerHTML =`All dishes with "${ingreRes}"`;
        } else {
            TitRes.innerHTML =`No dishes with "${ingreRes}". Please search other ingredients.`;

        }


    });


} 



/*-------  N  Piatti Random  nel contenitore indicato   -----------*/

function RandomDish(contenit,num) {
    while ( num > 0 ) {
        var addCode = "";
        var price = 2;
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`) 
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            
            
            if(data.meals){
            data.meals.forEach(meal =>{
                price ++;
              
                    addCode += `
                        
                        <div class="dish-card" dish-id="${meal.idMeal}">
                            <div class="dish-img">
                                <img src="${meal.strMealThumb}" alt="">
                            </div>
                            <div class="dish-tit-cont">
                                <div class="dish-tit">${meal.strMeal}</div>
                            </div>
                            <div class="dish-price-cont">
                                <div class="dish-price">€ ${price},00</div>
                            </div>
                            <div class="dish-cat-cont" style="display: none;">
                                <div class="dish-cat">Pasta</div>
                            </div>
                            <div class="add-btn-cont">
                                <button type="submit" class="icon-single add-btn" onclick="AddToOrder('${meal.strMeal}',${price})">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.9" height="13.899" viewBox="0 0 13.9 13.899">
                                        <g id="Raggruppa_306" data-name="Raggruppa 306" transform="translate(6.95 2.418) rotate(45)">
                                        <g id="Raggruppa_300" data-name="Raggruppa 300" transform="translate(-0.296 -0.296)">
                                            <g id="Raggruppa_299" data-name="Raggruppa 299" transform="translate(0 0)">
                                            <line id="Linea_6" data-name="Linea 6" y1="7" x2="7" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                                            <line id="Linea_7" data-name="Linea 7" x2="7" y2="7" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                        </g>
                                    </svg>                                                          
                                </button>   
                            </div>
                        </div>
                    `;
                }); 
    
                contenit.innerHTML = addCode;
                
            }
    
    
        });
        --num;
    }

}



var TradDish = document.getElementById("TradDish");
var DayDish = document.getElementById("DayDish");

RandomDish(TradDish,3);

RandomDish(DayDish,2);


ComingWaiter

/*-------    Slider Initializer    -----------*/

var ComingWaiter = document.getElementById("ComingWaiter");


function callWaiter() {
    BillCount();
    OrderBill.style.display = "none"; 
    orderSend.style.display = "none"; 
    ComingWaiter.style.display = "flex"; 

}


function backMenu() {
    theBill.style.display = "none";
}