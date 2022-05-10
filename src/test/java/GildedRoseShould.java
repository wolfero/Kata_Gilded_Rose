import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GildedRoseShould {

    @Test
    public void decreases_by_one_point_quality_per_day_in_normal_items() {
        Item[] items = new Item[] { new Item("normal_item", 1, 1) };
        GildedRose app = new GildedRose(items);

        app.updateQuality();

        assertEquals(0, app.items[0].quality);
    }

    @Test
    public void decreases_by_two_point_quality_per_day_in_conjured_items() {
        Item[] items = new Item[] { new Item("conjured_item", 1, 2) };
        GildedRose app = new GildedRose(items);

        app.updateQuality();

        assertEquals(0, app.items[0].quality);
    }
}
