document.getElementById('fahrenheit').addEventListener('click', () => {
    let degree = document.getElementById('temp').textContent;
    let degree0 = document.getElementById('temp0').textContent;
    let degreeT = document.getElementById('tempT').textContent;
    let degreeF = document.getElementById('tempF').textContent;
    temp.textContent = Math.ceil(degree * 9 / 5 + 32);
    temp0.textContent = Math.ceil(degree0 * 9 / 5 + 32);
    tempT.textContent = Math.ceil(degreeT * 9 / 5 + 32);
    tempF.textContent = Math.ceil(degreeF * 9 / 5 + 32);
    tempUnix.textContent = 'f';
    tempUnix1.textContent = 'f';
    tempUnix2.textContent = 'f';
    tempUnix3.textContent = 'f';
})

