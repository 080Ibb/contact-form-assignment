// create Salman's family array
let familyArray = [];
if (localStorage.getItem("name")){
    familyArray = JSON.parse(localStorage.getItem("name"))
}
else{
    familyArray =[]
}
function signUp() {
    // collect user inputs
    let firstName = document.getElementById('firstName').value;
    let middleName = document.getElementById('middleName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;
    let password = document.getElementById('password').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let reEnterPassword = document.getElementById('reEnterPassword').value;

    if (firstName == "" || lastName =="" || middleName == "" || email == "" || dob == "" 
    || gender == "0" || password == "" || reEnterPassword == "" || phoneNumber == "") {
        alert("At least one of the fields is empty");
    }
    else {
        // create a new object out of user inputs
        let userObj = {
            firstName: firstName, middleName: middleName, lastName: lastName, email: email, dob: dob, 
            gender: gender, password: password, reEnterPassword: reEnterPassword, phoneNumber: phoneNumber
        };
        // add objects to salman's array
        familyArray.push(userObj);
        document.getElementById("firstName").value = "",
        document.getElementById("middleName").value = "",
        document.getElementById("lastName").value = "",
        document.getElementById("phoneNumber").value = "",
        document.getElementById("email").value = "",
        document.getElementById("dob").value = "",
        document.getElementById("gender").value = "0",
        document.getElementById("password").value = "",
        document.getElementById("reEnterPassword").value = "",
        
        // save in local storage
        saveSomething()
        // call the display function and pass familyArray as parameter
        displayInfo(familyArray);
    }

}

function displayInfo(n) {
    let display = "";
    for (let i in n) {
        display += `<tr> 
        <td> ${Number (i) + 1} </td>
        <td> ${n[i].firstName} </td>
        <td> ${n[i].middleName} </td>
        <td> ${n[i].lastName} </td>
        <td> ${n[i].email} </td>
        <td> ${n[i].dob} </td>
        <td> ${n[i].phoneNumber} </td>
        <td> ${n[i].gender} </td>
        <td> <img onclick="editInfo(${i})" src="./assets/edit_image.png" width="20px">
        <img onclick="deleteInfo(${i})" src="./assets/delete_image.jpeg" width="20px"></td>
        </tr>`

    }
    document.getElementById("table").innerHTML = display;
}

function deleteInfo(index) {
    if (confirm("Are you sure you want to delete this contact?")) {
      familyArray.splice(index, 1);
      displayInfo(familyArray);
    }
  }

let updateIndex = null;

function editInfo(n) {
  document.getElementById("signUpBtn").style.display = "none";
  document.getElementById("updateBtn").classList.remove("d-none");

  document.getElementById("firstName").value = familyArray[n].firstName;
  document.getElementById("lastName").value = familyArray[n].lastName;
  document.getElementById("middleName").value = familyArray[n].middleName;
  document.getElementById("email").value = familyArray[n].email;
  document.getElementById("dob").value = familyArray[n].dob;
  document.getElementById("phoneNumber").value = familyArray[n].phoneNumber;
  document.getElementById("gender").value = familyArray[n].gender;

  updateIndex = n;
}

function updateInfo() {
  familyArray[updateIndex].firstName = document.getElementById("firstName").value;
  familyArray[updateIndex].middletName = document.getElementById("middleName").value;
  familyArray[updateIndex].lastName = document.getElementById("lastName").value;
  familyArray[updateIndex].email = document.getElementById("email").value;
  familyArray[updateIndex].dob = document.getElementById("dob").value;
  familyArray[updateIndex].phoneNumber = document.getElementById("phoneNumber").value;
  familyArray[updateIndex].gender = document.getElementById("gender").value;
  

  document.getElementById("firstName").value = "",
        document.getElementById("middleName").value = "",
        document.getElementById("lastName").value = "",
        document.getElementById("phoneNumber").value = "",
        document.getElementById("email").value = "",
        document.getElementById("dob").value = "",
        document.getElementById("gender").value = "0",
        document.getElementById("password").value = "",
        document.getElementById("reEnterPassword").value = "",


  document.getElementById("signUpBtn").style.display = "block";
  document.getElementById("updateBtn").classList.add("d-none");
  saveSomething()
  get();
//   displayInfo(familyArray); 
}

function saveSomething(){

  let string = JSON.stringify(familyArray)
  localStorage.setItem("name", string)
}

function get(){
  let item = localStorage.getItem('name')
  let array = JSON.parse(item)

  displayInfo(array)
}