const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

// 입력

// 첫째 줄 - 현재 시각
// - 시 A (0 ≤ A ≤ 23) 분 B (0 ≤ B ≤ 59)
// - 정수로 빈칸을 사이에 두고 순서대로 주어진다.

// 두 번째 - 요리하는 데 필요한 시간
// - C (0 ≤ C ≤ 1,000) - 분 단위

// 출력 - 요리가 끝나는 시간 (시 분)

// ---

/*
* 현재 분과 요리 시간을 더한 값이 시간 단위를 넘어 가는 경우
  - 분 단위 합산 후 나누기 60
  - 몫이 존재하면 시간을 몫만큼 증가
  - 몫이 존재하지 않으면 분 단위 만큼 분 증가
* 요리 시간이 23시를 넘는 경우
  - 전체 걸리는 시간에서 - 24
*/

const currentHour = parseInt(input[0].split(' ')[0]);
const currentMinute = parseInt(input[0].split(' ')[1]);
const cookingTime = parseInt(input[1]);

/*
* 수정
  - 시간과 분을 각각 총 걸리는 분으로 합산하여 시간은 60으로 나눠 몫을 구하고 분은 60으로 나눠 나머지 구하기
  - 구한 값을 기준으로 조건 설정
*/

const hourResult = Math.floor(((currentHour * 60) + currentMinute + cookingTime) / 60);
const minuteResult = ((currentHour * 60) + currentMinute + cookingTime) % 60;

if (hourResult > 23) {
  console.log(hourResult - 24, minuteResult);
} else {
  console.log(hourResult, minuteResult);
}