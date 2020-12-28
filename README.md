# Movie App 2020
![1](https://user-images.githubusercontent.com/45224987/103220181-f9b5dc80-4962-11eb-9bee-074ae16074ea.jpg)  


이책보고 만든 리액트 사이트  
입문용으론 좋은데 개념정리를 위해 여러번 읽고 다른 개발도 해봐야 할듯  


앱 실행 시나리오 -> 

최초로 render() 함수가 실행 -> 

App컴포넌트가 마운트(compoenentDidMount() 함수 실행되면서 getMovies()함수 실행)  
getMovies()함수에 시간이 많이 걸리는 axios.get()이 포함되어있음 그래서 getMovies() 함수에 async를 axios.get()에 await를 붙였음(async,await는 짝꿍)

# 용어 정리
리액트 장점=필요한 부분만 다시 그려줌  
JSX = 자바스크립트와 HTML을 조합한것  
props = 컴포넌트에서 컴포넌트로 전달하는 데이터 props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호{}로 값을 감싸야함  
state = 동적 데이터를 다룰 때 사용  
리액트는 최종으로 단 한개의 컴포넌트를 그려야함  
라우터란 화면이동을 시켜주는 장치  
exact = pathprops와 일치하는 URL에만 반응하도록 만들어준다  