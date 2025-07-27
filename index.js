const ol = document.querySelectorAll("ol li");
const content = document.querySelectorAll(".content > div");

ol.forEach((li, i) => {
  li.addEventListener("click", () => {
    content.forEach((cont)=>{
        cont.classList.remove('show')
    })
    content[i].classList.add("show");
  });
});

