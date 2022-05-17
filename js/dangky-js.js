function validate() {
    var u = document.getElementById("username").value;
    var u1 = document.getElementById("Sdt").value;
    var u2 = document.getElementById("Gmail").value;
    var u3 = document.getElementById("Cminh").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
     
    if(u== "") {
        document.getElementById("h4").innerHTML="Vui long nhập tên tài khoản"
    return false;
    }
  else document.getElementById("h4").innerHTML="đã xác nhận tên đăng nhập"
    if(u1== "") {
        document.getElementById("h2").innerHTML="Vui lòng nhập số điện thoại"
   
    return false;
    }
    if(u2== "") {
        document.getElementById("h1").innerHTML="Vui lòng nhập Gmail"
    }
    
    if(u3== "") {
        document.getElementById("h3").innerHTML="Vui lòng nhập số chứng minh hoặc thẻ can cước "
    return false;
    }
    if((p1 == "") || (p1.length < 6)) {
        alert("Vui lòng nhập đủ 6 ký tự ")
    return false;
    }
    if(p2 == "") {
       alert("Vui lòng nhập lại mật khẩu")
    return false;
    }
    if((u != "")&& (u1 !="") &&(u2 !="") &&(u3 !="") && (p1 == p2)){
        localStorage.setItem("name_db", u);
        localStorage.setItem("pass_db", p1);
        localStorage.setItem("Sdt_db",u1);
        localStorage.setItem("Gmail_db",u2);
        localStorage.setItem("Cminh_db",u3)
        alert("Bạn đã đăng ký tài khoản thành công!"); 
        location.replace("file:///C:/Users/min/Desktop/blog-20220214T015519Z-001/blog/shop/dangnhap.html")
       return false;
        
       
        
    }else 
    document.getElementById("thu").innerHTML = "Hãy đăng nhập nhé!";;

    return true;
}	
function formValidate(){
    var regExp = /@/;
    var email = document.getElementById("Gmail").value;
    if (regExp.test(email)) {
        document.getElementById("h1").innerHTML ="Gmail hợp lệ";
        return false
    }
      else 
      document.getElementById("h1").innerHTML ="Gmail thiếu @";
          return false
}
function formValidate1(){
    var regExp = /^(0[9][0-9]{8})$/;
    var phone = document.getElementById("Sdt").value;
    if (regExp.test(phone)) 
        document.getElementById("h2").innerHTML="Số điện thoại hợp lệ"
      else 
         document.getElementById("h2").innerHTML="Số điện thoại không hợp lệ"
  }
 
  
