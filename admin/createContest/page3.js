document.getElementById('uploadExcel').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx, .xls';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            // Giả định rằng bạn đã có một cách để xử lý file Excel trên phía máy chủ
            // và trả về dữ liệu câu hỏi và đáp án dưới dạng JSON
            fetch('/path/to/your/server/endpoint', {
                method: 'POST',
                body: file
            })
            .then(response => response.json())
            .then(data => {
                const tbody = document.getElementById('questionsContainer').querySelector('tbody');
                tbody.innerHTML = ''; // Xóa câu hỏi hiện tại
                data.forEach(question => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${question.stt}</td>
                        <td>${question.question}</td>
                        <td>${question.answers.a}</td>
                        <td>${question.answers.b}</td>
                        <td>${question.answers.c}</td>
                        <td>${question.answers.d}</td>
                        <td>${question.correctAnswer}</td>
                        <td>${question.detailedAnswer}</td>
                    `;
                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Error:', error));
        }
    };
    input.click();
});

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