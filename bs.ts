import mapper from "./mapper";

export default class Bs {
  private offset: number;
  private year: number;
  private month: number;
  private day: number;
  private jsDate: Date;

  constructor(literal: string) {
    const regex = /(\d{4})-(\d{2})-(\d{2})/;
    const match = literal.match(regex);

    if (!match) {
      throw new Error("Invalid date format");
    }

    const [, year, month, day] = match;

    this.year = parseInt(year!);
    this.month = parseInt(month!);
    this.day = parseInt(day!);

    if (!mapper.validate(this.year, this.month, this.day)) {
      throw new Error("Invalid date");
    }

    this.offset = mapper.offset(this.year, this.month, this.day);
    this.jsDate = new Date(mapper.ad.getTime() + this.offset * 86400000);
  }

  toString() {
    return `${this.year.toString().padStart(4, "0")}-${this.month.toString().padStart(2, "0")}-${this.day.toString().padStart(2, "0")}`;
  }

  toJsDate() {
    return this.jsDate;
  }
}
