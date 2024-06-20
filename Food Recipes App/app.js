let searchbtn = document.getElementById("search-btn");
let mealList=document.getElementById("meal");
let mealDetailsContent=document.querySelector(".meal-details");
let reacipeCloseBtn=document.querySelector(".recipes-close-btn");


searchbtn.addEventListener("click",getMeaList);
mealList.addEventListener("click",getRecipe);
// reacipeCloseBtn.addEventListener("click",()=>{
    // mealDetailsContent.parentElement.classList.remove("showRecipe");
//     mealDetailsContent.classList.add("meal-details");
// })

// reacipeCloseBtn.addEventListener('click',()=>{
//     document.getElementById("recipeCloseBtn").classList.remove("showRecipe");
// })

reacipeCloseBtn.addEventListener('click',()=>{
    mealDetailsContent.parentElement.classList.remove("showRecipe");

})




function getMeaList(){
    let searchInputText=document.getElementById("search-input").value.trim();
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+searchInputText)
    .then(response=>response.json())
    .then(data=>{
       let html='';
       if(data.meals){
        data.meals.forEach(meal=>{
            html+=`
            <div class="meal-item" data-id="${meal.idMeal}">

                <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="food">
                </div>

                <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class="recipe-btn">Get Recipe</a>
                </div>

            </div>
            
            `;
        });
        mealList.classList.remove("mealNotFound");


       }
       else{
        html="Sorry,we did not find a Meal!";
        mealList.classList.add("mealNotFound");
       }

       mealList.innerHTML=html;
    })
}

function getRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains("recipe-btn")){
        let mealItem=e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response=>response.json())
        .then(data=>mealRecipeModal(data.meals));
    }
    
}



function mealRecipeModal(meal){
    console.log(meal);
    meal=meal[0];
    let html=`
   
    <div class="recipe-link">
    <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
    </div>
    <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    
    <div class="recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    </div>
    <div class="recipe-meal-img">
        <img src="${meal.strMealThumb}" alt="">
    </div>
    
    `;

    mealDetailsContent.innerHTML=html;
    mealDetailsContent.parentElement.classList.add("showRecipe");

}
 

