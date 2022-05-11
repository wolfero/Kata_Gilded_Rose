import { Item } from "./Item";

export class ConjuredItem extends Item {

    private readonly qualityDecreaseRate: number = 2;

    public decreasesQuality(): void {
        this.quality = this.quality - this.qualityDecreaseRate;
    }
}