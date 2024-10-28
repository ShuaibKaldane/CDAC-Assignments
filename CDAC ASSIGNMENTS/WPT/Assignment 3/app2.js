let btn = document.querySelector("button");
let del = document.createElement("button");
del.innerText = "Delete";
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let firstname = document.querySelector(".ftname");
  let lastname = document.querySelector(".lname");
  let contact = document.querySelector(".contact");
  let email = document.querySelector(".email");
  let fres = firstname.value;
  let lres = lastname.value;
  let cres = contact.value;
  let eres = email.value;
  let body = document.querySelector("ul");
  let firstnameItem = document.createElement("li");
  firstnameItem.innerText = fres;

  let lastnameItem = document.createElement("li");
  lastnameItem.innerText = lres;

  let contactItem = document.createElement("li");
  contactItem.innerText = cres;

  let emailItem = document.createElement("li");
  emailItem.innerText = eres;
  


  body.appendChild(firstnameItem);
  body.appendChild(lastnameItem);
  body.appendChild(contactItem);
  body.appendChild(emailItem);
  body.appendChild(del);
  del.addEventListener("click" ,()=>{
    body.innerText = "";

  })
  


  


});
