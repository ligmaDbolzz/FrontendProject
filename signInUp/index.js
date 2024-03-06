let user = "";
let pass = "";
let isLogIn = false;

const okAdmin = "admin";
const okEmail = "admin@gmail.com";

const okUser = "user1";
const okEmal = "user@gmail.com";

const okPass = "12345";


function logIn(){
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

    if((user.localeCompare(okAdmin)==0 || user.localeCompare(okEmail)==0)&& pass.localeCompare(okPass)==0){
        isLogIn = true;
        window.location.href = "../admin/dashboard/dashboard.html";
    }else if((user.localeCompare(okUser)==0 || user.localeCompare(okEmal)==0)&& pass.localeCompare(okPass)==0){
        isLogIn = true;
        window.location.href = "/../user/trangchinh/trangchinh.html";
    }else{
        if(user.length==0 || pass.length==0){
            document.getElementById("report").textContent = "Hãy điền đầy đủ thông tin";
        }else{
            document.getElementById("report").textContent = "Tên đăng nhập hoặc mật khẩu không chính xác!";
        }
    }
}


