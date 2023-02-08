// @ts-nocheck

import {Direction} from "./Direction";

export class Rover {

    private y: number;
    private x: number;
    private directionType: Direction;

    constructor(x: number, y: number, direction: string) {
        this.setCoordinates(x, y);
        this.setDirection(direction);
    }

    private setCoordinates(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    private setDirection(direction: string) {
        this.directionType = new Direction(direction);
    }

    public receive(commandsSequence: string) {
        for (let i = 0; i < commandsSequence.length; ++i) {
            const command = commandsSequence.substring(i, i + 1);

            if (command === "l") {

                // Rotate Rover left
                if (this.directionType.isFacingNorth()) {
                    this.setDirection("W");
                } else if (this.directionType.isFacingSouth()) {
                    this.setDirection("E");
                } else if (this.directionType.isFacingWest()) {
                    this.setDirection("S");
                } else {
                    this.setDirection("N");
                }
            } else if (command === "r") {

                // Rotate Rover right
                if (this.directionType.isFacingNorth()) {
                    this.setDirection("E");
                } else if (this.directionType.isFacingSouth()) {
                    this.setDirection("W");
                } else if (this.directionType.isFacingWest()) {
                    this.setDirection("N");
                } else {
                    this.setDirection("S");
                }
            } else {

                // Displace Rover
                let displacement1 = -1;

                if (command === "f") {
                    displacement1 = 1;
                }
                let displacement = displacement1;

                if (this.directionType.isFacingNorth()) {
                    this.setCoordinates(this.x, this.y + displacement);
                } else if (this.directionType.isFacingSouth()) {
                    this.setCoordinates(this.x, this.y - displacement);
                } else if (this.directionType.isFacingWest()) {
                    this.setCoordinates(this.x - displacement, this.y);
                } else {
                    this.setCoordinates(this.x + displacement, this.y);
                }
            }
        }
    }
}
