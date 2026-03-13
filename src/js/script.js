var Database = {
	keyName: "Mutant Database",
	data: []
};


function loadDataSource() {


	var localData = localStorage.getItem(Database.keyName);
	var parsedData = JSON.parse( localData);
	Database.data = parsedData;
	displayData( Database.data );
}



function displayData(dataArray) {
console.log(dataArray.response);
var root = dataArray.response;
	root.forEach(function(value, index){
		var html = 
		 `<div class ="card shadow-lg">
          <img>
          <div class="card-body">
            <h5 class="card-title text-center mb-3"></h5>
            <p class="card-text text-center text-muted"></p>
            <h6 class="fw-bold"></h6>
            <ul class="list-unstyled">
              <li></li>
            </ul>
            <h6 class="fw-bold"></h6>
            <ul class="list-unstyled">
              <li></li>
            </ul>
            <h6 class="fw-bold"></h6>
            <ul class="list-inline">
              <li class="list-inline-item badge bg-primary"></li>
            </ul>
          </div>
		  </div>`;

	document.querySelector(".col").innerHTML += html;
	});

};

loadDataSource();