public class QualityUtil {
    final int normalItemsDecrease = 1;
    final int conjuredItemsDecrease = 2;

    public int decreasesNormalItems(int quality) {
        return quality - normalItemsDecrease;
    }

    public int decreasesConjuredItems(int quality) {
        final int newQuality = quality - conjuredItemsDecrease;
        return formatNegativeQuality(newQuality);
    }

    private int formatNegativeQuality(int quality) {
        if (quality < 0) {
            quality = 0;
        }
        return quality;
    }
}
