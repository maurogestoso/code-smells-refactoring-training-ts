export class Direction {
  constructor(private direction: string) {}

  isFacingNorth() {
    return this.direction === "N";
  }

  isFacingSouth() {
    return this.direction === "S";
  }

  isFacingWest() {
    return this.direction === "W";
  }

  static create(direction: string): Direction {
    return new Direction(direction);
  }
}
