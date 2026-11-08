// 1차원 엘리멘터리 세포 자동자.
// 규칙 하나(0~255)가 세 칸의 이웃 상태를 다음 세대의 한 칸으로 접는다.
// 상태는 현재 세대 한 줄만 들고 있는다 — 메모리는 세대 수와 무관하다.

const ALIVE = '█';
const DEAD = ' ';

/** 규칙 번호를 8개 이웃 패턴(111..000)에 대한 비트 테이블로 편다. */
function ruleTable(rule) {
  return Array.from({ length: 8 }, (_, i) => (rule >> i) & 1);
}

/** 이웃 세 칸을 0..7 인덱스로 접는다. 경계는 원형으로 감는다. */
function step(row, table) {
  const n = row.length;
  const next = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const l = row[(i - 1 + n) % n];
    const c = row[i];
    const r = row[(i + 1) % n];
    next[i] = table[(l << 2) | (c << 1) | r];
  }
  return next;
}

function render(row) {
  let out = '';
  for (let i = 0; i < row.length; i++) out += row[i] ? ALIVE : DEAD;
  return out;
}

function main() {
  const rule = Number(process.argv[2] ?? 137);
  const width = Number(process.argv[3] ?? 101);
  const gens = Number(process.argv[4] ?? 24);

  if (!Number.isInteger(rule) || rule < 0 || rule > 255) {
    console.error('rule must be an integer from 0 to 255. Got: ' + process.argv[2]);
    process.exit(1);
  }
  if (!Number.isInteger(width) || width < 3) {
    console.error('width must be an integer of at least 3.');
    process.exit(1);
  }

  const table = ruleTable(rule);
  let row = new Uint8Array(width);
  row[width >> 1] = 1; // 가운데 한 칸만 살려서 시작

  console.log('rule ' + rule + '  width ' + width + '  generations ' + gens);
  console.log('-'.repeat(width));
  for (let g = 0; g < gens; g++) {
    console.log(render(row));
    row = step(row, table);
  }
}

main();
