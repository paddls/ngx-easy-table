import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfig } from '@paddls/ngx-easy-table';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickEventComponent implements OnInit {
  public columns: Columns[];
  public clicked: string;
  public data: Company[] = [];
  public configuration: Config;

  ngOnInit(): void {
    this.columns = [
      { key: 'phone', title: 'Phone' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];
    this.configuration = { ...DefaultConfig };
    this.data = data;
  }

  eventEmitted($event: { event: string; value: any }): void {
    this.clicked = JSON.stringify($event);
    // eslint-disable-next-line no-console
    console.log('$event', $event);
  }
}
