class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = "Danrley";
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.querySelector('#novotodo').onclick = function() {
    MinhaLista.add('novo todo');
}

MinhaLista.mostraUsuario();