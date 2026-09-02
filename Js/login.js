// function login() {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     if (username === 'admin' && password === 'Admin@123') {
//         alert('You have login successfully \n\n Welcome to BaiteBox...!!');
//     }
//     else if (username === 'admin' && password !== 'Admin@123') {
//         alert('Sorry ' + username + 'Password is incorrect. Please try again..');
//     }
//     else if (username !== 'admin' && password === 'Admin@123') {
//         alert('Sorry username is incorrect. Please try again..');
//     }
//     else {
//         alert('Sorry Username and Password is incorrect. Please try again..');
//     }
// }

function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if(username === 'adishelar2005@gmail.com' && password === '123456'){
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('username',username);

        //  back to home page
        window.location.href = 'index.html';
        alert('Welcome to BiteBox '+username+' ');
    }
    else{
        message.innerText = 'Invalid Username or Password.';
    }

}