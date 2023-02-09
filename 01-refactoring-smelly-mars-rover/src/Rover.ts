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
        this.rotateRight();
      } else {
        // Displace Rover
        let displacement1 = -1;

        if (command === "f") {
          displacement1 = 1;
        }
        let displacement = displacement1;

        this.move(displacement);
      }
    }
  }

  private move(displacement: number) {
    this.coordinates = this.directionType.move(this.coordinates, displacement);
  }

  private rotateRight() {
    this.directionType = this.directionType.rotateRight();
  }

  private rotateLeft() {
    this.directionType = this.directionType.rotateLeft();
  }
}
