# java_test

## 1. 자바에서 기본형(primitive type)과 참조형(reference type)의 메모리 저장 방식 차이를 설명하시오.
    기본형은 Stack메모리에 저장되고, 참조형은 Heap 메모리에 저장된다.

## 2. 다음의 코드를 보고 프로그램의 출력 결과를 쓰시오.
```java
public class Test1 {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;

        if (a++ < b && ++b > 10) {
            System.out.println("조건 만족");
        }
        System.out.println("a: " + a + ", b: " + b);
    }
}
``` 
조건 만족
a: 6, b:11


## 3. 아래 코드의 문법적 오류 여부를 판단하고, 그 이유를 설명하시오.
```java
public class Test2 {
    public static void main(String[] args) {
        greet();
    }

    public static void greet() {
        System.out.println("Hello, Java!");
    }

    private void greet() {
        System.out.println("Hi!");
    }
}
```
greet()라는 똑같은 메서드명을 사용하기 위해서는 오버로딩이 필요한데,
오버로딩의 조건 중 매개변수의 갯수가 같지 않아야 한다는 조건을 불만족했기 때문에
해당 메서드를 호출할 때 오류가 발생한다.


## 4. 다음 요구사항을 만족하는 클래스를 완성하시오.
```
클래스 이름: Student

필드: 이름(String), 나이(int)

생성자: 이름과 나이를 매개변수로 받아 초기화

printInfo() 메서드: “이름: 홍길동, 나이: 20세” 형태로 출력
```
public class Student{
    String name;
    int age;

    public Student(String name, int age){
        this.name = name;
        this.age = age;
    }

    public void printInfo(){
        System.out.printf("이름: %s, 나이: %d세\n",this.name,this.age);
    }

}

public static void main(String[] args){
    Student student = new Student("홍길동",20);

    student.printInfo();
}

## 5. 객체를 메서드의 매개변수로 넘겼을 때에도 원본이 변경되는 이유를 설명하시오.
    매개변수로 주소가 넘어가기 때문에 원본이 변경된다.
    매개변수로 주소의 값을 복사하여 전달하기 때문에, 메서드 안에서도 그 참조값을 통해 같은 객체의 필드에 접근 및 변경이 가능하다.


## 6. 아래 코드에서 변수 a와 b의 메모리 참조 구조를 설명하고, 출력 결과를 예상하시오.
```java
class Box {
    int value;
}

public class ReferenceExample {
    public static void change(Box b) {
        b.value = 100;
        b = new Box();
        b.value = 200;
    }

    public static void main(String[] args) {
        Box a = new Box();
        a.value = 10;

        change(a);

        System.out.println(a.value);
    }
}
```
출력결과 : 100
Box a = new Box(); a.value = 10; -> Heap에 value = 10인 Box객체 생성
변수 a에는 박스 객체의 주소 값이 들어있다.
change(a) 호출시 매개변수 b는 a와 같은 객체를 참조한다.
b.value = 100; -> a.value = 100 이 된다. (같은 객체이기 때문에)
메서드 안에서 b = new Box() -> b는 새로운 객체를 참조한다. 단, a는 여전히 원래 객체를 참조
b.value = 200; -> 새로운 객체의 value를 변경할 뿐, a는 바뀌지 않는다.


## 7. super 키워드와 this 키워드의 차이점을 설명하시오
this : 같은 클래스의 다른 생성자나 필드 값을 참조할 때 사용한다.
super : 부모 클래스의 생성자나 필드에 접근하기 위해 사용한다.

## 8. Overloading과 Overriding에 대한 개념을 설명하시오
Overloading : 생성자나 메서드를 호출할 때 매개변수의 개수, 순서가 다르면 알맞은 생성자나 메서드를 생성해야하는데, 이 때 같은 이름으로 사용하면서 중복된 값을 줄여주기 위해 사용하는 것이 오버로딩이다.
(메서드의 중복정의)
Overriding : 부모 클래스의 메서드를 자식 클래스에서 가져와 재정의하기 위한 것이 오버라이딩이다. (상속관계에서만 가능하고, 내용빼고는 전부 같아야한다.)
(메서드의 재정의)
## 9. 추상 클래스와 인터페이스의 차이점을 설명하세요
추상클래스는 상속관계에서만 가능하고, 인터페이스는 관계없이 사용 가능하다.

