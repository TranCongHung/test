function changeManufacturer() {
    var v=document.getElementById('select1').value;
    switch(v){
        case '--Select--':
            document.getElementById('nsx').value='';
            document.getElementById('nsx').disabled= true;
        break;    
        case 'TRONG NƯỚC':
            var manu1=document.getElementById('nsx');
                manu1.innerHTML=`
                <option>--Select--</option>
                <option>ĐÀ NẲNG</option>
                <option>HUẾ</option>
                <option>QUẢNG TRỊ</option>
                <option>HÀ NỘI</option>
                <option>THÀNH PHỐ HỒ CHÍ MINH</option>
                <option>HẠ LONG</option>
                <option>HỘI AN</option>
                <option></option>
                `
                manu1.disabled = false
        break;  
        case 'NGOÀI NƯỚC':
            var manu2=document.getElementById('nsx');
                manu2.innerHTML=`
                <option>--Select--</option>
                <option>MĨ</option>
                <option>ANH</option>
                <option>HÀ LAN</option>
                <option>NHẬT BẢN</option>
                <option>HÀN</option>
                <option>ĐỒ BÀO NHA</option>
                <option></option>
                `
                manu2.disabled = false
        break;  
       
    }
}

var bigList=[];
var count=0;
var check2=0
function addproduct() {
    var getname=document.getElementById('name').value;
    var getcategoryname=document.getElementById('nsx').value;
    var getprice=document.getElementById('fm_price').value;
    var getquantity=document.getElementById('fm_quantity').value;
    var getmanu=document.getElementById('select1').value;
    if(getname==''|| getcategoryname==''|| getprice==''|| getquantity==''|| getmanu==''){
        alert('Please fill all forms!!');
        return
    }
    if(isNaN(getprice)||isNaN(getquantity)){
        alert('Price or Quantity must be a number!!')
        return
    }
    if(getcategoryname=='--Select--'){
        alert('Please choose your category name!!')
        return
    }
    if(count==0){
        var node = document.createElement("TH");                                                     
        document.getElementById("headtable").appendChild(node);
        var node1 = document.createElement("TH");                                                     
        document.getElementById("headtable").appendChild(node1);
        count++;
    }
    var smallList={
        listname: getname,
        listcategoryname: getcategoryname,
        listprice: getprice,
        listquantity: getquantity,
        listmanu: getmanu
    }
    if(position==-1){
        add(smallList)
    }
    else{
        bigList[position]=smallList;
        position=-1;
        document.getElementById('btn_register').innerHTML='Add products'
        display()
        //Showdatasaved()
    }
    check2++
}
function display() {
    var m=document.getElementById('bodytable')
    m.innerHTML=''
    for(i=0;i<bigList.length;i++){
        var smallList=bigList[i]
        console.log(smallList)
        m.innerHTML+=`
        <tr>
            <td>${i+1}</td>
            <td>${smallList.listname}</td>
            <td>${smallList.listcategoryname}</td>
            <td>${smallList.listprice}</td>
            <td>${smallList.listquantity}</td>
            <td>${smallList.listmanu}</td>
            <td><div onclick="Edit(${i})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">SỬA </div></td>
            <td><div onclick="Delete(${i})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">XOÁ</div></td>
        </tr>
        `
        localStorage.setItem('soluong',i+1)
        localStorage.setItem('ten'+i,smallList.listname)
        localStorage.setItem('tensanpham'+i,smallList.listcategoryname)
        localStorage.setItem('giasanpham'+i,smallList.listprice)
        localStorage.setItem('soluongsanpham'+i,smallList.listquantity)
        localStorage.setItem('hangsanpham'+i,smallList.listmanu)
    }
}
var countcheck=0   
var countcheck1=0      
function add(smallList) {
    bigList.push(smallList)
    var m=document.getElementById('bodytable')
        m.innerHTML+=`
        <tr>
            <td>${bigList.length}</td>
            <td>${smallList.listname}</td>
            <td>${smallList.listcategoryname}</td>
            <td>${smallList.listprice}</td>
            <td>${smallList.listquantity}</td>
            <td>${smallList.listmanu}</td>
            <td><div onclick="Edit(${bigList.length -1})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Edit</div></td>
            <td><div onclick="Delete(${bigList.length -1})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Delete</div></td>
        </tr>
        `
        if(localStorage.getItem('soluong')<1){
            localStorage.setItem('soluong',bigList.length)
            localStorage.setItem('ten'+(bigList.length-1),smallList.listname)
            localStorage.setItem('tensanpham'+(bigList.length-1),smallList.listcategoryname)
            localStorage.setItem('giasanpham'+(bigList.length-1),smallList.listprice)
            localStorage.setItem('soluongsanpham'+(bigList.length-1),smallList.listquantity)
            localStorage.setItem('hangsanpham'+(bigList.length-1),smallList.listmanu)
            countcheck++
           countcheck1++
            return
        }   
        if(localStorage.getItem('soluong')!=0){
            if(countcheck1!=0){
                var dem=parseInt(localStorage.getItem('soluong'))
                localStorage.setItem('soluong',dem+countcheck)
                localStorage.setItem('ten'+(dem+countcheck-1),smallList.listname)
                localStorage.setItem('tensanpham'+(dem+countcheck-1),smallList.listcategoryname)
                localStorage.setItem('giasanpham'+(dem+countcheck-1),smallList.listprice)
                localStorage.setItem('soluongsanpham'+(dem+countcheck-1),smallList.listquantity)
                localStorage.setItem('hangsanpham'+(dem+countcheck-1),smallList.listmanu)
            }else{
                var dem=parseInt(localStorage.getItem('soluong'))
                localStorage.setItem('soluong',dem+1)
                localStorage.setItem('ten'+(dem),smallList.listname)
                localStorage.setItem('tensanpham'+(dem),smallList.listcategoryname)
                localStorage.setItem('giasanpham'+(dem),smallList.listprice)
                localStorage.setItem('soluongsanpham'+(dem),smallList.listquantity)
                localStorage.setItem('hangsanpham'+(dem),smallList.listmanu)
            }
            return
        }
}

