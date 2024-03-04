let users = [];
function addUser() {
    let userInputdiv = document.getElementById('user-input');
    let user = {
        id: userInputdiv.querySelector('#id').value,
        name: userInputdiv.querySelector('#name').value,
        class: userInputdiv.querySelector('#class').value,
        date: userInputdiv.querySelector('#date').value
    }
    users.push(user);
    displayUser();
    clearUserInput();
}

function displayUser(){
    let table = document.getElementById('user-table');
    table.innerHTML = `<thead>
    <tr>
      <th>ID</th>
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
        <td>${users[i].class}</td>
        <td>${users[i].date}</td>
        <td><button onclick="deleteUser(${i})">Xóa</button> 
        <button onclick="editUser(${i})">Sửa</button></td>
        </tr>`;
    }
    table.innerHTML += `</tbody>`;
    
    // Add class 'table' to the table element
    table.classList.add('table');
}

function deleteUser(index){
    users.splice(index, 1);
    console.log(users);
    displayUser();
}

function editUser(index){
    let popup = document.createElement('div');
    popup.classList.add('popup');
    
    let idLabel = document.createElement('label');
    idLabel.textContent = 'ID:';
    let idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.value = users[index].id;
    
    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'Tên:';
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = users[index].name;
    
    let classLabel = document.createElement('label');
    classLabel.textContent = 'Lớp:';
    let classInput = document.createElement('input');
    classInput.type = 'text';
    classInput.value = users[index].class;
    
    let dateLabel = document.createElement('label');
    dateLabel.textContent = 'Ngày sinh:';
    let dateInput = document.createElement('input');
    dateInput.type = 'text';
    dateInput.value = users[index].date;
    
    let saveButton = document.createElement('button');
    saveButton.textContent = 'Lưu';
    saveButton.addEventListener('click', function() {
        users[index].id = idInput.value;
        users[index].name = nameInput.value;
        users[index].class = classInput.value;
        users[index].date = dateInput.value;
        displayUser();
        document.body.removeChild(popup);
    });
    
    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Hủy';
    cancelButton.addEventListener('click', function() {
        document.body.removeChild(popup);
    });
    
    popup.appendChild(idLabel);
    popup.appendChild(idInput);
    popup.appendChild(nameLabel);
    popup.appendChild(nameInput);
    popup.appendChild(classLabel);
    popup.appendChild(classInput);
    popup.appendChild(dateLabel);
    popup.appendChild(dateInput);
    popup.appendChild(saveButton);
    popup.appendChild(cancelButton);
    
    // Center the popup on the page
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.zIndex = '9999'; // Set a high z-index to make sure the popup overlaps the page
    
    document.body.appendChild(popup);
    table.classList.add('popup');
}

function clearUserInput(){
    let userInputdiv = document.getElementById('user-input');
    userInputdiv.querySelector('#id').value = '';
    userInputdiv.querySelector('#name').value = '';
    userInputdiv.querySelector('#class').value = '';
    userInputdiv.querySelector('#date').value = '';
}