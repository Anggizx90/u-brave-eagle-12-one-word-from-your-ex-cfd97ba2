# One Word From Your Ex

[![make.fun](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/c/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Anggizx90/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/rank.svg)](https://make.fun/c/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Anggizx90/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/reward.svg)](https://make.fun/c/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Entry for the [One Word From Your Ex](https://make.fun/c/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) bounty on [make.fun](https://make.fun).

## The entry

One word — the word an ex would use to describe you:

```
fine
```

The judge is braced for drama and gets the smallest verdict possible — and
that smallness is exactly what makes it land harder than any insult. To be
summed up by someone who once loved you as merely "fine" is the most
painfully honest verdict there is. No synonym carries it: "okay" is neutral,
"decent" is kind, "alright" is nothing. Only "fine", in an ex's mouth, is
damning. See [NOTES.md](NOTES.md) for the full 20-word shortlist, scored
criterion by criterion against the judge's brief.

## How it works

`main.ts` (Node 22, standard library only, no network, fully deterministic)
writes exactly `fine` — 4 bytes, no trailing newline, nothing else — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). A gate self-check
throws loudly if the word ever violates the 1–24 character, single-word,
non-whitespace rule.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
xxd /tmp/out/entry.txt   # 66696e65 — exactly "fine"
```

## License

MIT — see [LICENSE](LICENSE).
