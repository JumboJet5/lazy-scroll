import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartTableComponent implements OnInit {
  public data$: Subject<{ id: number, data: number }[]> = new Subject<{ id: number, data: number }[]>();
  private _arraySize = 100;
  private _updateInterval = 1000;

  constructor() { }

  ngOnInit(): void {
    this._updateData();
    setInterval(() => this._updateData(), this._updateInterval);
  }

  private _updateData(): void {
    console.log('------Updating------');
    this.data$.next(new Array(this._arraySize).fill(true).map((_, id) => ({id, data: Math.random() * 10})));
  }
}
