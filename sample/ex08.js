//#work2 반복문을 통해서 소나타라는 자동차가 배열에 존재하면 '소나타가 배열에 존재합니다' 라는 구문을 출력 (for / if)
var car = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting" + ph);
	},
	stop : function () {
		console.log("engine is stoped");
	}
}
var car2 = {
	name : "bmw",
	ph : "500ph",
	start : function () {
		console.log("engine is starting" + ph);
	},
	stop : function () {
		console.log("engine is stoped");
	}
}
var car3 = {
	name : "ford",
	ph : "500ph",
	start : function () {
		console.log("engine is starting" + ph);
	},
	stop : function () {
		console.log("engine is stoped");
	}
}
var car4 = {
	name : "fait",
	ph : "500ph",
	start : function () {
		console.log("engine is starting" + ph);
	},
	stop : function () {
		console.log("engine is stoped");
	}
}
var car5 = {
	name : "rx",
	ph : "500ph",
	start : function () {
		console.log("engine is starting" + ph);
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var cars = [car2, car3, car4, car5, car];

for(i=0;i<cars.length;i++){
    if(cars[i].name == "sonata"){
        console.log("소나타가 배열에 존재합니다.");
        return;
    }
    else{
        console.log("소나타가 배열에 존재하지 않습니다.");
    }
}
