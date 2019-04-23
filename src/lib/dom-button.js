function button(document) {
    
    this.createButton = () => {
        document.ques
        var boton = document.createElement('button');
        boton.classList.add('btn-boton');
        boton.innerHTML = `<span> HOLA MUNDO </span>`;
        document.querySelector('body').append(boton);
    }
}

export default button;