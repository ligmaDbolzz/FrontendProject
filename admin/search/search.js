let users = [];
const database = [];
class Student {
    constructor(id, name, classes, date){
        this.id = id;
        this.name = name;
        this.classes = classes;
        this.date =date;
    }
}
class Test {
    constructor(id, name, date){
        this.id = id;
        this.name = name;
        this.date = date;
    }
}
class Result{
    constructor(testid, studentid, mark, state, ...qlist){
        this.testid = testid;
        this.studentid = studentid;
        this.mark =mark;
        this.state = state;
        this.qlist = [];
        this.qlist.concat(qlist);
    }
}
class Question{
    constructor(data,stuAnsidx, ansidx, reason,...anslist){
        this.data = data;
        this.studentAns = stuAnsidx;
        this.ansidx = ansidx;
        this.reason = reason;
        this.anslist = [];
        this.anslist.concat(anslist);
    }
}

const sta = new Student("1","Nam","A","20-10-2010");
const stb = new Student("2","Nap","B","21-10-2010");

// users.push(sta);
// users.push(stb);

database.push(sta);
database.push(stb);

function displayUser(){
    let table = document.getElementById('user-table');
    table.innerHTML = `<thead>
    <tr>
      <th>id</th>
      <th>Tên</th>
      <th>Lớp</th>
      <th>Ngày sinh</th>
      <th>Chi tiết</th>
    </tr>
  </thead>
  <tbody>`; // Clear the table before re-rendering
    for(let i=0; i<users.length; i++){
        table.innerHTML += `<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].classes}</td>
        <td>${users[i].date}</td>
        <td><button onclick="detail(${i})">Xem chi tết</button></td>
        </tr>`;
    }
    table.innerHTML += `</tbody>`;
    
    // Add class 'table' to the table element
    table.classList.add('table');
}

function detail(value){
    window.location.href = "single.html";
}

function searchSTD(){
    let ser = document.getElementById("ser").value;
    users = [];
    for(let i = 0; i < database.length; i++ ){
        if(database[i].id.toLowerCase().includes(ser) || database[i].name.toLowerCase().includes(ser)){
            users.push(database[i]);
        }
    }
    displayUser();
}