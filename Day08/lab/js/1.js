

async function loadData () {
    let data = await fetch('https://hp-api.herokuapp.com/api/characters');
    return await data.json();
}

function createCharRow (char) {
    let tr = document.createElement('tr');
    let nameTd = document.createElement('td');
    let imgTd = document.createElement('td');
    let houseTd = document.createElement('td');
    let img = document.createElement('img');
    nameTd.innerText = char.name;
    img.width = 90;
    img.src = char.image;
    houseTd.innerText = char.house;
    imgTd.appendChild(img);
    tr.append(nameTd, imgTd, houseTd);
    return tr;
}

let dataTable = document.getElementById('data-table');

let apiData = await loadData();
console.log(apiData);

apiData.forEach((char) => {
    let row = createCharRow(char);
    console.log(row);
    dataTable.appendChild(row);
});
