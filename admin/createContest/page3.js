document.getElementById('uploadExcel').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx, .xls';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
                displayExcelData(jsonData);
            };
            reader.readAsArrayBuffer(file);
        }
    };
    input.click();
});

function displayExcelData(data) {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; // Clear existing questions

    data.forEach((row, index) => {
        if (index === 0) return; // Skip header row

        const questionForm = document.createElement('div');
        questionForm.classList.add('question-form');
        questionForm.innerHTML = `
            <div class="form-group">
                <label for="questionText">Câu hỏi</label>
                <input type="text" class="form-control" id="questionText" value="${row[0]}" readonly>
            </div>
            <div class="form-group">
                <label for="answerA">Đáp án A</label>
                <input type="text" class="form-control" id="answerA" value="${row[1]}" readonly>
            </div>
            <div class="form-group">
                <label for="answerB">Đáp án B</label>
                <input type="text" class="form-control" id="answerB" value="${row[2]}" readonly>
            </div>
            <div class="form-group">
                <label for="answerC">Đáp án C</label>
                <input type="text" class="form-control" id="answerC" value="${row[3]}" readonly>
            </div>
            <div class="form-group">
                <label for="answerD">Đáp án D</label>
                <input type="text" class="form-control" id="answerD" value="${row[4]}" readonly>
            </div>
            <div class="form-group">
                <label for="correctAnswer">Đáp án đúng</label>
                <select class="form-control" id="correctAnswer" disabled>
                    <option>${row[5]}</option>
                </select>
            </div>
            <button class="btn btn-danger removeQuestionBtn">Xóa câu hỏi</button>
        `;

        questionForm.querySelector('.removeQuestionBtn').addEventListener('click', function() {
            questionsContainer.removeChild(questionForm);
        });

        questionsContainer.appendChild(questionForm);
    });
}

document.getElementById('addQuestionBtn').addEventListener('click', function() {
    const questionsContainer = document.getElementById('questionsContainer');
    const questionForm = document.createElement('div');
    questionForm.innerHTML = `
        <div class="form-group">
            <label for="questionText">Câu hỏi</label>
            <input type="text" class="form-control" id="questionText" placeholder="Nhập câu hỏi">
        </div>
        <div class="form-group">
            <label for="answerA">Đáp án A</label>
            <input type="text" class="form-control" id="answerA" placeholder="Nhập đáp án A">
        </div>
        <div class="form-group">
            <label for="answerB">Đáp án B</label>
            <input type="text" class="form-control" id="answerB" placeholder="Nhập đáp án B">
        </div>
        <div class="form-group">
            <label for="answerC">Đáp án C</label>
            <input type="text" class="form-control" id="answerC" placeholder="Nhập đáp án C">
        </div>
        <div class="form-group">
            <label for="answerD">Đáp án D</label>
            <input type="text" class="form-control" id="answerD" placeholder="Nhập đáp án D">
        </div>
        <div class="form-group">
            <label for="correctAnswer">Đáp án đúng</label>
            <select class="form-control" id="correctAnswer">
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
            </select>
        </div>
        <button class="btn btn-danger removeQuestionBtn">Xóa câu hỏi</button>
    `;
    questionForm.querySelector('.removeQuestionBtn').addEventListener('click', function() {
        questionsContainer.removeChild(questionForm);
    });
    questionsContainer.appendChild(questionForm);
});

document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const examName = document.getElementById('examName').value;
    const examDescription = document.getElementById('examDescription').value;
    const examType = document.getElementById('examType').value;

    if (examName && examDescription && examType) {
        alert('Thông tin kỳ thi đã được tạo/chỉnh sửa thành công!');
        // Ở đây bạn có thể thêm logic để gửi dữ liệu lên server nếu cần
    } else {
        alert('Vui lòng điền đầy đủ thông tin kỳ thi.');
    }
});
