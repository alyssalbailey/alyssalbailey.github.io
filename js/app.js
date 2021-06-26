
const urlAPI = `https://teamtreehouse.com/alyssalbailey.json`;
const achievementContainer = document.querySelector(".achievement-container");


// Fetch data from the API 
fetch(urlAPI)
    .then(res => res.json())
    .then(res => console.log(res.badges))
    .catch(err => console.log(err))

function displayAchievements(achievementBadge) {
    achievements = achievementBadge;
    let badgeHTML = ""; // store the achievement badges HTML

    // loop through each achievement badge and create HTML markup
    achievements.forEach((achievement, index) => {
        let name = achievement.name;
        let date = achievement.earned_date;
        let iconUrl = achievement.icon_url;
        let id = achievement.id;
        let classUrl = achievement.url;
               
        

    badgeHTML += `
            <div class="card mb-3 style="max-width: 500px;" data-index="${index}">
                <div class="row g-0">
                    <div class"col-md-4 order-1 bg-light">
                        <img src="${iconUrl}"class="img-fluid rounded-start achievement-icon" alt="Achievement icon"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${classUrl}</p>
                            <p class="card-text"><small class="text-muted">${date}</small></p>
                        </div>
                    </div>
                </div>
            </div>    
        `
});
achievementContainer.innerHTML = badgeHTML;
};
