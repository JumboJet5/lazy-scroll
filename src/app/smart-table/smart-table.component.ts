import { CollectionViewer, DataSource, ListRange } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export interface IItem {
  id: number;
  data: number;
}

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartTableComponent implements OnInit {
  public data: MyDataSource = new MyDataSource();

  constructor() { }

  ngOnInit(): void {
  }

  public getItemId(index, item: IItem): number {
    return !!item ? item.id : index;
  }
}

export class MyDataSource extends DataSource<IItem> {
  private _updateInterval = 1000;
  private _arraySize = 100;
  private _pageSize = 20;
  private _cachedData = Array.from<IItem>({length: this._arraySize})
    .map((_, id) => ({id, data: Math.random() * 10}));
  private _dataStream = new BehaviorSubject<(IItem)[]>(this._cachedData);
  private _subscription = new Subscription();
  private _range: ListRange = {start: 0, end: this._pageSize};

  constructor() {
    super();
    this._updatePage();
    setInterval(() => this._updatePage(), this._updateInterval);
  }

  connect(collectionViewer: CollectionViewer): Observable<(IItem)[]> {
    this._subscription.add(collectionViewer.viewChange.subscribe(range => {
      this._range = range;
      this._updatePage();
    }));
    return this._dataStream;
  }

  disconnect(): void {
    this._subscription.unsubscribe();
  }

  private _updatePage(range: ListRange = this._range): void {
    console.log('------Updating------', range);
    const length = range.end - range.start;
    this._cachedData.splice(range.start, length,
      ...Array.from({length})
        .map((_, id) => ({id: id + range.start, data: Math.random() * 10})));
    this._dataStream.next(this._cachedData);
  }
}
