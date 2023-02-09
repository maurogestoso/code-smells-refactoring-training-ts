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

  rotateRight() {
    if (this.isFacingNorth()) {
      return Direction.create("E");
    } else if (this.isFacingSouth()) {
      return Direction.create("W");
    } else if (this.isFacingWest()) {
      return Direction.create("N");
    } else {
      return Direction.create("S");
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
}

class South extends Direction {
  constructor() {
    super("S");
  }
  rotateLeft(): Direction {
    return Direction.create("E");
  }
}

class West extends Direction {
  constructor() {
    super("W");
  }
  rotateLeft(): Direction {
    return Direction.create("S");
  }
}

class East extends Direction {
  constructor() {
    super("E");
  }
  rotateLeft(): Direction {
    return Direction.create("N");
  }
}
