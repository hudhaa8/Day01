//Step1: Create an XHR object

// request that  name should be used same in whole program


var request=new XMLHttpRequest();

// step 2 : Create an connection
// true :optional 

request.open('GET','https://restcountries.com/v3.1/all',true)

//step 3 : send a request

// push for the api to send request to server

request.send()

//step 4: once the data successfully received from server
// http :200

request.onload=function() {    //onload is event, to event exectute fn is needed

// conversion from string to array of JSON object

var data=JSON.parse(request.response);
console.log(data);

console.log(data[0].region);
for(var i=0;i<data.length;i++)
{
console.log(data[i].name,data[i].region)
}
}