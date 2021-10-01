const username=localStorage["username"];
document.getElementById("cart-heading").innerHTML="Dear "+username.toLocaleUpperCase()+"! Here's the summary of your bill...";
const storedItems=JSON.parse(localStorage["items"]);
var sum=0;
storedItems.forEach(function(element) {
    const ul=document.getElementById("items-bought");
    var list=document.createElement("li");
    list.innerHTML="Item "+element.name+" costing Rs "+element.price;
    ul.append(list);
    sum=sum+parseFloat(element.price);
});
document.getElementById("bill-summary").innerHTML="Your bill is Rs."+sum;
document.getElementById("logout").onclick=function(){
    localStorage.clear();
    location.href="login.html";
}