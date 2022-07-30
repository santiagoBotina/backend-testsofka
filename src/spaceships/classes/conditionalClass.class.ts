// import { Lanzadera } from './lanzadera.class';
// import { NoTripulada } from './noTripulada.class';
// import { Spaceship } from './spaceship.class';
// import { Tripulada } from './tripulada.class';

// export class ConditionalClass extends Spaceship {
//   constructor(
//     name: string,
//     weight: number,
//     width: number,
//     power: number,
//     fuel: string,
//     canTransport: boolean,
//     speed: number,
//   ) {
//     super(name, weight, width, power, fuel, canTransport, speed);
//   }

//   createSpaceship(fuel: string) {
//     if (fuel == 'tipo 1') {
//       return new NoTripulada(
//         this.name,
//         this.weight,
//         this.width,
//         this.power,
//         this.fuel,
//         this.canTransport,
//         this.speed,
//       );
//     } else if (fuel == 'tipo 2') {
//       return new Lanzadera(
//         this.name,
//         this.weight,
//         this.width,
//         this.power,
//         this.fuel,
//         this.canTransport,
//         this.speed,
//       );
//     } else {
//       return new Tripulada(
//         this.name,
//         this.weight,
//         this.width,
//         this.power,
//         this.fuel,
//         this.canTransport,
//         this.speed,
//       );
//     }
//   }
// }
