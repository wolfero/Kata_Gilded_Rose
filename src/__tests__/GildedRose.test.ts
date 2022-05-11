import { Item } from "../Item";
import { GildedRose } from "../GildedRose";
import { ConjuredItem } from "../ConjuredItem";


describe("Gilded Rose should", () => {
  it("decreases by one point quality per day in normal items", () => {
    const normalItems: Item[] = [new Item("normal_item", 1, 1)];
    const app: GildedRose = new GildedRose(normalItems);

    app.updateQuality();

    expect(app.items[0].quality).toEqual(0);
  });

  it("decreases by two point quality per day in conjured items", () => {
    const normalItems: ConjuredItem[] = [new ConjuredItem("conjured_item", 1, 2)];
    const app: GildedRose = new GildedRose(normalItems);

    app.updateQuality();

    expect(app.items[0].quality).toEqual(0);
  });

  it("not decreases conjured items quality under zero", () => {
    const normalItems: ConjuredItem[] = [new ConjuredItem("conjured_item", 1, 1)];
    const app: GildedRose = new GildedRose(normalItems);

    app.updateQuality();

    expect(app.items[0].quality).toEqual(0);
  });
});
