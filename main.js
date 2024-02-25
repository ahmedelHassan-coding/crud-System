// 
 var productNameInput=document.getElementById('productName');
 var productPriceIpnut=document.getElementById('productPrice');
 var productCaterogryIpnut=document.getElementById('productcateogry');
 var productDescIpnut=document.getElementById('desc');
  
 var productContainer;
 if(localStorage.getItem("products")==null){
    productContainer=[];
    
 }
 else{
    productContainer=JSON.parse(localStorage.getItem("products"))
    displayProduct( productContainer);

  }

 function addProduct()          //how to taks values from input
 {

 var products={
productName: productNameInput.value,
productPrice:productPriceIpnut.value,
Cateogry:productCaterogryIpnut.value,
desc:productDescIpnut.value,

 }
 
 productContainer.push(products);
 localStorage.setItem("products", JSON.stringify(productContainer));
//  console.log(productContainer);
 displayProduct( productContainer);


 }


 function displayProduct(productlist){// show us how to display products

var cartoona=``;

for(var i=0;i<productlist.length;i++)
{
cartoona+=`<tr>
<td>${i}</td>
<td>${productlist[i].productName}</td>
<td>${productlist[i].productPrice}</td>
<td>${productlist[i].Cateogry}</td>
<td>${productlist[i].desc}</td>
<td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
<td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete </button></td>
</tr>`

}

document.getElementById("tablerow").innerHTML=cartoona;

 }

function deleteProduct(index){
 productContainer.splice(index,1) //delete function
 localStorage.setItem("products", JSON.stringify(productContainer));

 displayProduct( productContainer);

 
}

 

  function searchProduct(term)
  {
   var  searchProduct=[];
      for(var i=0;i< productContainer.length;i++)
      {
         if (productContainer[i].productName.includes(term)==true )
         {
            searchProduct.push(productContainer[i]);

         }


      }
   displayProduct(   searchProduct );
   //   console.log(searchProduct);
}
   


 function updateProduct(index)
 {
   productNameInput.value=productContainer[index].productName;
   productPriceIpnut.value=productContainer[index].productPrice;
   productCaterogryIpnut.value=productContainer[index].Cateogry;
   
   productDescIpnut.value=productContainer[index].desc;

 deleteProduct(index);
 }