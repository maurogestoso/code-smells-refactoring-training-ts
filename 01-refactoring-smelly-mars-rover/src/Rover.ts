// @ts-nocheck

import { Direction } from "./Direction";
import { Coordinates } from "./Coordinates";

export class Rover {
  private directionType: Direction;
  private coordinates: Coordinates;

  constructor(x: number, y: number, direction: string) {
    this.coordinates = new Coordinates(x, y);
    this.directionType = Direction.create(direction);
  }

  public receive(commandsSequence: string) {
    for (let i = 0; i < commandsSequence.length; ++i) {
      const command = commandsSequence.substring(i, i + 1);

      if (command === "l") {
        this.rotateLeft();
      } else if (command === "r") {
        // Rotate Rover right
        if (this.directionType.isFacingNorth()) {
          this.directionType = Direction.create("E");
        } else if (this.directionType.isFacingSouth()) {
          this.directionType = Direction.create("W");
        } else if (this.directionType.isFacingWest()) {
          this.directionType = Direction.create("N");
        } else {
          this.directionType = Direction.create("S");
        }
      } else {
        // Displace Rover
        let displacement1 = -1;

        if (command === "f") {
          displacement1 = 1;
        }
        let displacement = displacement1;

        if (this.directionType.isFacingNorth()) {
          this.coordinates = this.coordinates.moveAlongY(displacement);
        } else if (this.directionType.isFacingSouth()) {
          this.coordinates = this.coordinates.moveAlongY(-displacement);
        } else if (this.directionType.isFacingWest()) {
          this.coordinates = this.coordinates.moveAlongX(-displacement);
        } else {
          this.coordinates = this.coordinates.moveAlongX(displacement);
        }
      }
    }
  }

  private rotateLeft() {
    this.directionType = this.directionType.rotateLeft();
  }
}
