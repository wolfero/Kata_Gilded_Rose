import { Item } from "../Item";
import { GildedRose } from "../GildedRose";


describe("Gilded Rose should", () => {
  it("decreases by one point quality per day in normal items", () => {
    const normalItems: Item[] = [new Item("normal", 1, 1)];
    const app: GildedRose = new GildedRose(normalItems);

    app.updateQuality();

    expect(0).toEqual(app.items[0].quality);
  });
});
