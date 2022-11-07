//Uppgift 1:
const rad = [1, 2, 3, 4, 5];
console.log(rad);

let lightness = 100;
for (let i = 0; i < rad.length; i++) {
    const row = document.createElement('h1');
    document.body.appendChild(row);
    row.innerText = 'rad' + " " + (rad[i]);
    row.style.fontSize = i + '5px';
    row.style.textAlign = 'center'
    row.style.backgroundColor = `hsl(274, 100%, ${lightness}%)`;

    // "hsl(100, 100%, " + lightness + "%)"

    console.log(lightness);
    lightness = lightness - 10;

}
//Uppgift 2:
console.log('------')
const box = document.createElement('main');
document.body.appendChild(box);
console.log(box);
box.style.border = '3px solid black';
//flexbox 
box.style.display = 'flex';
box.style.justifyContent = 'space-around';


const bg1 = document.createElement('div');
box.appendChild(bg1);
bg1.style.border = '10px solid aqua';

const bg2 = document.createElement('div');
box.appendChild(bg2);
bg2.style.border = '10px solid aqua';

const bg3 = document.createElement('div');
box.appendChild(bg3);
bg3.style.border = '10px solid aqua';

for (let i = 0; i < 10; i++) {

    let column1 = document.createElement('h2');
    bg1.appendChild(column1);
    column1.innerText = [i];
    column1.style.width = '100px'
    column1.style.margin = '0px'

    if (i == 4) {
        column1.style.backgroundColor = 'aqua';

    }

    else if (i % 2 == 0) {
        column1.style.backgroundColor = 'black';
        column1.style.color = 'white';

    }

}

for (let i = 9; i >= 0; i--) {
    let column2 = document.createElement('h2');
    bg2.appendChild(column2);
    column2.innerText = [i];
    column2.style.width = '100px';
    column2.style.margin = '0px';
    column2.style.textAlign = 'center';

    if (i === 8) {
        column2.style.backgroundColor = 'aqua';
    }
    else if (i % 2 == 0) {
        column2.style.backgroundColor = 'black';
        column2.style.color = 'white';
    }
}

const siffror = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
console.log(siffror);

for (let i = 0; i < 10; i++) {
    let column3 = document.createElement('div');
    bg3.appendChild(column3);
    column3.innerText = siffror[i];
    column3.style.width = '100px';
    column3.style.margin = '0,75em';
    column3.style.height = '27.5px';
    column3.style.textAlign = 'right'

    if (i == [5]) {
        column3.style.backgroundColor = 'aqua';
    }
    else if (i % 2 == 0) {
        column3.style.backgroundColor = 'black';
        column3.style.color = 'white';
    }
}

// for(för varje div i main ){

//     for(för varje h2 i varje div){

//     }
// }