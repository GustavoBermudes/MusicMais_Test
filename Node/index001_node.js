const input_email = document.getElementById("input_email")
                    input_email.oninput = function() {
                    let inputVal = document.getElementById("input_email").value
                    var maskedid = ""
                    var myemailId = inputVal
                    var index = myemailId.lastIndexOf("@")
                    var prefix = myemailId.substring(0, index)
                    var postfix = myemailId.substring(index)
                    var mask = prefix.split('').map(function(o, i) {
                        if (i == 0 || i == (index - 1)) {
                            return o
                        } else {
                            return '*'
                        }
                    }).join('')
                    maskedid = mask + postfix
                    input_email.value = maskedid
                    }
document.querySelector('.img-btn').addEventListener('click',function()
{
    document.querySelector('.content').classList.toggle('s-signup')
}
);
const input_Senha_confirm = document.getElementById("input_senha_confirm")
input_Senha_confirm.oninput = function(){
    const input_Senha = document.getElementById("input_senha")  
    let inputVal_S = document.getElementById("input_senha").value 
    let inputVal_SC = document.getElementById("input_senha_confirm").value
    if (inputVal_SC != inputVal_S){
        input_Senha_confirm.style.color = "Red";
    }
    else{
        input_Senha_confirm.style.color = "Green";
    }
}