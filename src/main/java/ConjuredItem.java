public class ConjuredItem extends Item {

    public ConjuredItem(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    private final int qualityDecreaseRate = 2;

    public void decreasesQuality() {
        this.quality = this.quality - qualityDecreaseRate;
    }
}
