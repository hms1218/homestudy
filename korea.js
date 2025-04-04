document.addEventListener("DOMContentLoaded",
    function(e){
        let image = document.querySelector(".image");
        image.addEventListener("click",
            function(e){
                let f = document.forms[0];
                f.action = "http://koreaisacademy.com/";
                f.submit();
            }
        )
        let id = document.querySelector(".id");
        let id_input = document.querySelector(".id_input");
        id.addEventListener("input",
            function(e){
                if(id.value.length>4 && id.value.length<20){
                    id_input.innerHTML = "올바른 형식입니다.";
                } else if(id.value.length==0){
                    id_input.innerHTML = "소문자/숫자 4자 이상을 입력해 주세요."
                } else{
                    id_input.innerHTML = "아이디는 소문자/숫자 4자 이상 사용 가능합니다."
                }
            }
        )

        let name = document.querySelector(".name");
        let name_input = document.querySelector(".name_input");
        name.addEventListener("input",
            function(e){
                if(name.value.length == 0){
                    name_input.innerHTML = "이름을 입력해 주세요.";
                }else if(name.value.length >=1 && name.value.length <=30){
                    name_input.innerHTML = "사용 가능한 이름입니다."
                }else if(!name.value == /^[\w]$/){
                    name_input.innerHTML = "이름은"
                }
            }
        )

        let email = document.querySelector(".email");
        let email_input = document.querySelector(".email_input");
        email.addEventListener("input",
            function(e){
                if(email.value == /^[\w_.]@[\w_.]$/){
                    email.input.innerHTML = "올바른 형식의 이메일입니다.";
                } else{
                    email.input.innerHTML = "올바른 형식의 이메일을 입력해주세요.";
                }
            }
        )

        let button = document.querySelector(".button");
        button.addEventListener("click",
            function(e){
                
            }
        )
    }
)