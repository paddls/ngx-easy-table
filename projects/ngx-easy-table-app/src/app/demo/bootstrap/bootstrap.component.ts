import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { API, APIDefinition, Columns, Config, DefaultConfig } from '@paddls/ngx-easy-table';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  // eslint-disable-next-line
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BootstrapComponent implements OnInit {
  @ViewChild('table', { static: true }) table: APIDefinition;
  public columns: Columns[];
  public data: Company[] = [];
  public configuration: Config;

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = true;
    this.configuration.additionalActions = true;
    this.configuration.fixedColumnWidth = true;
    this.columns = [
      { key: 'phone', title: 'Phone' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];
    this.data = data;
  }

  setBootstrap(): void {
    this.setClass('table table-bordered table-striped table-sm');
  }

  setNormal(): void {
    this.setClass('');
  }

  private setClass(name: string): void {
    this.table.apiEvent({
      type: API.setTableClass,
      value: name,
    });
  }

  setRowClass(row: number, className: string): void {
    this.table.apiEvent({
      type: API.setRowClass,
      value: { row, className },
    });
  }
}
