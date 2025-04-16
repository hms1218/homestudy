프로그래머스 java문제 / 9로 나눈 나머지

음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

Ex) String number = "123" -> result = 6

1) 문자열을 한글자씩 split으로 잘라서 문자열 배열에 담고,
한글자씩 뽑아서 parseInt를 통해 숫자로바꿔 합산하는 방식

class Solution {
    public int solution(String number) {
        int answer = 0;
        
        String[] list = number.split("");

        int sum = 0;
        for(int i=0; i<number.length(); i++) {
          sum += Integer.parseInt(list[i]);
        }
        answer = sum % 9;

        return answer;
    }
}

2) charAt()으로 문자열의 각 인덱스의 값을 뽑아내고 아스키코드로 계산하여 합산한다.
    for(int i=0; i<number.length(); i++) {
			char c = number.charAt(i);
			answer += c - '0';
		}
    
    return answer % 9 ;