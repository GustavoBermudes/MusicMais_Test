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