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

  rotateLeft() {
    if (this.isFacingNorth()) {
      return Direction.create("W");
    } else if (this.isFacingSouth()) {
      return Direction.create("E");
    } else if (this.isFacingWest()) {
      return Direction.create("S");
    } else {
      return Direction.create("N");
    }
  }
}
