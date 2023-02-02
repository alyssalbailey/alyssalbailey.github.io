
let badges = [];
const urlAPI = `https://teamtreehouse.com/alyssalbailey.json`;
const achievementContainer = document.querySelector(".achievement-container");


// Fetch data from the API
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.badges)
    .then(displayBadges)
    .catch(err => console.log(err));

function displayBadges(achievementBadge) {
    badges = achievementBadge.reverse();

    let badgeHTML = ''; // store the achievement badges HTML

    // loop through each achievement badge and create HTML markup
    badges.forEach(badge => {
        let id = badge.id;
        let name = badge.name;
        let classUrl = badge.url;
        let iconUrl = badge.icon_url;
        let courses = badge.courses;
        let date = new Date(badge.earned_date);

        //parse out the date + format the month and year
        let formattedDate = new Intl.DateTimeFormat(navigator.language, {month: 'long', year: 'numeric'}).format(date);
        
    badgeHTML += `
            <div class="col-md-6 col-xxl-4">
                <div class="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 h-lg-500 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <h6 class="mb-3 text-truncate" style="max-width: 225px;">${name}</h6>
                        <div class="tooltip">
                            <h6 class="mb-3 text-truncate" style="max-width: 250px;"">${name}</h6>
                        </div>
                        <div class="checkmark-text">
                            <img src="images/checkmark.svg" class="checkmark" alt="checkmark" height="28" width="28">
                            <div class="d-flex flex-column">
                                <p class="text-muted fw-bold m-0">Achieved</p>
                                <p class="mb-1 text-muted">${formattedDate}</p> 
                            </div>
                        </div>  
                        
                    </div>
                    <div class="col-auto d-none d-lg-block bg-light p-4">
                        <img width="78" height="85" src="${iconUrl}" alt="Treehouse Badge Icon">
                    </div>
                </div>
            </div> 
        `
});

achievementContainer.innerHTML = badgeHTML;

}

// Using to analze the information to sort JSON data
fetch(urlAPI)
    .then(res => res.json())
    .then(res => console.log(res.badges))
    .then(displayBadges)
    .catch(err => console.log(err));