var car = {
    name : "sonata",
    ph : "500ph",
    start : function(){
        console.log("Engine is Starting");
    },
    end : function(){
        console.log("Engine is End");
    }
}

console.log(car.name)
console.log(car.ph)
car.start()
car.end()
