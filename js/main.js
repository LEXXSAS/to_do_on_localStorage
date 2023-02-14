let btn = document.querySelector('.btnadd');
let btnDelete = document.querySelector('.btndelete');
let div = document.querySelector('.div');
class Post {
    constructor(text) {
        this.text = text;
        this.totalLikes = 0;
    }

    addText() {
        let newText = prompt('Введите текст');
        this.text = newText;
        if (newText === '') {
            alert('Вы ничего не ввели!')
        }
    }
}

const firstPost = new Post();

let str1 = firstPost;
let strText = firstPost.text;

function showData() {
    let arrPost;
    if(localStorage.getItem('arrPost') == null) {
        arrPost = [];
    } else {
        arrPost = JSON.parse(localStorage.getItem('arrPost'));
    }
    
    let html = '';

    arrPost.forEach(function (element, index) {
        html += '<tr>';
        html += '<td>' + element.text + '</td>';
        html += 
        '<td><button onclick="deleteItem(' +
         index + 
         ')" class="btn btn-danger">Удалить</button><button onclick="updateData(' + 
         index + 
         ')" class="btn btn-warning m-2 update" id="edit">Изменить</button></td>';
         html += "</tr>";
    });
    document.querySelector('#crudTable tbody').innerHTML = html;
}

document.onload = showData();

btn.addEventListener('click', () => {
    firstPost.addText();
    let valueText = firstPost.text;

    if (valueText === '' || valueText == null) {
        alert('Вы ничего не ввели!')
        return;
     } else {
        let arrPost;
        if(localStorage.getItem('arrPost') == null) {
            arrPost = [];
        } else {
            arrPost = JSON.parse(localStorage.getItem('arrPost'));
        }
        
        arrPost.push({
            text: valueText,
        });
        localStorage.setItem('arrPost', JSON.stringify(arrPost));
        showData();
        arrPost.forEach(function (element, index) {
            console.log(element)
        });
     }
})
function deleteItem(index) {
    let arrPost;
    if(localStorage.getItem('arrPost') == null) {
        arrPost = [];
    } else {
        arrPost = JSON.parse(localStorage.getItem('arrPost'));
    }

    arrPost.splice(index, 1);
    localStorage.setItem('arrPost', JSON.stringify(arrPost));
    arrPost.forEach((element) => {
        console.log(element)
    });
    showData();
}
 
function updateData(index) {
        newData = JSON.parse(localStorage.getItem('arrPost'));
        let updateText = prompt('Введите текст');
        newData[index].text = updateText;
        localStorage.setItem('arrPost', JSON.stringify(newData));
        showData();
}
