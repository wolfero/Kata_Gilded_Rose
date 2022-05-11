import { Item } from './Item';

export class GildedRose {
  public items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  public updateQuality() {
    this.items.forEach(item => {
      if (item.name !== 'Aged Brie'
        && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            if (item.name.startsWith('conjured')) {
              item.quality = this.formatNegativeQuality(item.quality - 2);

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

  private formatNegativeQuality(quality: number): number {
    if (quality < 0) {
      quality = 0;
    }
    return quality;
  }
}
