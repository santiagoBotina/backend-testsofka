import { INoTripulada } from '../interfaces/noTripulada.interface';
import { Spaceship } from './spaceship.class';

export class NoTripulada extends Spaceship implements INoTripulada {
  constructor(
    name: string,
    weight: number,
    width: number,
    power: number,
    fuel: string,
    canTransport: boolean,
    speed: number,
  ) {
    super(name, weight, width, power, fuel, canTransport, speed); // must call super()
  }

  investigatePlanets(): string {
    const planets: string[] = [
      'Mercury',
      'Venus',
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn',
      'Uranus',
      'Neptune',
    ];
    const random: number = Math.round(Math.random() * planets.length);

    const randomPlanet: string = planets[random];

    return `We're in ${randomPlanet} exploring`;
  }

  autoEngage(): string {
    const random: number = Math.round(Math.random() * 10);
    if (random % 2 == 0) return `The spaceship was successfully engaged`;
    else return `The spaceship failed during the engagement`;
  }
}
