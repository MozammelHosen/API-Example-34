const mealDataLoad = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => mealDataLoadDisplay(data.meals));
};

const mealDataLoadDisplay = (data) => {
  //   console.log(data);
  const mealDb = document.getElementById("mealDb");
  mealDb.innerText = "";
  data.forEach((item) => {
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("meal");
    div.innerHTML = `
  <div class="card  bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
              <img src=${item.strMealThumb} alt="Shoes" class="rounded-xl h-[200px] w-[400px]" />
          </figure>
          <div class="card-body items-center text-center">
              <h2 class="card-title">${item.strMeal}!</h2>
              <h3 class="card-title">${item.strCategory}!</h3>
              <h3 class="card-title">${item.idMeal}!</h3>
              <label for="mealdbModal" class="btn" onclick="mealdbModal(${item.idMeal})">Details</label>
          </div>
  `;
    mealDb.appendChild(div);
  });
};

// mealdbModal
const mealdbModal = (idMeal) => {
  console.log(idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayModal(data.meals[0]));
  // .catch((err) => console.error(err));
};

//  mealdbModal await mealdbMod
const mealdbModal2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const res = await fetch(url)
  const data = await res.json();
  displayModal(data.meals[0])
};

const displayModal = (idMealModal) => {
  console.log(idMealModal);
  document.getElementById("mealdbmodal1").innerText = idMealModal.strMeal;
  const mealBody = document.getElementById("mealBody");
  mealBody.innerHTML = `
  <img src=${idMealModal.strMealThumb} alt="Shoes" class="rounded-xl h-[200px] w-[400px]" />
  `;
};
//  search fir meakdb

const searchbtn = () => {
  const searchFeild = document.getElementById("searchField").value;
  console.log(searchFeild);

  //  Search for btn
  mealDataLoad(searchFeild);

  searchFeild.value = "";
};
mealDataLoad("fish");
