var elementInput = document.querySelector('#app #user');
var btnElement = document.querySelector('#app button');
var app = document.querySelector('#app');
var mainElement = document.querySelector('#profile');


function renderImage() {
    
    var xhr = new XMLHttpRequest();

    var user = elementInput.value;

    xhr.open('GET', 'https://api.github.com/users/'+user);
    xhr.send(null);

    // if(xhr.status === 200) {
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                var results = (JSON.parse(xhr.responseText));
                var createImg = document.createElement('img');
                var createTitle = document.createElement('h1');
                var titleText = document.createTextNode(results.name);
                console.log(results);
    
                createImg.setAttribute('src', results.avatar_url);
                mainElement.prepend(createImg);
                createTitle.appendChild(titleText);
                mainElement.appendChild(createTitle); 
            }
        }
        renderList();
    //}
    // else {
    //     alert("Usuário Não Encontrado");
    //     elementInput.value = ""
    // }
}

function renderList() {
    var listElement = document.createElement('ul');
    
    var xhr = new XMLHttpRequest();

    var user = elementInput.value;

    xhr.open('GET', 'https://api.github.com/users/'+user+"/repos");
    xhr.send(null);

    xhr.onreadystatechange = function() {
         if (xhr.readyState === 4) {
            var results = (JSON.parse(xhr.responseText));
            console.log(results);
            
            for (listResults of results) {
                
                var createElementList = document.createElement('li');
                var createListText = document.createTextNode(listResults.name);
                var createLink = document.createElement('a');

                createLink.setAttribute('href', listResults.html_url);
                createLink.setAttribute('target', '_blank');

                createLink.appendChild(createListText);
                createElementList.appendChild(createLink);
                listElement.appendChild(createElementList);
                app.appendChild(listElement);
            }
         }
    }
    elementInput.value = ""
}

function refreshList() {
    var pickList = document.querySelector("#app ul");
    console.log(pickList);
    pickList.remove();
    mainElement.innerHTML = ""
}

btnElement.onclick = renderImage;
