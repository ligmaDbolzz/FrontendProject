let users = [];
const database = [];
const database2 = [];
const database3 = [];
const database4 = [];
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
        this.stuAnsidx = stuAnsidx;
        this.ansidx = ansidx;
        this.reason = reason;
        this.anslist = [];
        this.anslist.concat(anslist);
    }
}

const sta = new Student("1","Nam","A","20-10-2010");
const stb = new Student("2","Nap","B","21-10-2010");
let temp = sta;

database.push(sta);
database.push(stb);

const ques1 = new Question("Câu hỏi số 1: A là B ?",2,3,"3 mới đúng",["Đúng","Sai","Gần đúng","Gần sai"]);
const ques2 = new Question("Câu hỏi số 2: B là A ?",2,2,"2 mới đúng",["Đúng","Sai","Gần đúng","Gần sai"]);

const qlis = [];
qlis.push(ques1);
qlis.push(ques2);

const tet1 = new Test("t1","midterm","06-03-2024");
const tet2 = new Test("t2","midterm2","26-03-2024");
const tet3 = new Test("t3","midterm3","16-01-2024");

database2.push(tet1);
database2.push(tet2);
database2.push(tet3);

const result11 = new Result("t1","1",1,true,qlis);
const result12 = new Result("t1","2",2,true,qlis);
const result21 = new Result("t2","1",3,false,qlis);
const result31 = new Result("t3","1",4,true,qlis);

database4.push(result11);
database4.push(result12);
database4.push(result21);
database4.push(result31);

function displayUser(){
    let table = document.getElementById('user-table');
    table.innerHTML = `<thead>
    <tr>
        <th>Câu hỏi</th>
        <th>Đáp án của sinh viên</th>
        <th>Đáp án đúng</th>
        <th>Lí do</th>
    </tr>
  </thead>
  <tbody>`; // Clear the table before re-rendering
    for(let i=0; i<users.length; i++){
        table.innerHTML += `<tr>
        <td>${users[i].data}</td>
        <td>${users[i].stuAnsidx}</td>
        <td>${users[i].ansidx}</td>
        <td>${users[i].reason}</td>
        </tr>`;
    }
    table.innerHTML += `</tbody>`;
    
    // Add class 'table' to the table element
    table.classList.add('table');
}

searchTest();


function searchTest(){
    for(let i = 0;i < qlis.length; i++){
        users.push(qlis[i]);
    }
    displayUser();
}

function detail(){
    window.location.href = "detail.html";
}