// To-do: fix instructions and ingredients formatting + CSS

function newMeal() {
    const recipe = document.getElementById("recipe")
    const ingredients = document.getElementById("ingredients")
    const instructions = document.getElementById("instructions")
    const image = document.getElementById("image")

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(function (data) {
            data = data.meals[0]
            ingredients.innerText = ""

            for (let i = 1; i < 21; i++) {
                if (data["strIngredient" + i]) {
                    ingredients.innerText += data["strIngredient" + i] + ": " + data["strMeasure" + i] + "\n"
                }
            }

            recipe.innerText = `Recipe name: ${JSON.stringify(data.strMeal)}`
            instructions.innerHTML = "Instructions: " + JSON.stringify(data.strInstructions)
            image.innerHTML = "<img src=" + data.strMealThumb + ">"
        })
}
