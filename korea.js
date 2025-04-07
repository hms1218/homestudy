document.addEventListener("DOMContentLoaded",
    function(e){
        let id = document.querySelector(".id"); // 입력란
        let id_input = document.querySelector(".id_input"); // 이벤트처리 대상

        //id변수에 값이 들어있다면 포커스를 줘라
        if(id){
            id.focus();
        }
        //소문자와 숫자를 조합하여 4~20자 입력이 가능하도록 개선하시오.
        //idRegex = /^[a-z0-9]{4,20}$/
        id.addEventListener("input",
            function(e){
                let hasLowerCase = false; // 소문자
                let hasNumber = false; // 숫자
                let isValid = true;

                if(id.value.length<4 || id.value.length>20){
                    isValid = false;
                }

                //문자 검사하기
                //정규식을 사용하지 않으면 문자열을 하나씩 잘라서 검사해야한다.

                //문자열 전체를 순회한다.
                for(let i=0; i<id.value.length; i++){
                    const ch = id.value[i]; //한글자를 담는다.
                    if(ch>='a' && ch<='z'){
                        hasLowerCase = true; // 소문자인지 판별
                    } else if(ch >= '0' && ch <= '9'){
                        hasNumber = true; // 숫자인지 판별
                    } else{
                        isValid = false; // 다른 문자 포함 시 무효
                    }
                }

                //메시지를 표시
                //소문자,숫자를 포함한 4글자 이상의 단어
                if(!isValid || !hasLowerCase || !hasNumber){ //조건에 맞지 않는 경우지만 if문으로 들어와야함
                    id_input.textContent = "아이디는 소문자/숫자 4자 이상 사용 가능합니다.";
                    id_input.style.color='red';
                } else{
                    id_input.textContent = "올바른 형식입니다.";
                    id_input.style.color='green';
                }

            }
        )

        //mousemove : 요소 위에서 움직일 때
        //mouseenter : 요소로 처음 들어갔을 때

        //focus : 요소에 포커스가 들어갔을 때
        //blur : 요소에서 포커스가 빠졌을 때

        //submit : 폼이 제출될 때
        //change : <input>,<select>,<textarea>의 갑이 바뀔 때(포커스가 빠졌을 때)
        //input : 사용자의 입력이 들어올 때 (실시간)
        //reset : 폼이 리셋될 때

        //load : 문서나 리소스가 모두 로드되었을 때
        //DOMContentLoaded : DOM이 모두 파싱되었을 때
        //resize : 창의 크기가 변경되었을 때
        //scroll : 스크롤 될 때
        //unload : 페이지를 벗어나기 직전
        //beforeunload : 페이지를 떠나기 전에 사용자에게 경고 가능

        //1) 비밀번호는 8~20자의 영문 대/소문자, 숫자, 특수문자 8종(!@#$%^&*) 입력이 가능하도록 개선하시오.
        //2)
        //3)

        //let pwRegex = /^[\w!@#$%^&*]{8,20}$/;
        let pw = document.querySelector(".pw"); // 입력란
        let pw_input = document.querySelector(".pw_input"); // 이벤트 처리 대상
        pw.addEventListener("blur", // 요소에서 포커스가 빠졌을 때 "blur"
            function(e){
                if(pw.value.length<8 || pw.value.length>20){
                    pw_input.textContent = "비밀번호는 8~20자 사이로 입력해 주세요.";
                    pw_input.style.color = "red";
                }

                let pwRegex1 = /^[A-Z]+$/;
                let pwRegex2 = /^[a-z]+$/;
                let pwRegex3 = /^[0-9]+$/;
                let pwRegex4 = /^[!@#$%^&*]+$/;

                let typesCount = 0;
                if(pwRegex1.test(pw.value)) typesCount++;
                if(pwRegex2.test(pw.value)) typesCount++;
                if(pwRegex3.test(pw.value)) typesCount++;
                if(pwRegex4.test(pw.value)) typesCount++;


                if(typesCount >= 3){
                    pw_input.textContent = "사용 가능한 비밀번호입니다.";
                    pw_input.style.color = "green";
                } else{
                    pw_input.textContent = "비밀번호는 8~20자의 영문 대/소문자,숫자,특수문자 등 3종류 이상으로 조합해주세요";
                    pw_input.style.color = "red";
                }

                // let specialChars = "!@#$%^&*"; // 특수문자 8종

                // let hasLowerCase = false; // 소문자가 들어갔는지
                // let hasUpperCase = false; // 대문자가 들어갔는지
                // let hasNumber = false; // 숫자가 들어갔는지
                // let hasSpecial = false; // 특수문자가 들어갔는지
                // let isValid = true; // 유효성검사가 완벽한지

                // if(pw.value.length<8 || pw.value.length>20){
                //     isValid = false;
                // }

                // for(let i=0; i<pw.value.length; i++){
                //     let ch = pw.value[i];
                //     if(ch >= 'a' && ch <= 'z') hasLowerCase = true;
                //     else if(ch >= 'A' && ch <= 'Z') hasUpperCase = true;
                //     else if(ch >= '0' && ch <= '9') hasNumber = true;
                //     else if(specialChars.includes(ch)) hasSpecial = true;
                //     else isValid = false; // 허용되지 않는 문자 포함시 무효
                // }

                // //포함된 조건 수 계산
                // let typesCount = 0;
                // if(hasLowerCase) typesCount++;
                // if(hasUpperCase) typesCount++;
                // if(hasNumber) typesCount++;
                // if(hasSpecial) typesCount++;

                // //유효성 검사가 맞지 않을 때, 3종류 이상이 아닐 때
                // if(!isValid || typesCount < 3){
                //     pw_input.textContent = "비밀번호는 8~20자의 영문 대/소문자,숫자,특수문자 등 3종류 이상으로 조합해주세요";
                //     pw_input.style.color = "red";
                // } else{
                //     pw_input.textContent = "사용 가능한 비밀번호 입니다.";
                //     pw_input.style.color = "green";
                // }


            }
        )
        //1) 영문, 한글만 1~30자 사이로 입력할 수 있도록 개선하시오.
        //2) 다음 항목을 모두 각각 점검하시오.
        // - 이름을 입력하지 않은 경우
        // - 입력된 이름에 영문, 한글 이외 문자가 포함된 경우
        // - 입력된 이름에 문제가 없는 경우
        //3) 이름을 입력할 때와 입력이 끝난 뒤 벗어날 때 모두 점검하시오.
        let name = document.querySelector(".name");
        let name_input = document.querySelector(".name_input");

        //입력할 때 실시간 검증
        name.addEventListener("input",validateName);
        //포커스가 빠질 때 검증
        name.addEventListener("blur",validateName);

        //이름에 대한 유효성 검증을 하는 함수
        function validateName(){
            //이름값 가져오기
            let value = name.value.trim();

            //1. 이름을 입력하지 않았을 때
            if(value.length == 0){
                name_input.textContent = "이름을 입력해 주세요.";
                name_input.style.color = "red";
                return;
            }
            //2. 이름이 30자 넘었을 때
            if(value.length > 30){
                name_input.textContent = "이름은 1~30자 사이로 입력해주세요.";
                name_input.style.color = "red";
                return;
            }

            //한글,영문 대/소문자만 허용하는 정규식
            //한글 : 가 - 힣

            let nameRegex = /^[가-힣 A-Z a-z]+$/
            if(nameRegex.test(value)){
                name_input.textContent = "사용 가능한 이름입니다.";
                name_input.style.color = "green";
            } else{
                name_input.textContent = "이름은 한글,영문 대/소문자만 사용해주세요.";
                name_input.style.color = "red";
            }

        }

        //1) 이메일 형식이 올바른지 점검할 수 있도록 개선하시오
        //2) 이메일을 입력할 때와 입력이 끝난 뒤 벗어날 때 모두 점검하시오.

        let email = document.querySelector(".email");
        let email_input = document.querySelector(".email_input");

        //이메일 입력 중 이벤트 처리
        email.addEventListener("input", validateEmail);
        //이메일 입력 후 이벤트 처리
        email.addEventListener("blur", validateEmail);

        function validateEmail(){
            let value = email.value.trim();

            //1. 이메일을 입력하지 않았을 때
            //"이메일을 입력해 주세요"
            if(value.length==0){
                email_input.textContent = "이메일을 입력해 주세요.";
                email_input.style.color = "red";
                return;
            }
            //2. 이메일 형식 검사하기
            //"이메일 형식이 올바르지 않습니다."

            //모두 통과시
            //"올바른 이메일 입니다."
            
            let emailRegex = /^[\w.-]+@[\w-]+\.(com|net)$/
            if(emailRegex.test(value)){
                email_input.textContent = "올바른 이메일 입니다.";
                email_input.style.color = "green";
            } else{
                email_input.textContent = "이메일 형식이 올바르지 않습니다.";
                email_input.style.color = "red";
            }
        }

        let form = document.querySelector("form");

        form.addEventListener("submit",function(){
            let confirmed = confirm("가입을 완료하시겠습니까?");

            if(!confirmed){
                eventpreventDefault(); //form 의 내용의 전송을 막는다.
            }
        })


    }
)