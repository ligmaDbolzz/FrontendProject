let email = "";
let user = "";
let pass = "";
let repass = "";
let condition = true;

function signUp(){
    user = document.getElementById("user").value;
    email = document.getElementById("email").value;
    pass  = document.getElementById("pass").value;
    repass = document.getElementById("repass").value;
    // condition = document.getElementById("condition").value;
    // window.alert(email + " " + user + " " + pass + " " + repass);
    if(user.length == 0 || email.length == 0 || pass.length == 0 || repass.length == 0){
        document.getElementById("report").textContent ="Xin vui lòng điền đầy đủ thông tin.";
    }
    else if(lengthCondition(user, "Tên đăng nhập") && lengthCondition(pass,"Mật khẩu")){
        if(!/^[A-Za-z0-9_-]*$/.test(user)){
            document.getElementById("report").textContent ="Tên đăng nhập chỉ được chứa số và chữ cái";
        // }else if(!/^([a-zA-Z0-9]+)$/.test(pass) || !/^([A-Z]+)$/.test(pass) || !/^([0-9]+)$/.test(pass)){
        }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pass)){
            document.getElementById("report").textContent ="Mật khẩu phải có ít nhất 1 số, chữ cái thường, chữ cái in hoa.";
        }else if(pass.localeCompare(repass)!=0){
            document.getElementById("report").textContent ="Mật khẩu xác nhận không trùng khớp.";
        }else if(condition){
            window.location.replace("index.html");
            window.alert("Đăng kí thành công!");
        }else{
            document.getElementById("report").textContent ="Xin vui lòng xác nhận điều khoản và dịch vụ.";
        }
    }
}

function lengthCondition( str1, comment ){
    if(str1 < 8){
        document.getElementById("report").textContent = comment + " phải có độ dài ít nhất 8 kí tự";
        return false;
    }else{
        return true;
    }
}

function isValid(){
    document.getElementById("report").textContent ="Email không hợp lệ";
    return false;
    return true;
}