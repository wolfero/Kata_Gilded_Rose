public class ManageItems {

    private final int minQuality = 0;

    public int formatNegativeQuality(int quality) {
        if (quality < minQuality) {
            quality = minQuality;
        }
        return quality;
    }
}
