const name = document.querySelector('#username');
const pass = document.querySelector('#pass');

function showInfo() {
    console.log(name.value);
    console.log(pass.value);
}

function saveToLocal() {
    // let user = {username: name.value, password: pass.value}
    // localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('username', name.value);
    localStorage.setItem('password', pass.value);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', showInfo);
btn.addEventListener('click', saveToLocal);
