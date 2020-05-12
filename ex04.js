var car = {
    name : "sonata",
    ph : "500ph",
    start : function(){
        console.log("Engine is Starting");
    },
    end : function(){
        console.log("Engine is End");
    },
    car_info : function(){
        console.log(car.name + ", " + car.ph);
    }
}

console.log(car.name);
console.log(car.ph);
console.log(car.start());
console.log(car.end());
console.log(car.car_info());