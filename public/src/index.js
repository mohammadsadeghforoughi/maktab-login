AOS.init({
  anchorPlacement: "top-bottom",
  delay: 100,
  offset: 100, // offset (in px) from the original trigger poin
  duration: 800, // values from 0 to 3000, with step 50ms
});

const SubmitForm = (e) => {
  // e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username, password);
  $.ajax({
    url: "/login",
    method: "POST",
    data: {
      username,
      password,
    },
    success: function (result) {
      console.log(result);
      if (result == "success") {
        showError(false);
        window.location.href = "http://www.w3schools.com";
      } else {
        showError(true);
      }
    },
  });
};

function showError(show = false) {
  let errorEL = document.getElementById("error");
  if (show) {
    errorEL.classList.remove("d-none");
    errorEL.classList.add("d-inline");
  } else {
    errorEL.classList.remove("d-inline");
    errorEL.classList.add("d-none");
  }
}
