import { Coordinates } from "./Coordinates";

export abstract class Direction {
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
    if (direction === "N") {
      return new North();
    } else if (direction === "S") {
      return new South();
    } else if (direction === "W") {
      return new West();
    }
    return new East();
  }

  abstract rotateLeft(): Direction;

  abstract rotateRight(): Direction;

  move(coordinates: Coordinates, displacement: number): Coordinates {
    if (this.isFacingNorth()) {
      return coordinates.moveAlongY(displacement);
    } else if (this.isFacingSouth()) {
      return coordinates.moveAlongY(-displacement);
    } else if (this.isFacingWest()) {
      return coordinates.moveAlongX(-displacement);
    } else {
      return coordinates.moveAlongX(displacement);
    }
  }
}

class North extends Direction {
  constructor() {
    super("N");
  }
  rotateLeft(): Direction {
    return Direction.create("W");
  }
  rotateRight(): Direction {
    return Direction.create("E");
  }
}

class South extends Direction {
  constructor() {
    super("S");
  }
  rotateLeft(): Direction {
    return Direction.create("E");
  }
  rotateRight(): Direction {
    return Direction.create("W");
  }
}

class West extends Direction {
  constructor() {
    super("W");
  }
  rotateLeft(): Direction {
    return Direction.create("S");
  }
  rotateRight(): Direction {
    return Direction.create("N");
  }
}

class East extends Direction {
  constructor() {
    super("E");
  }
  rotateLeft(): Direction {
    return Direction.create("N");
  }
  rotateRight(): Direction {
    return Direction.create("S");
  }
}
