var popUp = document.getElementById("pop-up");

function descMov(i){
	var container = document.getElementById("container"); 
	var description = new XMLHttpRequest();
	description.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var myObj = JSON.parse(this.responseText);
			container.innerHTML = "<h2>" + myObj.movies[i].name + "</h2>";
			container.innerHTML += "<ul>";
			container.innerHTML += "<li><span>Director:</span> "  + "<span>"+ myObj.movies[i].Director + "</span> </li><br>";
			container.innerHTML += "<li><span>Genre:</span> " + "<span>" + myObj.movies[i].Genre +"</span> </li><br>";
			container.innerHTML += "<li><span>Year:</span> " + "<span>" + myObj.movies[i].year +"</span> </li><br>";
			container.innerHTML += "</ul>";
			container.innerHTML +=  myObj.movies[i].description +"<br>";
			popUp.style.display = "flex"; 
		}
	};
	description.open("get","https://api.jsonbin.io/b/5c21bb2f8c05c52ebacdeeec/2","true");
	description.send();
}
function descAni(i){
	var container = document.getElementById("container"); 
	var description = new XMLHttpRequest();
	description.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var myObj = JSON.parse(this.responseText);
			container.innerHTML = "<h2>" + myObj.animes[i].name + "</h2>";
			container.innerHTML += "<ul>";
			container.innerHTML += "<li><span>Director:</span> "  + "<span>"+ myObj.animes[i].Director + "</span> </li><br>";
			container.innerHTML += "<li><span>Genre:</span> " + "<span>" + myObj.animes[i].Genre +"</span> </li><br>";
			container.innerHTML += "<li><span>Year:</span> " + "<span>" + myObj.animes[i].year +"</span> </li><br>";
			container.innerHTML += "</ul>";
			container.innerHTML +=  myObj.animes[i].description +"<br>";
			popUp.style.display = "flex"; 
		}
	};
	description.open("get","https://api.jsonbin.io/b/5c21bb2f8c05c52ebacdeeec/2","true");
	description.send();
}

function closeDesc(){
	popUp.style.display = "none";
}



function borderMov(number){
	var i;
	for(i = 0; i < 9; i++){
		document.getElementById("mov-img-" + i).style.border = "0px";
		document.getElementById("mov-img-" + i).style.width  = "100px";
		document.getElementById("mov-img-" + i).style.borderRadius  = "0px";	
	}
	document.getElementById("mov-img-" + number).style.width  = "92px";
	document.getElementById("mov-img-" + number).style.border = "4px solid #fff";
	document.getElementById("mov-img-" + number).style.borderRadius  = "4px";
}
				
function borderAni(number){
	var i;
	for(i = 0; i < 9; i++){
		document.getElementById("ani-img-" + i).style.border = "0px";
		document.getElementById("ani-img-" + i).style.width  = "100px";
		document.getElementById("ani-img-" + i).style.borderRadius  = "0px";
	}
	document.getElementById("ani-img-" + number).style.width  = "92px";
	document.getElementById("ani-img-" + number).style.border = "4px solid #fff";
	document.getElementById("ani-img-" + number).style.borderRadius  = "4px";
}

function movSlide(number){
	document.getElementById("mov-container").style.left = number * -900 + "px";
}

function aniSlide(number){
	document.getElementById("ani-container").style.left = number * -900 + "px";
}
function display(par){
	index.style.display = "none";
	anime.style.display = "none";
	movie.style.display = "none";
	about_us.style.display = "none";
	par.style.display = "block";
}

var anime = new XMLHttpRequest();
anime.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		var animeNames = JSON.parse(this.responseText);
		for(i in animeNames.animes){
			document.getElementById("ani-container").innerHTML += "<p id = \"anititle\">" + animeNames.animes[i].name + "</p>";
			document.getElementById("ani-container").innerHTML += '<img onclick = "descAni(' + i + ')" class = "ani-img" src =' + animeNames.animes[i].image + " >" ;			
		}
	} 	
	
};
anime.open("GET", "https://api.jsonbin.io/b/5c21bb2f8c05c52ebacdeeec/1", true);
anime.send();


var movie = new XMLHttpRequest();
movie.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		var movieNames = JSON.parse(this.responseText);
		for(i in movieNames.movies){
			document.getElementById("mov-container").innerHTML += "<p id = \"movtitle\">" + movieNames.movies[i].name + "</p>";
			document.getElementById("mov-container").innerHTML += '<img onclick = "descMov('+ i + ')"class = "mov-img" src =' + movieNames.movies[i].image + " >" ;			
		}
	} 
		
	
};
movie.open("GET", "https://api.jsonbin.io/b/5c21bb2f8c05c52ebacdeeec/1", true);
movie.send();


function movFunction(n){
	movSlide(n);
	borderMov(n);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
	
 		 if (this.readyState == 4 && this.status == 200) {
		    var myObj = JSON.parse(this.responseText);
		 	document.getElementById("movtitle").innerHTML = myObj.movies[n].name;
		}
	};
	xmlhttp.open("GET", "https://api.jsonbin.io/b/5c21bb2f8c05c52ebacdeeec", true);
	xmlhttp.send();
}

function aniFunction(n){
	aniSlide(n);
	borderAni(n);
	var xmlhtt = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
	
 		if (this.readyState == 4 && this.status == 200) {
		    var myObj = JSON.parse(this.responseText);
		    document.getElementById("anititle").innerHTML = myObj.animes[n].name;
		}
	};
	xmlhtt.open("GET", "https://api.jsonbin.io/b/5c21bb2f8c05c52ebacdeeec", true);
	xmlhtt.send();
}

var anime = document.getElementById("anime");
var movie = document.getElementById("movie");
var index = document.getElementById("index");
var about_us = document.getElementById("about_us");


document.getElementById("but_index").addEventListener("click", function(){display(index)});
document.getElementById("but_anime").addEventListener("click", function(){display(anime)});
document.getElementById("but_movie").addEventListener("click", function(){display(movie)});
document.getElementById("but_about_us").addEventListener("click", function(){display(about_us)});



