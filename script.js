

let latest = document.querySelector('.latest');

customApi.map(item => {
    let title1 = document.createElement("h5");
    let link1 = document.createElement("p");

    title1.innerHTML = item.title;
    link1.innerHTML = `<a href="${item.link}" target="_blank">${item.link}</a>`; // Make the link clickable

    title1.style.backgroundColor = "";

    latest.appendChild(title1);
    latest.appendChild(link1);
});
