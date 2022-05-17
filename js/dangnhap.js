function validate1(){
	var uu = document.getElementById("username1").value;
	var pu1 = document.getElementById("password1").value;

	if(uu == ""){
		alert("Vui lòng nhập tên!");
		return false;
	}
	if(pu1 == ""){
		alert("Vui lòng nhập mật khẩu!");
		return false;
	}
		var name = localStorage.getItem("name_db")
		var pass = localStorage.getItem("pass_db")
        if(((uu = "abc")&&(pu1 = "123")) || ((uu == name)&&(pu1 == pass))){
        alert("Bạn đã đăng nhập thành công") 
        location.replace("file:///C:/Users/min/Desktop/blog-20220214T015519Z-001/blog/shop/trangchu.html")
       
    } 
    
   

	else 
		alert("Bạn hãy đăng nhập lại!");
	return false;
}
function formValidate(){
    var regExp = /admin/;
    var tk = document.getElementById("username1").value;
    var mk = document.getElementById("password1").value;
    if (regExp.test(tk) && (regExp.test(mk))) {
        alert("Chúng tối phát hiện bảng đang đang nhập bằng tài khoản admin của VN_GO")
        location.replace("file:///C:/Users/min/Desktop/blog-20220214T015519Z-001/blog/shop/web.html")
        return false
    }
     
}