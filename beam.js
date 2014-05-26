Date.prototype.addHours = function(h) {    
   this.setTime(this.getTime() + (h*60*60*1000)); 
   return this;   
}

Date.prototype.format = function(format) //author: meizz
{
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
  }

  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length==1 ? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}
function calculate() {
	var passT = document.getElementById("pass-t").value;
	var passC = document.getElementById("pass-c").value;
	var weightA = parseInt(document.getElementById("weight-a").value);
	var weightB = parseInt(document.getElementById("weight-b").value);
	var weightAdded = weightA + weightB
	var activeBlender = document.getElementById("activeBlender").value;
	if (activeBlender == 'A'){
		var weightLeftInCurrentPass = weightB
	}
	else{
		var weightLeftInCurrentPass = weightA
	}
	var rate = document.getElementById("rate").value;
	var result = document.getElementById("results");
	var boxesNeeded = document.getElementById("boxesNeeded");
	var boxWeight  = document.getElementById("boxes").value;
	var results = (passT -1); 
	var passesLeft = passT -1 - passC;
	var weightCalculated = (weightAdded * passesLeft) + weightLeftInCurrentPass;
	var hoursToPackout = weightCalculated / rate;
	var date = new Date().addHours(hoursToPackout).toString().replace(/:\d\d GMT-.*/,"");
	result.innerHTML = date
	boxesNeeded.innerHTML = (Math.ceil(weightAdded / boxWeight))
	document.getElementById("slide-pt").innerHTML = passT; 
	document.getElementById("slide-pc").innerHTML = passC; 
	document.getElementById("slide-wb").innerHTML = weightB;
	document.getElementById("slide-wa").innerHTML = weightA;
	document.getElementById("slide-rate").innerHTML = rate; 
	document.getElementById("slide-bw").innerHTML = boxWeight; 
}

document.ontouchmove = function(event){
	    event.preventDefault();
}
