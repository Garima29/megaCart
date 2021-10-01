var products=document.querySelectorAll(".product-list li");
let item = new Array();
for(var i=0; i<products.length; i++){
    products[i].onclick=function(){
        const name=this.childNodes[3].innerHTML;
        const price=this.childNodes[5].innerHTML;
        item.push({"name":name, "price":price});
    }
}
document.getElementById("cart").onclick=function(){
    localStorage['items'] = JSON.stringify(item);
    location.href='buy-item.html';
}
