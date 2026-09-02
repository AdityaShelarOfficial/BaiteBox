function signup(event){
    event.preventDefault();
    const name=document.getElementById('name').value;
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const gender=document.getElementById('gender').value;
    const pass=document.getElementById('password1').value;
    const password=document.getElementById('password2').value;

    if(name=='' || username=='' || email=='' || gender==''|| pass==''){
        alert('Invalid name:')
    }
   
    if(pass == password){
        alert('Registration Successful..!!');
    }
    else{
        
    }
}