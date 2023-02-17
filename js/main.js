let btn = document.querySelector('.btn-add');
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
        let ind = index;
        let el = element.text;
        html += `<tr>
        <!-- <th>дело #${ind + 1}</th> -->
        <td data-title="Текст">
            <p class="border-text">
            ${el}
            </p>
        </td>
        <td class="btn-right" data-title="Действия">
            <button onclick="deleteItem(${ind})" class="btn btn-danger btn-sm">Удалить</button>
            <button onclick="updateData(${ind})" class="btn btn-warning btn-sm update" id="edit">Изменить</button>
        </td>
    </tr>`;
    console.log(element.text)
    });
    document.querySelector('#crudTable').innerHTML = html;
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
        // arrPost.forEach(function (element, index) {
        //     console.log(element)
        // });
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
    // arrPost.forEach((element) => {
    //     console.log(element)
    // });
    showData();
}
 
function updateData(index) {
        newData = JSON.parse(localStorage.getItem('arrPost'));
        let updateText = prompt('Введите текст');
        if (updateText === '' || updateText == null) {
            return;
        } else {
            newData[index].text = updateText;
            localStorage.setItem('arrPost', JSON.stringify(newData));
        }
        showData();
}
