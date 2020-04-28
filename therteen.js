for ==> Simple form to iterate
while  => its first check condition and apply logic
do while => logic must run one and than check condition
for of => new way of for loop
for in => user for objects
Map
filter


///For//
for(i=0;i<10;i++){
    console.log(i)
}

var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

/////While///
var i = 0;
while(i<10){
    console.log(i)
    i++
}

var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"]
var i = 0;
while(i<city.length){
    console.log(city[i])
    i++
}

////Do While////
var i = 0;
do{
    console.log(i)
    i++
}
while(i<10)

var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"]
var i = 0;
do{
    console.log(city[i])
    i++
}
while(i<city.length)


//////for of//////
var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"]
for(cities of city){
    console.log(cities)
}