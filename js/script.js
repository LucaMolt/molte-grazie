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
        ContCaTBox.style.display = "block"; 
        TitRes.innerHTML =`Category plates`; 
        DishGrid.style.display = "none";  
    }
}



var theBill =  document.getElementById("theBill");
theBill.style.display = "none";

function BillCount() {
    if(theBill.style.display === "none") {
        theBill.style.display = "flex";
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
















var searchBtn = document.getElementById("SearchBtn"); 
var dishList = document.getElementById("DishGrid");
var TitRes = document.getElementById("TitRes");
var ingreRes = document.getElementById("InputSearch").value;
var ContCaTBox = document.getElementById("ContCaTBox");









/*----------     Mostra tutte le Categorie        ----------------*/




function ShowDishbyCategory (cat) {
    ContCaTBox.style.display = "none";
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



fetch("https://www.themealdb.com/api/json/v1/1/categories.php") 
.then(response => response.json())
.then(data => {
    var addCode = "";
    var price = 4;
    data.categories.forEach(category =>{
             addCode += `
                        <button type="submit" onclick="ShowDishbyCategory('${category.strCategory}')">    
                            <div class="cat-box" cat-id="${category.idCategory}">
                                <img  class="img-cat" src="${category.strCategoryThumb}" />
                                <div class="tit-cat-box">
                                ${category.strCategory}
                                </div>
                                
                            </div>
                        </button>    
                 
                `;
         }); 

         ContCaTBox.innerHTML = addCode;
   

 });


















/*-------    Card Ricerca by Ingredients    -----------*/



searchBtn.addEventListener('click', researchDish);

function researchDish(){
    ContCaTBox.style.display = "none"; 
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