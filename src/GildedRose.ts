import { ConjuredItem } from './ConjuredItem';
import { Item } from './Item';
import { ManageItem } from './ManageItem';

export class GildedRose {
  public readonly items: Item[];
  private readonly manageItem: ManageItem;

  constructor(items: Item[]) {
    this.items = items;
    this.manageItem = new ManageItem();
  }

  public updateQuality() {
    this.items.forEach(item => {
      if (item.name !== 'Aged Brie'
        && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            if (item.name.startsWith('conjured')) {
              const newConjuredItem: ConjuredItem = new ConjuredItem(
                item.name,
                item.sellIn,
                item.quality
              );
              newConjuredItem.decreasesQuality();
              item.quality = this.manageItem.formatNegativeQuality(newConjuredItem.quality);

            } else {
              item.quality = item.quality - 1;
            }
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;

          if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }

            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }

      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < 0) {
        if (item.name !== 'Aged Brie') {
          if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    });
  }
}
