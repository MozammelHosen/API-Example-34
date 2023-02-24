const mealDataLoad = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=fish";
  fetch(url)
    .then((res) => res.json())
    .then((data) => mealDataLoadDisplay(data.meals));
};

const mealDataLoadDisplay = (data) => {
  //   console.log(data);
  const mealDb = document.getElementById("mealDb");
  data.forEach((item) => {
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("meal")
    div.innerHTML = `
    <h2>${item.strMeal}</h2>
    <video src=${item.strSource}></video>
    `;
    mealDb.appendChild(div);
  });
};
mealDataLoad();
