let messages = document.querySelector('.messages')

let uppercase = document.querySelector('.uppercase')
let lowercase = document.querySelector('.lowercase')
let number = document.querySelector('.number')
let character = document.querySelector('.character')
let length = document.querySelector('.length')
let psw = document.querySelector('#psw');


psw.onfocus = () => {
    messages.style.display = 'block';
    messages.classList.add('active');
};

psw.onkeyup = () => {
        let upper = /[A-Z]/;
        if(upper.test(psw.value)) {
            uppercase.classList.replace('inactive', 'active');
        }else{
            uppercase.classList.replace('active', 'inactive');
        }

        let lower = /[a-z]/;
        if(lower.test(psw.value)) {
            lowercase.classList.replace('inactive', 'active');
        }else{
            lowercase.classList.replace('active', 'inactive');
        }

        let numb = /[0-9]/;
        if(numb.test(psw.value)) {
            number.classList.replace('inactive', 'active');
        }else{
            number.classList.replace('active', 'inactive');
        }

        let speChar = /[*&^%$#@!()><.,/'"+=]/;
        if(speChar.test(psw.value)) {
            character.classList.replace('inactive', 'active');
        }else{
            character.classList.replace('active', 'inactive');
        }


        if(psw.value.length >= 8) {
            length.classList.replace('inactive', 'active');
        }else{
            length.classList.replace('active', 'inactive');
        }

}
