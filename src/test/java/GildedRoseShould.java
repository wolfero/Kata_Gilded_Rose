import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GildedRoseShould {

    @Test
    public void decreases_by_one_point_quality_per_day_in_normal_items() {
        Item normal_item = new Item("normal_item", 1, 1);
        Item[] items = new Item[]{normal_item};
        GildedRose app = new GildedRose(items);

        app.updateQuality();

        assertEquals(0, app.items[0].quality);
    }

    @Test
    public void decreases_by_two_point_quality_per_day_in_conjured_items() {
        ConjuredItem conjured_item = new ConjuredItem("conjured_item", 1, 2);
        ConjuredItem[] conjured_items = new ConjuredItem[]{conjured_item};
        GildedRose app = new GildedRose(conjured_items);

        app.updateQuality();

        assertEquals(0, app.items[0].quality);
    }

    @Test
    public void do_not_decreases_conjured_item_quality_under_zero() {
        ConjuredItem conjured_item = new ConjuredItem("conjured_item", -2, 4);
        ConjuredItem[] conjured_items = new ConjuredItem[]{conjured_item};
        GildedRose app = new GildedRose(conjured_items);

        app.updateQuality();

        assertEquals(1, app.items[0].quality);
    }
}
