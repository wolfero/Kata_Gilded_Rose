export class ManageItem {
    private readonly minQuality: number = 0;

    public formatNegativeQuality(quality: number): number {
        if (quality < this.minQuality) {
            quality = this.minQuality;
        }
        return quality;
    }
}