
const urlAPI = `https://teamtreehouse.com/alyssalbailey.json`;
const achievementContainer = document.querySelector(".achievement-container");


// Fetch data from the API - from the employee directory project - not finished for this project
fetch(urlAPI)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))

function displayAchievements(achievementBadge) {
    employees = employeeData;
    let badgeHTML = ""; // store the employee HTML as we create it

    /*
        function displayEmployees(employeeData){
            employees = employeeData;
            let employeeHTML = ""; // store the employee HTML as we create it */

    /* loop through each employee and create HTML markup
    employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture; */

    employeeHTML += `
            <div class="card" data-index="${index}">
                <img class="avatar" src="${picture.large}"/>
                <div class="text-container">
                    <h2 class="name">${name.first} ${name.last}</h2>
                    <p class="email">${email}</p>
                    <p class="address">${city}</p>
                </div>
            </div>
        `
};
achievementContainer.innerHTML = badgeHTML;
;


