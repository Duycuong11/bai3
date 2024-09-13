var tasks = [];
var currentIndex = -1;

function renderTable() {
  /**tạo biến tableContent để chứa nd hiển thị */
  var tableContent = ``;

  for (var i = 0; i < tasks.length; i++) {
    /**lấy chi tiết thông tin của task qua i*/
    var task = tasks[i];
    /**tạo biến string chứa thẻ tr và td, td để hiển thị i, name, age và 2 nút button của task*/
    var string = `<tr>
                            <td>${i}</td>
                            <td>${task.name}</td>
                            <td>
                                <button onclick="editTask(${i})">Edit</button>
                                <button onclick="deleteTask(${i})">Delete</button>
                            </td>
                        </tr>`;
    tableContent += string;
  }
  $("#listtask").html(tableContent);
}

function addTask() {
  /**lấy giá trị của nametask */
  var name = $("#content").val(); /**document.getElementById("").value*/

  if (name === "") {
    /**nếu chưa nhập task thì hiển thị lỗi */
    alert("No in task");
    return;
  }
  /**tạo object để chứa thông tin  */
  var task = {
    name: name,
  };

  if (currentIndex === -1) {
    tasks.push(task);
  } else {
    tasks[currentIndex] = task;

    currentIndex = -1;
  }
  /**sau khi lưu thông tin task thì sẽ xóa giá trị đi */
  $("#content").val("");

  renderTable();
}

function editTask(index) {
  /**nhận indexx khi nhấn vô
   * tìm task trong mảng index
   */
  var task = tasks[index];

  $("#content").val(task.name);
  /**update biến curentIndex bằng với index click cho edit */
  currentIndex = index;
}

function deleteTask(index) {
  /**nhận index khi mà user click vào */

  tasks.splice(index, 1);

  /**gọi hàm rendertable dể hiển thị ra màn hình vs ds task ms sau khi xóa */
  renderTable();
}

$(document).ready(function () {
  /** thêm sự kiện click vào nút button với id là addtask */
  $("#addTask").on("click", function () {
    /** gọi hàm addStudent khi bấm nút */
    addTask();
  });
});
