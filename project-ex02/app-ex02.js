/**
 * 
 * posco-ict-math 파일 모듈 테스트
 * 
 * 로컬 배포
 * $[project-ex02] npm i ../posco-ict-math
 * 명령으로 설치 후 테스트 할 것.
 * 
 */

 var poscoMath = require("posco-ict-math");  //파일 모듈에서는 경로 다 지정해 준다.

 console.log(poscoMath.sum(10,20,30,40,50));
 console.log(poscoMath.max(10,20,30,40,50));
 console.log(poscoMath.min(10,20,30,40,50));
 