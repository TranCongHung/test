function show() {
    document.getElementById('displayBlock').classList.toggle('active');
    if(!user.classList.toggle('active')){

    }
    else{
        user.classList.toggle('active');

    }
 
}

//thêm Sp vào giỏ hàng 
//lấy giá trị giỏ hàng 
var addToCart = document.getElementsByClassName('add-to-cart');
for(var i = 0; i < addToCart.length; i++){

    var button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
}


function addToCartClicked(event) {
    var button = event.target;
    var ShopItem = button.parentElement.parentElement;
    var TenSP = ShopItem.getElementsByClassName('ten-item-column')[0].innerText
    var Gia = ShopItem.getElementsByClassName('gia')[0].innerText
    var img = ShopItem.getElementsByClassName('image')[0].src
    //console.long('TenSP, Gia,img')
    addToCartl(TenSP,Gia, img);
    remove ();
}
function  addToCartl(TenSP, Gia, img) {
    var cartRow = document.createElement('div');

    cartRow.classList.add('cart-item')
    var cartItems =document.getElementsByClassName('column-cart')[0]
    
    var tenspGiohang = document.getElementsByClassName('TensP-Item');
    //kiểm tra sp có trong giỏ hàng hay chưa 
    for(var i = 0; i <tenspGiohang.length; i++){
        if(tenspGiohang[i].innerText == TenSP){

            var Sl_input = document.getElementsByClassName('soluong-cart')
            for(var i =0; i<Sl_input.length; i++){

                var input = Sl_input[i]
                if(tenspGiohang[i].innerText == TenSP){
                    input = (input.value)++
                    alert("Đã tăng số lượng sản phẩm này lên " + (input+1));
                }
            }
            return
        }
    }
    var noidungItem = `
    <div class ="item-column-cart">
        <div class ="item-img-cart">
            <img class ="image-cart" src="${img}"/>
        </div>
        <div class="ten-item-column-cart">
            <a href="#" class="TensP_Item">${TenSP}</a>
        </div>
        <p class="gia-cart">${Gia}</p>
        <p><b>Số lượng: </b>
        <input type="number" min="1 " value=" 1" class="soluong-cart"></p>

        <div class="clear"></div>
        <button class="btn-remove" type="button">Xóa</button>
    </div>`;
    //dán dư liệu vào giỏ hàng
    cartRow.innerHTML=noidungItem;

    alert("Đã thêm vào giỏ hàng")
    cartItems.append(cartRow);
    //console.long(TenSP. Gia, img);
    capnhatTongtien()
}
function remove() {
    var btn_Removee = document.getElementsByClassName('btn-remove');
    for(var i = 0; i<btn_Removee.length; i++){
        var buttonde = btn_Removee[i];

        buttonde.addEventListener('click',function(){
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove();
            capnhatTongtien()
        });
    }
    
}


//kiểm tra sô lượng có tăng -> cập nhậ lại tổng tiển
function checkChangeSL(event){
    var input = event.target
    if(isNaN(input.value)|| input.value <= 0 ){
        input.value = 1;
    }
    capnhatTongtien()

}
//CẬP NHẬP TỔNG TIỀN
function capnhatTongtien(){
    var giohang = document.getElementsByClassName('column-cart')[0]
    var hang_GioHang = document.getElementsByClassName('cart-item')
    var TongTien = 0;
    for(var i =0; i<hang_GioHang.length;i++){
        var hang = hang_GioHang[i]
        var _Gia = hang.getElementsByClassName('gia-cart')[0]
        var _Soluong = hang.getElementsByClassName('soluong-cart')[0];
        // var gia = parseFloat(_Gia.innerText.replace('đ',''))
        var gia =parseFloat(_Gia.innerText.replace('đ', '').replace('.',''))

        var sl = _Soluong.value //giá trị số lượng 
        TongTien += gia*sl; //Tổng tiền = giá *sl

        //console.log(tongTien);

    }
    //lấy input số lượng ra 
    document.getElementsByClassName('cart-total-price')[0].innerText = TongTien + "đ"
    var Sl_input = document.getElementsByClassName('soluong-cart')
    for( var i = 0; i<Sl_input.length; i++){
        var input = Sl_input[i]
        input.addEventListener('change', checkChangeSL)
    }
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }