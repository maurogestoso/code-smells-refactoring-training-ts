export class Coordinates {
  constructor(private x: number, private y: number) {}

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  moveAlongY(displacement: number) {
    return new Coordinates(this.x, this.y + displacement);
  }

  moveAlongX(displacement: number) {
    return new Coordinates(this.x + displacement, this.y);
  }
}
