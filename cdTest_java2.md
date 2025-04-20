프로그래머스 java 문제 / 0떼기

정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

EX1) String n_str = "0010";
EX2) String n_str = "854020";

class Solution {
    public String solution(String n_str) {
        String answer = "";
        
        int i = Integer.parseInt(n_str);
        
        answer += i+"";
        
        return answer;
    }
}

결과 : "10" or "854020"

-> 문자열을 숫자로 바꾸면 앞자리의 0은 자동으로 생략되기때문에 숫자로 바꾼뒤 다시 문자열형태로 바꾸면
   왼쪽에 처음으로 등장하는 0을 자연스럽게 없앨 수 있다.