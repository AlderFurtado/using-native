import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  findPrimeNumbers(limit:number): number[];
}

export default TurboModuleRegistry.get<Spec>('CalculatorModule');