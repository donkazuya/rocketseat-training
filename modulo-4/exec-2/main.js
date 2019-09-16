var elementInput = document.querySelector('#app #user');
var btnElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');
var mainElement = document.querySelector('#profile');

function renderImage() {
    
    var xhr = new XMLHttpRequest();

    var user = elementInput.value;

    xhr.open('GET', 'https://api.github.com/users/'+user);
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            var results = (JSON.parse(xhr.responseText));
            var createImg = document.createElement('img');

            createImg.setAttribute('src', results.avatar_url);
            mainElement.prepend(createImg); 
        }
    }
    renderList();
}

function renderList() {
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
            }
         }
    }
}

btnElement.onclick = renderImage;
