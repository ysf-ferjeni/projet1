function register() {
  const name = document.getElementById("rNom").value.trim();
  const mail = document.getElementById("rEmail").value.trim();
  const pwd  = document.getElementById("rPwd").value;

  if (!name || !mail || !pwd) {
    alert("Veuillez remplir tous les champs.");
    return;
  }
  const user = { nom: name, email: mail, password: pwd };

  localStorage.setItem("user", JSON.stringify(user));


  alert(`Salut ${name}, votre compte est créé !`);

  window.location.href = "index.html";
}



function login() {
  const mail = document.getElementById("lEmail").value.trim();
  const pwd  = document.getElementById("lPwd").value;

  if (!mail || !pwd) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  const saved = localStorage.getItem("user");

  if (!saved) {
    alert("Aucun compte trouvé. Inscrivez-vous d'abord.");
    return;
  }

  const user = JSON.parse(saved);

  if (mail === user.email && pwd === user.password) {
    alert(`Bienvenue ${user.nom} !`);
    window.location.href = "index.html";
  } else {
    alert("Email ou mot de passe incorrect.");
  }
}