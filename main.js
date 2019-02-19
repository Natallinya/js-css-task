
function handler1() {
   var ProductElem=this.parentNode.parentNode;
   var CheckboxElem=ProductElem.querySelectorAll('.b-product__input')[0];

   if(ProductElem.classList.contains('product-selected-hover'))
   {
     ProductElem.classList.remove('product-selected-hover');
       flag=false;
   }

    if (!ProductElem.classList.contains('product-selected')&&!ProductElem.classList.contains('product-dis'))
    {
      ProductElem.classList.add('product-selected');
       var LabelItemList = document.querySelectorAll('.b-product');
    for (var i = 0; i < LabelItemList.length; i++) {
        LabelItemList[i].addEventListener("mouseover", handler2);      
   };
   flag=false; 
    }
    else
      {
      ProductElem.classList.remove('product-selected');
    }
  };

  function handler2() {
    if (flag)
   {var ProductElem=this.parentNode.parentNode;
   var CheckboxElem=ProductElem.querySelectorAll('.b-product__input')[0];

    if (ProductElem.classList.contains('product-selected'))
    {
        ProductElem.classList.add('product-selected-hover');
    }  }
    flag=true;
     };
     function handler3() {
   var ProductElem=this.parentNode.parentNode;
   var CheckboxElem=ProductElem.querySelectorAll('.b-product__input')[0];

    if (ProductElem.classList.contains('product-selected-hover'))
    {
        ProductElem.classList.remove('product-selected-hover');
    }  

     };
var flag;
window.onload = function () {
  var elem=document.querySelectorAll('.product-dis');
      for (var i = 0; i < elem.length; i++) {
        elem[i].querySelectorAll('.b-product__input')[0].disabled=true;
  };

    //получаем идентификатор элемента
    var LabelItemList = document.querySelectorAll('.b-product');
    for (var i = 0; i < LabelItemList.length; i++) {
        LabelItemList[i].addEventListener("click", handler1); 
        LabelItemList[i].addEventListener("mouseleave", handler3); 
  };

  var PurchaseItemList = document.querySelectorAll('.b-purchase--color');
    for (var i = 0; i < PurchaseItemList.length; i++) {
        PurchaseItemList[i].addEventListener("click", handler1); 
  };
}
