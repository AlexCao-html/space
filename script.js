document.querySelector(".container").addEventListener("click", () => {
    document.querySelector("nav").classList.add("toggled");
    document.querySelector(".X").classList.add("toggled");
});

document.querySelector(".X").addEventListener("click", () => {
    document.querySelector("nav").classList.remove("toggled");
    document.querySelector(".X").classList.remove("toggled");
});

x = document.querySelectorAll("nav a");
for (let index = 0; index < x.length; index++) {
    const i = x[index];
    i.addEventListener("click", () => {
        document.querySelector("nav").classList.remove("toggled");
        document.querySelector(".X").classList.remove("toggled");    
    });    
}