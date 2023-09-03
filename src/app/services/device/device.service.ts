import { Injectable } from '@angular/core';
// import { Sim } from '@jonz94/capacitor-sim';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  constructor() { }

  async getSimCards() {
    // const { simCards } = await Sim.getSimCards();
    // console.log(simCards);

    // return simCards;
    return [];
  }
}
