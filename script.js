function showInfo() {
    const name = document.querySelector('#username');
    const pass = document.querySelector('#pass');
    console.log(name.value);
    console.log(pass.value);
}

function saveToLocal() {
    const name = document.querySelector('#username');
    const pass = document.querySelector('#pass');
    // let user = {username: name.value, password: pass.value}
    // localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('username', name.value);
    localStorage.setItem('password', pass.value);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', showInfo);
btn.addEventListener('click', saveToLocal);