function resetall() {
    document.getElementsByTagName('form')[0].reset()
    document.getElementById('nsx').value='';
    document.getElementById('nsx').disabled=true;
}
var position=-1;
function Edit(index) {
    position=index;
    var smallList= bigList[index];
    console.log(smallList)
    document.getElementById('name').value=smallList.listname;
    document.getElementById('fm_price').value=smallList.listprice;
    document.getElementById('fm_quantity').value=smallList.listquantity;
    document.getElementById('select1').value=smallList.listmanu;
    changeManufacturer()
    document.getElementById('nsx').value=smallList.listcategoryname;
    document.getElementById('btn_register').innerHTML='Update'
}
function Delete(index) {
    var m=document.getElementById('bodytable')
    m.innerHTML=''
    bigList.splice(index,1)
    for(i=0;i<bigList.length;i++){
        localStorage.removeItem('ten'+i)
        localStorage.removeItem('tensanpham'+i)
        localStorage.removeItem('giasanpham'+i)
        localStorage.removeItem('soluongsanpham'+i)
        localStorage.removeItem('hangsanpham'+i)
    }
   
    for(i=0;i<bigList.length;i++){
        var smallList=bigList[i]
        localStorage.setItem('soluong',bigList.length)
        localStorage.setItem('ten'+i,smallList.listname)
        localStorage.setItem('tensanpham'+i,smallList.listcategoryname)
        localStorage.setItem('giasanpham'+i,smallList.listprice)
        localStorage.setItem('soluongsanpham'+i,smallList.listquantity)
        localStorage.setItem('hangsanpham'+i,smallList.listmanu)
        m.innerHTML+=`
        <tr>
            <td>${i+1}</td>
            <td>${smallList.listname}</td>
            <td>${smallList.listcategoryname}</td>
            <td>${smallList.listprice}</td>
            <td>${smallList.listquantity}</td>
            <td>${smallList.listmanu}</td>
            <td><div onclick="Edit(${i})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Edit</div></td>
            <td><div onclick="Delete(${i})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Delete</div></td>
        </tr>
        `
        countcheck--
    }
   
    if(bigList.length==0){
        var list = document.getElementById("headtable");
        list.removeChild(list.childNodes[6]);
        list.removeChild(list.childNodes[6]);
        count=0
    }
}
var check1=0
function Showdatasaved() {
    if(localStorage.getItem('soluong')<1){
        alert('No data saved!!')
        return
    }
    if(count==0){
        var node = document.createElement("TH");                                                     
        document.getElementById("headtable").appendChild(node);
        var node1 = document.createElement("TH");                                                     
        document.getElementById("headtable").appendChild(node1);
        count++;
    }
    if(check1==0){
        if(bigList.length==0){
            for(i=0;i<localStorage.getItem('soluong');i++){
                var smallList={
                    listname: localStorage.getItem('ten'+i),
                    listcategoryname: localStorage.getItem('tensanpham'+i),
                    listprice: localStorage.getItem('giasanpham'+i),
                    listquantity: localStorage.getItem('soluongsanpham'+i),
                    listmanu: localStorage.getItem('hangsanpham'+i)
                }
                bigList.push(smallList)
            }
            for(i=0;i<bigList.length;i++){
                var m=document.getElementById('bodytable')
                m.innerHTML+=`
                <tr>
                    <td>${i+1}</td>
                    <td>${bigList[i].listname}</td>
                    <td>${bigList[i].listcategoryname}</td>
                    <td>${bigList[i].listprice}</td>
                    <td>${bigList[i].listquantity}</td>
                    <td>${bigList[i].listmanu}</td>
                    <td><div onclick="Edit(${i})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Edit</div></td>
                    <td><div onclick="Delete(${i})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Delete</div></td>
                </tr>
                `
            }
        }
        else{
            var x=localStorage.getItem('soluong')-bigList.length
            for(i=0;i<x;i++){
                var smallList={
                    listname: localStorage.getItem('ten'+i),
                    listcategoryname: localStorage.getItem('tensanpham'+i),
                    listprice: localStorage.getItem('giasanpham'+i),
                    listquantity: localStorage.getItem('soluongsanpham'+i),
                    listmanu: localStorage.getItem('hangsanpham'+i)
                }
                bigList.push(smallList)
            }
            for(i=x-1;i<bigList.length;i++){
                var m=document.getElementById('bodytable')
                m.innerHTML+=`
                <tr>
                    <td>${i+1}</td>
                    <td>${bigList[i].listname}</td>
                    <td>${bigList[i].listcategoryname}</td>
                    <td>${bigList[i].listprice}</td>
                    <td>${bigList[i].listquantity}</td>
                    <td>${bigList[i].listmanu}</td>
                    <td><div onclick="Edit(${i})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Edit</div></td>
                    <td><div onclick="Delete(${i})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Delete</div></td>
                </tr>
                `
               
            }
            for(i=0;i<bigList.length;i++){
                localStorage.setItem('soluong',bigList.length)
                localStorage.setItem('ten'+i,bigList[i].listname)
                localStorage.setItem('tensanpham'+i,bigList[i].listcategoryname)
                localStorage.setItem('giasanpham'+i,bigList[i].listprice)
                localStorage.setItem('soluongsanpham'+i,bigList[i].listquantity)
                localStorage.setItem('hangsanpham'+i,bigList[i].listmanu)
            }
        }
        
    }else{
        alert('Already show all data saved!!')
        return
    }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
 // Phương thức Point
 function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  // Phương thức Pie chart
  function PieChart(origin, radius, arrChart) {
    // toạ độ tâm
    this.origin = origin;
    // bán kính
    this.radius = radius;
    // tổng giá trị đưa vào sẽ được gán ở Constructor
    this.sumValue = 0;
    // Mãng giá trị đưa vào
    this.arrChart = arrChart;
    // toạ độ bắt đầu vẽ label
    this.xPosLabel;
    this.yPosLabel;
    // cạnh label
    this.edge = 10;

    // Hàm khởi tạo của phương thức
    this.Constructor = function() {
      var length = this.arrChart.length;

      // Tính tổng giá trị
      for (var i = 0; i < length; i++) {
        this.sumValue += this.arrChart[i].value;
      }

      for (var i = 0; i < length; i++) {
        // Tính phần trăm của mỗi giá trị dựa trên tổng
        this.arrChart[i].percent = this.arrChart[i].value / this.sumValue * 100;
        // Đổi phần trăm sang độ(degree)
        this.arrChart[i].degree = 360 * this.arrChart[i].percent / 100;
        // Đổi độ sang radian
        this.arrChart[i].radian = this.arrChart[i].degree * Math.PI / 180;
      }

      // toạ độ vẽ label cánh hình tròn 20 px
      this.xPosLabel = this.origin.x + this.radius + 20;
      this.yPosLabel = this.origin.y - this.radius + 20;
    };
    this.Constructor();

    this.draw = function(context) {
      var length = this.arrChart.length;
      var beginAngle = 0;
      // bắt đầu vẽ hình tròn ở góc 12 giờ (nếu 0 thì sẽ vẽ ở 3h)
      var endAngle = Math.PI * 1.5;
      var offsetX, offsetY, medianAngle;

      for (var i = 0; i < length; i++) {
        beginAngle = endAngle;
        endAngle = endAngle + this.arrChart[i].radian;

        // bắt đầu vẽ đối tượng pie chart
        context.beginPath();
        // Lùi về tâm điểm sau mỗi lần vẽ
        context.moveTo(this.origin.x, this.origin.y);
        // Vẽ hình tròn thành nhiều miếng khác nhau
        context.arc(this.origin.x, this.origin.y, this.radius, beginAngle,endAngle);
        context.fillStyle = this.arrChart[i].color;
        context.fill();
        // Vẽ label
        context.beginPath();
        context.rect(this.xPosLabel + 10, this.yPosLabel + (i * 20), this.edge, this.edge);
        context.fillStyle = this.arrChart[i].color;
        context.font = '12px Arial';
        var textLabel = this.arrChart[i].title + ' : ' + this.arrChart[i].value;
        context.fillText(textLabel, this.xPosLabel + 25, this.yPosLabel + (i * 20) + 8);
        context.fill();
      }

      context.beginPath();
      context.fillStyle = "black"
      context.fillText('Sum: ' + this.sumValue, this.xPosLabel + 25, this.yPosLabel + (length * 20) + 8);
      context.fill();
    }
  }

  var arrValue = [
    {
      title : 'SỐ TOUR',
      value : 14,
      color : '#1F77B6'
    },
    {
      title : "ĐỊA ĐIỂM TOUR",
      value : 28,
      color : '#AEC6E8'
    },
    {
      title : "TÔNG TIỀN KIẾM ĐƯỢC",
      value : 18,
      color : '#F8BB01'
    },
    {
      title : "SỐ LƯỢNG",
      value : 34,
      color : '#1B602B'
    },
    {
      title : "LOẠI TOUR TRONG VÀ NGOÀI NƯỚC",
      value : 40,
      color : '#CD76B1'
    },
  ];

  var canvasElement = document.getElementById("frame_canvas");
  var ctx = canvasElement.getContext("2d");
  var originPoint = new Point(150, 150);
  var pieChart = new PieChart(originPoint, 120, arrValue);
  pieChart.draw(ctx);

  function validate() {
    var u = document.getElementById("username").value;
    var u1 = document.getElementById("Sdt").value;
    var u2 = document.getElementById("Gmail").value;
    var u3 = document.getElementById("Cminh").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
     
    if(u== "") {
    alert("Vui lòng nhập tên!");
    return false;
    }
    if(u1== "") {
    alert("Vui lòng nhập số điện thoại!");
   
    return false;
    }
    if(u2== "") {
    alert("Vui lòng nhập Gmail!");
    }
    
    if(u3== "") {
    alert("Vui lòng nhập số chứng minh hoặc số căn cước!");
    return false;
    }
    if((p1 == "") || (p1.length < 6)) {
    alert("Vui lòng nhập mật khẩu!");
    return false;
    }
    if(p2 == "") {
    alert("Vui lòng xác minh mật khẩu!");
    return false;
    }
    if((u != "")&& (u1 !="") &&(u2 !="") &&(u3 !="") && (p1 == p2)){
        localStorage.setItem("name_db", u);
        localStorage.setItem("pass_db", p1);
        localStorage.setItem("Sdt_db",u1);
        localStorage.setItem("Gmail_db",u2);
        localStorage.setItem("Cminh_db",u3)
        alert("Bạn đã sửa tài khoản thành công!"); 
        location.replace("file:///D:/My%20Documenst/Desktop/blog/shop/web.html")
       return false;
        
       
        
    }else 
    document.getElementById("thu").innerHTML = "Hãy đăng nhập nhé!";;

    return true;
}	
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("search-table");
    tr = table.getElementsByTagName("tr");

    

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }
    }
}

