const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitAttendance);

function submitAttendance() {
 const tableRows = document.querySelectorAll("tbody tr");
 let attendanceData = [];

 tableRows.forEach(row => {
  const studentName = row.querySelector("td:first-child").textContent;
  const attendanceStatus = row.querySelector("input[type='checkbox']").checked;
  const reasonForAbsence = row.querySelector("input[type='text']").value;
  attendanceData.push({ name: studentName, attendance: attendanceStatus, reason: reasonForAbsence });
 });

 // Send attendance data to server or store in local storage
 console.log(attendanceData);
}

