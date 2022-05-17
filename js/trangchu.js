
    var name = localStorage.getItem("name_db")
    var pass = localStorage.getItem("pass_db")
    var Gmail = localStorage.getItem("Gmail_db")
    var Sdt    = localStorage.getItem("Sdt_db")
    var Cminh    = localStorage.getItem("Cminh_db")
    var nodung = localStorage.getItem("noidung_db")
    
    document.getElementById("d1").innerHTML="Tên tài khoản:"+name
    document.getElementById("d3").innerHTML="Gmail:"+Gmail
    document.getElementById("d4").innerHTML="số điện thoại:"+Sdt
    document.getElementById("d5").innerHTML="chứng minh thư hoặc thẻ căn cước :"+Cminh
    document.getElementById("d6").innerHTML="nội dung được tài khoản góp ý:"+nodung


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


