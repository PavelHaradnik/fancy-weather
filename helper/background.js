window.addEventListener('load', ()=> {
    var textQ = monthBackground;
    var description = descriptionTemp.textContent;
    const url = `https://api.unsplash.com/photos/random?query=weather+${textQ}+${description}&client_id=e64afbfd7fbc9bbdd1c64c71179af1ff3596860bfebba4752f865c1dd5bd6baf`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let img = data.links.download;
            document.getElementsByTagName('main')[0].style.backgroundImage = `url(${img})`;
        }); 
}); 

document.getElementById('loader').addEventListener('click', () => {
    let search = document.getElementById('searchInput').value;
    const url = `https://api.unsplash.com/photos/random?query=weather+${search}&client_id=e64afbfd7fbc9bbdd1c64c71179af1ff3596860bfebba4752f865c1dd5bd6baf`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let img = data.links.download;
            document.getElementsByTagName('main')[0].style.backgroundImage = `url(${img})`;
        });   
})

