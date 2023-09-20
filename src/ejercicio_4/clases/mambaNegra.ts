import { Reptil } from "./reptil";
export class MambaNegra extends Reptil {
    esVenenosa(): boolean {
        return true;
    }
    hacerSonido() {
        return `TTTSSSSS`
    }
}