# 백준 온라인 저지

---

## 입력 처리 방법

### fs 모듈

```js
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
```

- 가장 기본적인 형태
  - BOJ 채점 서버 내 입력 예제 파일을 `fs` 모듈 관련 메서드로 내용을 읽어 입력 데이터를 처리하는 방법
- BOJ node.js 관련 컴파일 예제코드
- `fs` 모듈을 이용하여 입출력 처리
- BOJ 서버 내에 `/dev/stdin` 표준 입력을 관련 메서드로 이용하여 처리
  - [fs.readFileSync()](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsreadfilesyncpath-options)
    - 해당 경로에 있는 내용을 문자열이나 버퍼(?)로 반환
  - toString()
    - 문자열 처리
  - split()
    - 구분자를 통해 나눠진 문자열을 배열(Array)로 반환
- 코드 해석
  - fs관련 메서드와 문자열 관련 메서드를 이용하여 입력되는 데이터를 최종적으로 배열 데이터로 처리 - `input`
  - 배열 데이터 내에서 인덱스를 이용하여 처리하고자 하는 데이터로 변수에 담아 코드 작성 - `a, b`
- 실제 연습 시
  - readFileSync 는 경로 내에 있는 파일에 대한 내용을 해석하는 메서드
  - 편집기에서 주로 작업하는 경우라면 경로 내에 입력용 파일을 따로 만들어서 사용하거나 스크립트 내부에 처음부터 입력 데이터를 붙여넣어 사용 (어떠한 방법이든 표준 입력에 대한 코드가 있어야 한다 - fs 모듈)
  - 파일을 연결하여 사용한 경우 BOJ 제출 시 `/dev/stdin` 경로로 다시 바꾸어 제출
- 템플릿 리터럴로 입력 대체 관련 자료
  - 입력 처리 관련 자료를 찾다가 알게 된 블로그 정보 - [참고 링크](https://degurii.tistory.com/108)
  - 블로그 작성 자는 삼항 연산자를 이용하여 BOJ의 Linux 환경이 아니면 스크립트 내부에 템플릿 연산자를 이용하여 처리하도록 설정하였다.
    - `const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `입력데이터`).split('\n');`
  - 위와 같이 사용하면 로컬에서 작업할 때는 템플릿에 붙여 넣기한 입력데이터를 사용하고, 제출 시엔 따로 수정없이 제출이 가능하다고 한다.
- 위 코드는 기본 형태로 문제 특성에 따라 여러 메서드를 추가하여 사용할 것
  - 단순히 하나의 문자열을 입력으로 처리하는 경우에는 split()등을 쓸 필요가 없다.
    - 간혹 입력 처리에서 개행문자가 추가되는 경우가 있어 제출이 안되는 경우 문자열 변환 후 `trim()`으로 제거해주어야 한다.
  - 관련 블로그 - [참고 링크](https://tesseractjh.tistory.com/39)

> 일단, 텍스트 파일로 입력 처리를 로컬에서 진행하기로 결정. 너무 번거롭다고 여겨질 때 위 방법을 참고해봐야 겠다.

### readline 방법

```js
// 예제 입력이 한줄로 되어 있을 때
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(line);

  rl.close();
}).on("close", function() {
  process.exit();
});

-----------------------------------------

// 예제 입력이 여러줄로 되어 있을 떼
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  console.log(input);
  process.exit();
});

// 출처: https://hanch-dev.tistory.com/4 [HanCh_Dev:티스토리]
```

- fs 모듈로 진행이 안되고 **EACCES** 에러가 발생할 때 사용하는 방법(접근 권한 관련 문제)
  - readline 모듈을 통해 입출력 인터페이스를 구축하여 사용
  - 위 코드는 주석에 표시한 대로 해당 블로그를 참고했다.
- 따로 입력 파일이나 임시 데이터를 만들어 입력을 처리하는 것이 아니라 터미널에서 직접 입력값을 넣어 출력 결과를 확인한다.
  
>  관련 에러가 발생하는 [14681:사분면 고르기](https://www.acmicpc.net/problem/14681) 문제 같은 경우 입력이 2줄이라 그나마 괜찮지만, 입력 데이터가 많을 경우 터미널에 하나씩 쳐 보면서 출력 결과를 확인하는 것은 무리가 있다. 일단, fs모듈로 작성하고 처리 로직을 출력 인터페이스에 붙여 넣는 방식으로 해결하기로 결정.

---

## 출력 처리 방법

### 반복문 사용 시 하나의 변수에 담아 출력하기

```js
const fs = require('fs');
const inputDataPath = (process.platform === "linux" ? "/dev/stdin" : "input.txt");

const input = fs.readFileSync(inputDataPath).toString().trim();
const N = Number(input);

let result = '';

for (let i = 1; i <= N; i++) {
  result += i + '\n';
}

console.log(result);
```

- 반복문 사용 시 위 코드처럼 변수 하나로 출력해야 시간초과 오류를 해결할 수 있다. (ex. [2741 : N찍기 문제](https://www.acmicpc.net/problem/2741))
