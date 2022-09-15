import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfig } from '@paddls/ngx-easy-table';

@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinnedComponent implements OnInit {
  public columns: Columns[];
  public data: Company[] = [];
  public configuration: Config;

  ngOnInit(): void {
    this.columns = [
      { key: 'phone', title: 'Phone', pinned: true, orderBy: 'asc' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'Active' },
    ];
    this.configuration = { ...DefaultConfig };
    this.configuration.horizontalScroll = true;
    this.configuration.searchEnabled = true;
    this.data = data;
  }
}
