# bs (Bikram Sambat)

A JavaScript/TypeScript utility for working with Bikram Sambat (BS) dates.

## Install

```bash
npm install bs
```

## Usage

```ts
import Bs from "bs";

const date = new Bs("2082-11-18");

date.getYear(); // 2082
date.getMonth(); // 11
date.getDay(); // 18
date.getDayOfWeek(); // 1-7

date.addDays(1);
date.addMonths(1);
date.addYears(1);

date.toString(); // YYYY-MM-DD
date.toJsDate(); // JavaScript Date
```

## Notes

- Runtime table validation is minimal. Keep `table.json` valid, structured, and sorted.
- Time and timezone handling are intentionally out of scope.
