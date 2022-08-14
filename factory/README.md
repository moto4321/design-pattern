싱글톤 패턴과 같이 생성자 카테고리에 속함

다수의 또 다른 종류의 오브젝트나 클래스가 있을 때 효율적으로 생성할 수 있도록 도와 주는 패턴,
각각의 constructor를 호출해서 생성하는게 아닌 하나의 interface를 통해서 여러가지 다른 종류의 오브젝트들을 생성해 낸다.

동적환경에 최적화된 패턴이다.

예를 들어 API에서 데이터를 fetching하고 그 결과에 따라서 동적으로 무언가를 구현해야할 때, 특히 반복적으로 무언가를 많이 만들어내야 할 때 쓰이는 패턴이다.

![factory](../img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202022-08-14%20%EC%98%A4%ED%9B%84%208.18.20.png)