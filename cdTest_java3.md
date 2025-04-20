프로그래머스 java / 빈배열에 추가, 삭제하기

아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

int arr[] = {3, 2, 4, 1, 3};
boolean flag[] = {true, false, true, false, false};
		
int[] answer = {};
List<Integer> list = new ArrayList<>();
        
    for(int i=0; i<flag.length; i++){
        if(flag[i]==true){
            for(int j=0; j<arr[i]*2; j++) {
              list.add(arr[i]);
            }
            System.out.println("add: "+list);
        }else {
          for(int j=0; j<arr[i]; j++) {
            list.remove(list.size()-1);  -> 리스트의 마지막 인덱스값을 제거하기 위해서는 list.size()-1 로 접근한다.
          }
          System.out.println("remove: "+list);
        }
        
    }
    
    System.out.println("result: " + list);

    결과 : [3, 3, 3, 3, 4, 4, 4, 4]