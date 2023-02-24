const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = user =>{
const gerder = document.getElementById("section")
gerder.innerHTML = user.results[0].gender
}

loadUser();
