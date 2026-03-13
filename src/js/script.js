var Database = {
	keyName: "Mutant Database",
	data: []
};

function loadDataSource() {

	var localData = localStorage.getItem(Database.keyName);


	if(localData){
		var parsedData = JSON.parse(localData);
		Database.data = parsedData;
		displayData(Database.data);
	}
	else{

	
		fetch("api.json")
		.then(function(response){
			return response.json();
		})
		.then(function(data){

			Database.data = data;

			localStorage.setItem(Database.keyName, JSON.stringify(data));

			displayData(Database.data);
		});

	}
}

function displayData(dataArray) {
console.log(dataArray.response);

var root = dataArray.response;

	root.forEach(function(value, index){
		var html = 
		 `<div class ="card shadow-lg">
          <img src="${value.image}">
          <div class="card-body">
            <h5 class="card-title text-center mb-3">${value.name}</h5>
            <p class="card-text text-center text-muted">${value.realName}</p>
            <h6 class="fw-bold">Powers</h6>
            <ul class="list-unstyled">
              <li>${value.powers}</li>
            </ul>
            <h6 class="fw-bold">Affiliations</h6>
            <ul class="list-unstyled">
              <li>${value.affiliations}</li>
            </ul>
            <h6 class="fw-bold">Index</h6>
            <ul class="list-inline">
              <li class="list-inline-item badge bg-primary">${index}</li>
            </ul>
          </div>
		  </div>`;

	document.querySelector(".col").innerHTML += html;
	});

};

loadDataSource();