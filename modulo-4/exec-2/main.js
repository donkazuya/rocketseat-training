var elementInput = document.querySelector('#app #user');
var btnElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

function renderList() {
    var xhr = new XMLHttpRequest();

    var user = elementInput.value;

    xhr.open('GET', 'https://api.github.com/users/'+user+'/repos');
    xhr.send(null);

    xhr.onreadystatechange = function() {
         if (xhr.readyState === 4) {
             console.log(JSON.parse(xhr.responseText));
         }
    }
}

btnElement.onclick = renderList;
