const title = document.querySelector(".title");
const ingridient = document.querySelector(".ingridient");
const description = document.querySelector(".description");
const calories = document.querySelector(".calories");

const previewTitle = document.querySelector(".previewTitle");
const previewDescription = document.querySelector(".previewDescription");
const previewCalories = document.querySelector(".previewCalories");
const previewIngridients = document.querySelector(".previewIngridients");


const btnGetPicture = document.querySelector(".getPhoto")
const btnAddIngridient = document.querySelector(".addIngridient")
const btn = document.querySelector('.getRecipe')


btnGetPicture.onclick = () => {
    function randomImage () {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(data => {
                imageLink = data.meals[0].strMealThumb
                image.src = imageLink
            })
    }
    randomImage()
}

const allIngridients = [];

btnAddIngridient.onclick = () => {
    allIngridients.push(ingridient.value)
    ingridient.value = ""
}

btn.onclick = () => {
    const meal = {
            title: title.value,
            description: description.value,
            calories: calories.value
        }
        if (meal.title === "" || allIngridients.length < 3 || meal.description === "" || meal.calories <= 0) {
            alert("Fill missing fields. There must be at least 3 ingridients, title, description and more than 0 calories");
        }
        previewTitle.innerHTML = meal.title
        previewDescription.innerHTML = meal.description
        previewCalories.innerHTML = meal.calories + 'calories'
        previewIngridients.innerHTML = allIngridients
}

