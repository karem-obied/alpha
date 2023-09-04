let serviceNavIcons = document.querySelectorAll(
  ".body .container .services .content .nav h3"
);
let services = document.querySelectorAll(
  ".body .container .services .content .contentText"
);

serviceNavIcons.forEach((serviceicon) => {
  serviceicon.addEventListener("click", (e) => {
    serviceNavIcons.forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.add("active");
    services.forEach((service) => {
      service.classList.contains(e.currentTarget.classList[0])
        ? service.classList.remove("hide")
        : service.classList.add("hide");
    });
  });
});

let dots = document.querySelectorAll(
  ".body .container .team .content .dots .dot"
);
let members = document.querySelectorAll(
  ".body .container .team .content .person"
);

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    dots.forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.add("active");
    members.forEach((member) => {
      member.classList.contains(e.currentTarget.classList[0])
        ? member.classList.remove("hide")
        : member.classList.add("hide");
    });
  });
});

let inputs = document.querySelectorAll(".body .contact input");
inputs.forEach((input) => {
  input.addEventListener("focus", () =>
    input.parentElement.classList.add("active")
  );
});
document.querySelector(".body textarea").addEventListener("click", () => {
  document
    .querySelector(".body textarea")
    .parentElement.classList.add("active");
});

document.querySelector(".humberger").addEventListener("click", () => {
  document.querySelector("header ul").classList.toggle("show");
});

let form = document.querySelector("form");

let btn = document.querySelector("form button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: document.querySelector(".body textarea").value,
  };
  if (data.name !== "" && data.email !== "" && data.message !== "")
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "alphaagencysy@gmail.com",
      Password: "064842C50EA2C9F04DB5425328073979E97C",
      To: "alphaagencysy@gmail.com",
      From: `${data.email}`,
      Subject: `Customer Support From The Website`,
      body:'',
      html: `<h1>NAME : ${data.name}</h1>
      <p>${data.message}</p>`,
    }).then((message) => alert(message));
});