추상 클래스는 상속의 발전된 형태 -> 자식에게 상태와 기능을 줄 수 있다.
인터페이스는 관계가 없는 것들에게도 기능을 전수해 줄 수 있다.

## 10. 다음 코드의 실행 결과로 옳은것은?
```java
class A {
    void show() { System.out.println("A"); }
}

class B extends A {
    void show() { System.out.println("B"); }
}

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.show();
    }
}
``` 
1. A
2. B
3. 컴파일 오류
4. 런타임 오류

2번

## 11. 문자열을 대문자로 변환하는 람다식을 작성하고, 이를 함수형 인터페이스에 할당하여 "hello" → "HELLO" 를 출력하시오.

@FunctionalInterface
public interface change{
    String upper(String string);
}

public static void main(String[] args) {
		
    Change c_lamda = (String string) -> {return string.toUpperCase();};  
    
    System.out.println(c_lamda.upper("hello"));
		
}

## 12. 문자열 리스트에서 길이가 4 이상인 문자열만 필터링하여, 알파벳 순으로 정렬 후 출력하는 스트림 코드를 작성하시오.

List<String> words = Arrays.asList("apple", "dog", "banana", "cat", "grape");

words.stream().filter(x -> x.length() >= 4).sorted().forEach(System.out::println);

## 13. 아래의 코드를 보고 출력 결과를 예상하여 쓰시오
```java
class Person {
    String name;
}

public class ReferenceTest {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.name = "Alice";

        Person p2 = p1;
        p2.name = "Bob";

        System.out.println(p1.name);
    }
}
```
Bob

## 아래의 코드를 보고 출력결과를 작성하세요
```java
class T1{
    int a = 5;
}
class T2 extends T1{
    int a = 55;

    void function(int i){
        System.out.print(super.a);
    }
    void function(){
        System.out.print(super.a + a);
    }
    void function(T i){
        System.out.print(a);
    }
    public static void main(String[] args) {
        T2 t = new T2();
        t.function(1);
        t.function();
        t.function(1.0);
    }
}
```
5
60
55
56055 정답

## 14. 위 코드에서 p1과 p2가 참조하는 대상은 서로 다른가? 그 이유도 함께 설명하시오.
Person p2 = p1; 에서 p2의 주소가 p1의 주소와 같아지게 되므로 참조하는 대상이 같다.

## 15. 다음 Java 코드를 실행했을 때 출력결과를 쓰시오
```java
abstract class Vehicle {
    private String name;

    abstract public String getName(String val);

    public String getName() {
        return "Vehicle name: " + name;
    }

    public void setName(String val) {
        name = val;
    }
}

class Car extends Vehicle {
    public Car(String val) {
        setName(val);
    }

    @Override
    public String getName(String val) {
        return "Car name: " + val;
    }

    public String getName(byte val[]) {
        return "Car name: " + val;
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle obj = new Car("Spark");
        System.out.print(obj.getName());
    }
}
```
Car name: Spark
Vehicle name : Spark 정답

## 16. 다음 데이터에서 80점 이상인 학생만 출력하세요
```java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 85);
scores.put("Bob", 72);
scores.put("Charlie", 90);
```
Set<Map.Entry<String, Integer>> students = scores.entrySet();
    
for(Map.Entry<String, Integer> student : students) {
    if(student.getValue() >= 80) {
    System.out.println(student.getKey());
    }
}


## 17. 학생 성적 관리 프로그램 구현
- 한 학급에는 여러 명의 학생이 있으며, 각 학생은 여러 국,영,수 시험을 응시한 점수를 가지고 있다.

```
학생의 이름과 그 학생의 시험 점수들이 주어진다.

모든 학생의 이름과 점수를 효율적으로 저장할 수 있는 구조를 설계하라.

각 학생의 평균 점수를 계산하고, 평균이 80점 이상인 학생만 이름과 평균 점수를 출력하라.
```
### 힌트
- 여러 점수를 하나의 값으로 저장하는 것은 비효율적일 수 있음