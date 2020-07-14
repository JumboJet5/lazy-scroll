import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-raw',
  templateUrl: './smart-raw.component.html',
  styleUrls: ['./smart-raw.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartRawComponent implements OnInit, OnDestroy {
  constructor() { }

  private _item: { id: number, data: number };

  public get item(): { id: number; data: number } {
    return this._item;
  }

  @Input()
  public set item(value: { id: number; data: number }) {
    this._item = value;
    console.log(`Update item #${this._item ? this._item.id : 'unknown'}:`, this._item);
  }

  ngOnInit(): void {
    console.log(`Init item #${this._item ? this._item.id : 'unknown'}:`, this._item);
  }

  public ngOnDestroy(): void {
    console.log(`Destroy item #${this._item ? this._item.id : 'unknown'}:`, this._item);
  }
}
