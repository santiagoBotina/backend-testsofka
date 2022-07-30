export abstract class Spaceship {
  name: string;
  weight: number;
  width: number;
  power: number;
  fuel: string;
  canTransport: boolean;
  speed: number;

  create(): boolean {
    return true;
  }

  fly(): string {
    return 'Estoy volando';
  }

  constructor(
    name: string,
    weight: number,
    width: number,
    power: number,
    fuel: string,
    canTransport: boolean,
    speed: number,
  ) {
    this.name = name;
    this.weight = weight;
    this.width = width;
    this.power = power;
    this.fuel = fuel;
    this.canTransport = canTransport;
    this.speed = speed;
  }
}
