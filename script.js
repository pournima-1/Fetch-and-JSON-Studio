// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
     response.json().then( function(json) {  
        json.sort((a, b) => {
            let keyA = a.hoursInSpace + a.firstName + a.lastName + a.active + a.skills + a.picture ;
            let keyB = b.hoursInSpace + b.firstName + b.lastName + b.active + b.skills + b.picture ;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });   
     const count = document.getElementById('count');
     count.innerHTML = "Count of astronauts: " +  json.length;

       var data = "";
         for (i = 0; i < json.length; i++) {
             
           if(json[i].active === true){
              data +=  
                `
                <div class='astronaut'>
                <div>
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li class='colorgreen'>Active: ${json[i].active}</li>
                  <li>Skills: ${json[i].skills}</li>
                </ul>
                </div>
                  <img class='avatar' src= ${json[i].picture}>
                </div>`;
                }
             else
                {
                  data +=  
                   `
                   <div class='astronaut'>
                   <div>
                   <h3>${json[i].firstName} ${json[i].lastName}</h3>
                   <ul>
                   <li>Hours in space: ${json[i].hoursInSpace}</li>
                   <li >Active: ${json[i].active}</li>
                   <li>Skills: ${json[i].skills}</li>
                   </ul>
                   </div>
                    <img class='avatar' src= ${json[i].picture}>
                   </div>`;
              }
            };
          const div = document.getElementById('container');
          div.innerHTML = data;
        });
    });
});