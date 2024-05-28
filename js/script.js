// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah perilaku default
  });

// Klik diluar sidebar utk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function sendMessage() {
  var name = document.getElementById("name");
  var message = document.getElementById("message");
  
  var token = "6425553456:AAG5_brD1RHpdiumcjAr6U6z2PO4II1_aWY";
  var group_id = "-4139939755";

  var submited =
    "Name%20%26%20Email%20%3A%20" +
    name.value +
    "%0AMessage%20%3A%20" +
    message.value;

  $.ajax({
    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${group_id}&text=${submited}&parse_mode=html`,
    method: `POST`,
  });
}


document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman

    const messageInput = document.getElementById("message");

    if (messageInput.value.trim() !== "") {
      // Jika input tidak kosong, tampilkan pop-up
      document.getElementById("popup").style.display = "flex";
    } else {
      // Jika input kosong, tampilkan alert atau pesan kesalahan
      alert("Tolong tuliskan sesuatu sebelum mengirim pesan.");
    }
  });

document.getElementById("closePopup").addEventListener("click", function () {
  // Sembunyikan pop-up
  document.getElementById("popup").style.display = "none";
  // Reset form
  document.querySelector("#messageForm").reset();
});

document
  .getElementById("closePopup")
  .addEventListener("click", function (event) {
    // Sembunyikan pop-up
    document.getElementById("popup").style.display = "none";
    event.preventDefault();
  });


  // https://api.telegram.org/bot6425553456:AAG5_brD1RHpdiumcjAr6U6z2PO4II1_aWY/sendMessage?chat_id=-4139939755&text=Gimana%01Boss&parse_mode=html
  
// Name%20%26%20Email%20%3A%20ssssss%0AMessage%20%3A%20ssssss -4139939755


