# Rule 137 — 1차원 세포 자동자

> Elementary cellular automaton rule 137, rendered as an ASCII strip. Zero dependencies.

**2026-11-09** · daily-lab day project

## 뭐 하는 건가

8비트짜리 규칙 하나가 101칸 띠 위에서 24세대를 굴러가면 프랙탈이 나온다. 상태는 현재 한 줄만 들고 있으면 되므로 메모리는 세대 수와 무관하다. 인자를 바꾸면 나머지 255개 규칙도 전부 볼 수 있다.

## 어떻게 만들어졌나

모델을 쓸 수 없을 때 도는 오프라인 생성기가 만들었다. 파라미터는 날짜에서 결정론적으로 뽑힌다 — 규칙 137 · 폭 101 · 24세대.

## 실행

```bash
node index.js 137
```

## 파일

- `index.js`

---

매일 하나씩 만드는 [daily-lab](https://github.com/456rtyfgh/daily-lab)에서 자동 생성됐다.
