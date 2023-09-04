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
