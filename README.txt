## Node Practices

1. 패키지 
    - 완전한 애플리케이션(nodedeamon, babel, webpack)    
    - 프로젝트에서 사용하는 모듈(라이브러리)


2. 의존성 (Dependency)
    - 개발 하는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 패키지
    - 일반 의존성
        개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함
        $[project-ex01] nmp i (i로 설치)


    - 개발 의존성
        개발에 필요하거나 도움이 되는 패키지(dev tool) 배포에 포함되지 않는다.
        $[project-ex01] nmp i -D ...


3. 패키지 설치 방식(패키지는 외부 라이브러리)
    1) 전역 설치(global) 설치 : 여러 프로젝트에서 공통으로 사용하는 도구를 설치 할 때 사용한다.
    2) 지역(project local) 설치 : 특정 프로젝트에 종속적인 도구나 라이브러리
    3) 패키지 설치(패키지는 app이 될수도 라이브러리가 될 수도 있다.)
        $[project-ex01] nmp i ejs (local(설치), general dependency)
        $[project-ex01] nmp i -D nodemon (local, dev, dependency)
        $[project-ex01] nmp i -g gulp (global)
        $[project-ex01] npx gulp --version ( 설치 확인)

    4) 패키지 삭제
        $[project-ex01] npm un ejs (local install 삭제)
        $[project-ex01] npm un -g gulp (global install 삭제)
        $[project-ex01] npx gulp --version ( 설치 확인)

4. Node(JavaScript) Project(FE/BE Application, Package) 생성
    1) 프로젝트 생성 (mkdir)
    2) 프로젝트 이동 (cd)
    3) 프로젝트 초기화 : 프로젝트 페니페스트 파일(package.json) 생성하는 작업
        $[project-ex02] npm init  -y 를 붙여서 한거번에 만든다. 초기화 하는 방법은 node_modules 삭제 또는 ex02의 packagejson 삭제


5. Module
    1) 코어 모듈(fs, os, ..... node에서 제공해 주는 모듈)
    2) 파일 모듈 : 파일 경로로 불러 와서 모듈안의 함수, 객체를 사용한다.
    3) npm 모듈(npm으로 패키지 설치시 node_modules에 생긴다.): npm을 통해서 node_modules에 설치하고 사용하는 모듈
        - 원격 배포
        - 로컬 배포
        

4.  Node Project(BE/FE) 생성


#### 5. Module


### #6. npmjs.com(npm registry)에 내 패키지 배포해보기(이거는 생략, https:// 강사님 깃허브에 있다.)


#### 7. helloweb - ex01(맨바닥)


#### 8. helloweb - ex02(express)


# (오늘 할것들)