public class ManageItems {

    public int formatNegativeQuality(int quality) {
        if (quality < 0) {
            quality = 0;
        }
        return quality;
    }
}
