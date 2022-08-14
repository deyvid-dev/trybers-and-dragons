import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
}

export default Necromancer;
