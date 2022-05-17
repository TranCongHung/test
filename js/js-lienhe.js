

		function validate() {
		
		var p3 = document.getElementById("noidung").value;
		
		if(p3 == "") {
		alert("Vui lòng nhập nọi dung");
		return false;
		}
       
		if((p3 != "") ){
			
			localStorage.setItem("noidung_db", p3)
			
			alert("cảm ơn bạn đã gọi ý cho VN_GO");location.replace("file:///D:/My%20Documenst/Desktop/js/b%C3%A0i%207/formdn.html")
			return false;
		}else 

		return true;document.getElementById("thu").innerHTML = "Hãy đăng nhập nhé!";
	}	
	