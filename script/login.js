
document.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(document.querySelector(".id_container input[name='id']"));

    const inputId = document.querySelector(".id_container input[name='id']");
    const inputPw = document.querySelector(".pw_container input[name='pw']")
    if(e.target === inputId) {
        inputId.parentNode.style.border = '1px solid #0056B3';
    }else if(e.target === inputPw) {
        inputPw.parentNode.style.border = '1px solid #0056B3';
    }
})