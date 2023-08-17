// function displayInfo(n) {
//     let display = "";
//     for (let i in n) {
//         display += `<tr> 
//         <td> ${Number (i) + 1} </td>
//         <td> ${n[i].firstName} </td>
//         <td> ${n[i].middleName} </td>
//         <td> ${n[i].lastName} </td>
//         <td> ${n[i].email} </td>
//         <td> ${n[i].DOB} </td>
//         <td> ${n[i].phoneNumber} </td>
//         <td> ${n[i].gender} </td>
//         <td> <img onclick="editInfo(${i})" src="./assets/edit_image.png" width="20px">
//         <img onclick="deleteInfo(${i}) src="./assets/delete_icon.jpeg width="20px"></td>
//         </tr>`

//     }
//     document.getElementById("table").innerHTML = display;
// }





function displayInfo(n) {
    let display = "";
    for (let i in n) {
        display += `<tr> 
        <td> ${Number (i) + 1} </td>
        <td> ${n[i].firstName} </td>
        <td> ${n[i].middleName} </td>
        <td> ${n[i].lastName} </td>
        <td> ${n[i].email} </td>
        <td> ${n[i].DOB} </td>
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
  document.getElementById("DOB").value = familyArray[n].DOB;
  document.getElementById("phoneNumber").value = familyArray[n].phoneNumber;
  document.getElementById("gender").value = familyArray[n].gender;

  updateIndex = n;
}

function updateInfo() {
    familyArray[updateIndex].firstName = document.getElementById("firstName").value;
  familyArray[updateIndex].middletName = document.getElementById("middleName").value;
  familyArray[updateIndex].lastName = document.getElementById("lastName").value;
  familyArray[updateIndex].email = document.getElementById("email").value;
  familyArray[updateIndex].DOB = document.getElementById("DOB").value;
  familyArray[updateIndex].phoneNumber = document.getElementById("phoneNumber").value;
  familyArray[updateIndex].gender = document.getElementById("gender").value;
  

  document.getElementById("firstName").value = "",
        document.getElementById("middleName").value = "",
        document.getElementById("lastName").value = "",
        document.getElementById("phoneNumber").value = "",
        document.getElementById("email").value = "",
        document.getElementById("gender").value = "0",
        document.getElementById("password").value = "",
        document.getElementById("reEnterPassword").value = "",


  document.getElementById("signUpBtn").style.display = "block";
  document.getElementById("updateBtn").classList.add("d-none");
  saveSomething()
  get();
  // displayContacts(familyArray);
  
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







// function displayContacts(n) {
//     let display = "";
//     for (let i in n) {
//       display += ` <tr>
//                   <td>${Number(i) + 1}</td>
//                   <td>${n[i].firstname}</td>
//                   <td>${n[i].lastname}</td>
//                   <td>${n[i].gender}</td>
//                   <td>${n[i].phoneNumber}</td>
//                   <td><img onclick='editContacts(${i})' src='./assets/edit.png' 
//                   width="20px"> <img onclick='deleteContact(${i})' src='./assets/bin.png' width="20px"></td>
//                   </tr>`;
//     }
  
//     document.getElementById("table").innerHTML = display;
//   }