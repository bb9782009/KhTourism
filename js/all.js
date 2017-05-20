var select = document.getElementById('khTourism');
var cityClick = document.querySelector('.cityMenu li');
var local = document.querySelector('.cityLocal');

cityClick.addEventListener('click',cityChoice,false);
select.addEventListener('change',selectChoice,false);
cityData("三民區");


function cityChoice(e){
	e.preventDefault();
	var cityName = e.target.textContent
	document.querySelector('.cityName').textContent = cityName;
	cityData(cityName);
}
function selectChoice(e){
	var cityName = e.target.value;
	document.querySelector('.cityName').textContent = cityName;
	cityData(cityName);
}

function cityData(name){
	var xhr = new XMLHttpRequest();
	var data = '';
	str='';
	xhr.onload = function(){
		if(xhr.status === 200)
			data = JSON.parse(xhr.responseText);
			var len =data.result.records.length;
			for(var i=0;i<len;i++){
				if(name == data.result.records[i].Zone)
					str += '<li class="cityStyle"><h3 style="background-image:url('+ data.result.records[i].Picture1 +')">'+ data.result.records[i].Name +'<span>'+ data.result.records[i].Zone +'</span></h3><p><i class="fa fa-clock-o clock" aria-hidden="true"></i>  '+ data.result.records[i].Opentime +'</p><br><p><i class="fa fa-map-marker marker" aria-hidden="true"></i>  '+ data.result.records[i].Add +'</p><br><p><i class="fa fa-mobile phone" aria-hidden="true"></i>  '+ data.result.records[i].Tel +'</p></li>';
					local.innerHTML = str;
			}
	}
	xhr.open('get','http://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);
	xhr.setRequestHeader('Content-type','application/json');
	xhr.send(null);
}