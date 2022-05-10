public class QualityUtil {
    final int normalItemsDecrease = 1;
    final int conjuredItemsDecrease = 2;

    public int decreasesNormalItems(int quality) {
        return quality - normalItemsDecrease;
    }

    public int decreasesConjuredItems(int quality) {
        return quality - conjuredItemsDecrease;
    }
}
