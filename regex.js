    //정규표현식
    //주어진 문자열에서 특정 패턴을 찾거나 검사하거나 대체할 때 사용하는 특수한 문법
    //주로 문자열 유효성 검사, 검색, 치환 등에 쓰인다.

    //정규표현식은 /정규표현식/ 의 모양으로 작성한다.
    // /^문자열$/ -> 문자열이 정확히 패턴과 일치해야 한다.
    // ^ -> 문자열의 시작
    // $ -> 문자열의 끝

    var regex = /abc/; //문자열 안에 abc가 있는지 찾는다.
    regex.test("abc"); //true;
    regex.test("123abc456"); //true
    regex.test("ab"); //false
    //^과 $가 없을 때는 "abc"가 문자열의 어디에 있든 포함만 되면 true

    var regex = /^abc$/;
    regex.test("abc"); //true;
    regex.test("123abc456"); //false
    regex.test("ab"); //false
    //문자열이 정확히 "abc"인지 판별
    //앞뒤에 다른 글자가 있으면 false

    // . -> 아무 문자 한 글자
    var regex = /h.t/;
    regex.test("hat"); //true
    regex.test("hit"); //true
    regex.test("hoot"); //false (oo 두글자가 들어갔기 때문)

    // * -> 바로 앞의 문자가 0번이상 반복 ?
    var regex = /ab*c/; //b가 여러번 반복 가능
    regex.test("abc"); //true
    regex.test("abbc"); //true
    regex.test("abbbbbbbbc"); //true

    // + -> 바로 앞의 문자가 1번이상 반복
    var regex = /ab+c/; //b가 1번은 반복해야함
    regex.test("abc"); //false
    regex.test("abbc"); //true
    regex.test("abbbbbbbbc"); //true

    // ?  -> 바로 앞의 문자가 0번 또는 1번만 나와야함
    var regex = /ab?c/; //b가 1번은 반복해야함
    regex.test("ac"); //true
    regex.test("abc"); //true
    regex.test("abbbbbbbbc"); //false

    // {n} -> 정확히 n번 반복
    var regex = /ab{3}c/;
    regex.test("abc"); //false
    regex.test("abbc"); //false
    regex.test("abbbc"); //true

    // {n,m} -> 바로 앞에 있는 문자를 n번 이상 m번 이하 반복
    var regex = /ab{2,4}c/;
    regex.test("abc"); //false
    regex.test("abbc"); //true
    regex.test("abbbc"); //true
    regex.test("abbbbbc"); //false

    // [문자] : 문자를 포함해야한다.
    // [abc] : 문자열이 a 또는 b 또는 c 를 포함하면 된다.
    var regex = /[abc]/;
    regex.test("a"); //true
    regex.test("b"); //true
    regex.test("c"); //true
    regex.test("abdc"); //true
    regex.test("efg"); //false

    // [^문자] : 문자를 포함하지 않아야 한다.
    // [^abc] : a 또는 b 또는 c를 제외한 문자가 하나라도 있으면 참
    // 문자열 안에 조건에 맞는 문자가 하나라도 있는지 검사
    var regex = /[^abc]/;
    regex.test("a");//false
    regex.test("b"); //false
    regex.test("c"); //false
    regex.test("abc"); //false
    regex.test("e"); //true
    regex.test("abe"); //true

    // [0-9] : 0~9를 포함하고 있는지
    // \d 랑 같은 의미
    var regex = /[0-9]/; // /\d/; 같은의미
    regex.test("0"); //true
    regex.test("123"); //true
    regex.test("2a"); //true

    // /^[0-9]$/ : 정확히 0~9만 입력해야 true
    var regex = /^[0-9]$/; // /^\d$/; 같은의미
    regex.test("0"); //true
    regex.test("123"); //false
    regex.test("2a"); //false

    // [a-z] : 소문자 a부터 소문자 z까지 포함한 한글자
    var regex = /[a-z]/;
    regex.test("a"); //true
    regex.test("abcdeft"); //true

    var regex = /^[a-z]$/;
    regex.test("a"); //true
    regex.test("abc"); //false

    // [A-Z] : 대문자 A~Z
    var regex = /[A-Z]/;
    regex.test("A"); //true
    regex.test("ABCDEF"); //true

    var regex = /^[A-Z]$/;
    regex.test("A"); //true
    regex.test("ABCDEF"); //false

    // [가-힣] : 가 ~ 힣
    var regex = /[가-힣]/;
    regex.test("가"); //true
    regex.test("가나다라"); // true
    
    var regex = /^[가-힣]$/;
    regex.test("가"); //true
    regex.test("가나다라"); // false

    //특수문자 : []에 들어가는 문자 제외 -> \. 사용(\ 이용)

    //1. 한글 이름에 대한 유효성
    //한글로만 이루어진 문자열
    //길이는 2~5자
    var regex = /^[가-힣]{2,5}$/;
    regex.test("김철수"); //true
    regex.test("kim"); //false
    regex.test("철수123"); //false

    //2. 영어 소문자, 숫자만 허용하는 아이디
    //길이는 4~12자리
    var regex = /^[a-z 0-9]{4,12}$/;

    //3. 이메일 형식 검사
    //username@domain.com 형태
    //username은 영문/숫자/./_ 포함 가능
    //domain은 영문/숫자
    //com은 영문/숫자, .com 또는 .net

    var regex = /^[\w.]+@[A-Za-z0-9]+\.(com|net)$/;

    //4. 휴대폰 번호 검사
    //010 으로 시작
    //중간,마지막 자리 숫자는 4자리
    //전체 형식 010-xxxx-xxxx

    var regex = /^(010)\-[0-9]{4}\-[0-9]{4}$/;
    var regex = /^010-\d{4}-\d{4}$/;

    //그룹화
    //[abc] -> a,b,c 중 하나
    //(abc) -> abc가 한 단어

    var regex = /(ha)+/;
    regex.test("h"); // false
    regex.test("ha"); // true
    regex.test("haha"); // true
    regex.test("hahaha"); // true

    var regex = /h+a+/;
    regex.test("h"); // false
    regex.test("ha"); // true
    regex.test("haaa"); // true
    regex.test("hhaaaa"); // true
    
    // | : or의 의미 그룹화랑 같이 사용
    var regex = /I (like|love) you/;
    regex.test("I love you"); //true
    regex.test("I like you"); //true

    //그룹에서 값을 빼오는 것이 가능하다.
    //match()
    let str = "price : $300";
    var result = str.match(/\$(\d+)/);
    //result[0] : 정규식에 매칭된 전체 문자열
    //result[1] : 첫 번째 그룹에 해당하는 값


