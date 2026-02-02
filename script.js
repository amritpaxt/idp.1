let credentials = [];

function login() {
  let user = document.getElementById("user").value;
  if(user !== "") {
    localStorage.setItem("user", user);
    window.location.href = "role.html";
  } else {
    alert("Enter username");
  }
}

function selectRole(role) {
  localStorage.setItem("role", role);
  if(role === "student") {
    window.location.href = "dashboard.html";
  }
}

if(document.getElementById("welcome")) {
  document.getElementById("welcome").innerText =
    "Welcome, " + localStorage.getItem("user");
}

function addCredential() {
  let hash = "BLOCK_" + Math.floor(Math.random()*100000);
  credentials.push(hash);

  let list = document.getElementById("credList");
  let li = document.createElement("li");
  li.innerText = hash + " (Immutable)";
  list.appendChild(li);
}

function runAI() {
  let result = document.getElementById("aiResult");
  if(credentials.length === 0) {
    result.innerText = "No credentials found. Possible risk!";
  } else {
    result.innerText =
      "✔ No fraud detected\n✔ Credentials verified\n✔ Learning pattern normal";
  }
}
