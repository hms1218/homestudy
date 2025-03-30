//프로그래머스 코테
//수열과 구간 쿼리 2

function solution(arr, queries) {
  var answer = [];
  
  for(let [s,e,k] of queries){
      let temp = arr.filter((v,i) => (i>=s && i<=e && v>k)).sort((a,b)=>(a-b))[0];
      
      answer.push(temp ? temp : -1);
  }
  
  //filter() : 해당되는 요소들만 걸러내기
  //sort(): 오름차순 정렬 -> (a-b)가 양수가 나오면 위치 교체, 음수이면 교체 안함의 의미
  //.push() : 배열 뒤에 붙이기
  
  return answer;
}