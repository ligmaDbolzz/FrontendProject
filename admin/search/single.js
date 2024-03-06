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
        this.studentAns = stuAnsidx;
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
      <th>id</th>
      <th>Tên</th>
      <th>Ngày tham dự</th>
      <th>Chi tiết</th>
    </tr>
  </thead>
  <tbody>`; // Clear the table before re-rendering
    for(let i=0; i<users.length; i++){
        table.innerHTML += `<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].date}</td>
        <td><button onclick="detail(${i})">Xem chi tết</button></td>
        </tr>`;
    }
    table.innerHTML += `</tbody>`;
    
    // Add class 'table' to the table element
    table.classList.add('table');
}

searchTest();

// function deleteUser(index){
//     users.splice(index, 1);
//     console.log(users);
//     displayUser();
// }

// function editUser(index){
//     let popup = document.createElement('div');
//     popup.classList.add('popup');
    
//     let idLabel = document.createElement('label');
//     idLabel.textContent = 'id:';
//     let idInput = document.createElement('input');
//     idInput.type = 'text';
//     idInput.value = users[index].id;
    
//     let nameLabel = document.createElement('label');
//     nameLabel.textContent = 'Tên:';
//     let nameInput = document.createElement('input');
//     nameInput.type = 'text';
//     nameInput.value = users[index].name;
    
//     let classLabel = document.createElement('label');
//     classLabel.textContent = 'Lớp:';
//     let classInput = document.createElement('input');
//     classInput.type = 'text';
//     classInput.value = users[index].class;
    
//     let dateLabel = document.createElement('label');
//     dateLabel.textContent = 'Ngày sinh:';
//     let dateInput = document.createElement('input');
//     dateInput.type = 'text';
//     dateInput.value = users[index].date;
    
//     let saveButton = document.createElement('button');
//     saveButton.textContent = 'Lưu';
//     saveButton.addEventListener('click', function() {
//         users[index].id = idInput.value;
//         users[index].name = nameInput.value;
//         users[index].class = classInput.value;
//         users[index].date = dateInput.value;
//         displayUser();
//         document.body.removeChild(popup);
//     });
    
//     let cancelButton = document.createElement('button');
//     cancelButton.textContent = 'Hủy';
//     cancelButton.addEventListener('click', function() {
//         document.body.removeChild(popup);
//     });
    
//     popup.appendChild(idLabel);
//     popup.appendChild(idInput);
//     popup.appendChild(nameLabel);
//     popup.appendChild(nameInput);
//     popup.appendChild(classLabel);
//     popup.appendChild(classInput);
//     popup.appendChild(dateLabel);
//     popup.appendChild(dateInput);
//     popup.appendChild(saveButton);
//     popup.appendChild(cancelButton);
    
//     // Center the popup on the page
//     popup.style.position = 'fixed';
//     popup.style.top = '50%';
//     popup.style.left = '50%';
//     popup.style.transform = 'translate(-50%, -50%)';
//     popup.style.zIndex = '9999'; // Set a high z-index to make sure the popup overlaps the page
    
//     document.body.appendChild(popup);
//     table.classList.add('popup');
// }

// function clearUserInput(){
//     let userInputdiv = document.getElementById('user-input');
//     userInputdiv.querySelector('#id').value = '';
//     userInputdiv.querySelector('#name').value = '';
//     userInputdiv.querySelector('#class').value = '';
//     userInputdiv.querySelector('#date').value = '';
// }

function searchTest(){
    for(let i = 0; i < database4.length; i++ ){
        if(database4[i].studentid.includes(temp.id)){
            for(let j = 0; j < database2.length; j++){
                if(database4[i].testid.includes(database2[j].id)){
                    users.push(database2[j]);
                }
            }
        }
    }
    displayUser();
}

function detail(){
    window.location.href = "detail.html";
}