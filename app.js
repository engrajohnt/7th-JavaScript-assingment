// Array to store attendance records
let attendanceRecords = [];

// Function to mark attendance
function markAttendance() {
  const studentName = document.getElementById("studentName").value;
  const classValue = document.getElementById("class").value;
  const seatNumber = document.getElementById("seatNumber").value;

  // Validate form input
  if (studentName.trim() === '' || classValue.trim() === '' || seatNumber.trim() === '') {
    alert("Please fill in all fields.");
    return;
  }

  // Create attendance object
  const attendance = {
    studentName: studentName,
    class: classValue,
    seatNumber: seatNumber,
    present: true, // Defaulting to "Present" for now
  };

  // Add attendance to records
  attendanceRecords.push(attendance);

  // Clear input fields
  document.getElementById("studentName").value = '';
  document.getElementById("class").value = '';
  document.getElementById("seatNumber").value = '';

  // Display attendance records
  displayAttendanceRecords();
}

// Function to display attendance records
function displayAttendanceRecords() {
  const attendanceRecordsContainer = document.getElementById("attendanceRecords");
  attendanceRecordsContainer.innerHTML = '';

  attendanceRecords.forEach((attendance, index) => {
    const attendanceDiv = document.createElement('div');
    attendanceDiv.className = "attendance";

    const attendanceInfo = document.createElement('span');
    attendanceInfo.textContent = `${attendance.studentName} - Class: ${attendance.class}, Seat: ${attendance.seatNumber}`;

    attendanceDiv.appendChild(attendanceInfo);

    const attendanceStatus = document.createElement('select');

    const presentOption = document.createElement('option');
    presentOption.textContent = "Present";
    attendanceStatus.appendChild(presentOption);

    const absentOption = document.createElement('option');
    absentOption.textContent = "Absent";
    attendanceStatus.appendChild(absentOption);

    attendanceStatus.value = attendance.present ? "Present" : "Absent";

    attendanceStatus.onchange = function() {
      attendanceRecords[index].present = this.value === "Present";
    };

    attendanceDiv.appendChild(attendanceStatus);
    attendanceRecordsContainer.appendChild(attendanceDiv);
  });
}






