import table from "./table.json";
import { search } from "./utils";

function buildMapTable(table: number[][]) {
  const mapTable: {
    [year: number]: {
      [month: number]: number;
    };
  } = {};

  for (const row of table) {
    const year = row[0]!;
    mapTable[year] = {};

    for (let i = 1; i < row.length; i++) {
      mapTable[year][i] = row[i]!;
    }
  }

  return mapTable;
}

function buildCfTable(table: number[][]) {
  const cfTable: {
    yearly: {
      year: number;
      cf: number;
      total: number;
      monthly: {
        cf: number;
        month: number;
        total: number;
      }[];
    }[];
    total: number;
    base: number;
  } = {
    yearly: [],
    total: 0,
    base: table[0]![0]!,
  };

  for (const row of table) {
    const details: (typeof cfTable)["yearly"][0] = {
      cf: 0,
      year: row[0]!,
      total: 0,
      monthly: [],
    };

    for (let i = 1; i < row.length; i++) {
      details.total += row[i]!;
      details.monthly.push({
        cf: details.total,
        month: i,
        total: row[i]!,
      });
    }

    cfTable.total += details.total;
    details.cf = cfTable.total;

    cfTable.yearly.push(details);
  }

  return cfTable;
}

const mapTable = buildMapTable(table.bs);
const cfTable = buildCfTable(table.bs);
const ad = new Date(table.ad);

const mapper = {
  validate(year: number, month: number, day: number) {
    return (
      Boolean(mapTable[year]) &&
      (!month || Boolean(mapTable[year]![month])) &&
      (!day || Boolean(day >= 1 && day <= mapTable[year]![month]!))
    );
  },

  offset(year: number, month: number, day: number) {
    const cfEntry = search(
      cfTable.yearly,
      { year, monthly: [], cf: 0, total: 0 },
      (e) => e.year,
    )!;

    const cfMonth = search(
      cfEntry.monthly,
      { month, total: 0, cf: 0 },
      (e) => e.month,
    )!;

    return cfEntry.cf - cfEntry.total + (cfMonth.cf - cfMonth.total) + day - 1;
  },

  ad,
};

export default mapper;
