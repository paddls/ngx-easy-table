import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './routes';
import {
  AsyncComponent,
  BasicComponent,
  CheckboxDefaultComponent,
  CheckboxesComponent,
  ClickEventComponent,
  CollapsedRowsComponent,
  ColTemplateComponent,
  ColumnWidthComponent,
  CustomFiltersComponent,
  CustomIntableSortComponent,
  CustomizeThemeComponent,
  CustomSortComponent,
  DynamicConfigurationComponent,
  DynamicRowComponent,
  ExportsComponent,
  FilterTemplateComponent,
  FixedWidthComponent,
  GlobalSearchComponent,
  GroupRowsComponent,
  HorizontalScrollComponent,
  LiveUpdateComponent,
  ManyTablesComponent,
  ModalComponent,
  NoResultsTemplateComponent,
  PaginationComponent,
  PaginationRangeComponent,
  PersistStateComponent,
  ResizableComponent,
  RowTemplateComponent,
  SearchComponent,
  SelectAllTemplateComponent,
  SelectCellComponent,
  SelectColComponent,
  SelectRowComponent,
  ServerPaginationComponent,
  ServerSortComponent,
  SortComponent,
  StylesComponent,
  SummaryFooterComponent,
  TemplateComponent,
  ToggleColumnComponent,
  InlineComponent,
  InlineRowComponent,
  ContextMenuComponent,
  ApiComponent,
  ApiDocComponent,
  BootstrapComponent,
  DocComponent,
  InstallationComponent,
  PinnedComponent,
  ColumnClassComponent,
  NestedTableComponent,
  PersistStateRouterComponent,
  MobileComponent,
  LoadingTemplateComponent,
  AdditionalActionsTemplateComponent,
  NestedObjectComponent,
  CustomPaginationComponent,
  FilterHeaderTemplateComponent,
  ReorderComponent,
  InfiniteScrollComponent,
  InfiniteScrollServerComponent,
  InfiniteScrollServerTemplateComponent,
  CheckboxAsRadioComponent,
  RadioComponent,
} from './demo';
import { TableModule } from 'ngx-easy-table';
import { MenuSearchPipe } from './pipes/menu-search-pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

export function getHighlightLanguages(): any {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
  };
}

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    TableModule,
    routing,
    HighlightModule,
    NoopAnimationsModule,
    MatPaginatorModule,
  ],
  declarations: [
    // pipes
    MenuSearchPipe,

    // components
    AppComponent,
    BasicComponent,
    SearchComponent,
    PaginationComponent,
    GlobalSearchComponent,
    SortComponent,
    ClickEventComponent,
    TemplateComponent,
    SelectRowComponent,
    SelectColComponent,
    SelectCellComponent,
    ModalComponent,
    LiveUpdateComponent,
    ServerPaginationComponent,
    RowTemplateComponent,
    ServerSortComponent,
    GroupRowsComponent,
    ManyTablesComponent,
    DynamicRowComponent,
    CustomSortComponent,
    CollapsedRowsComponent,
    HorizontalScrollComponent,
    CheckboxesComponent,
    CustomFiltersComponent,
    ToggleColumnComponent,
    DynamicConfigurationComponent,
    CheckboxDefaultComponent,
    ExportsComponent,
    ResizableComponent,
    ColumnWidthComponent,
    FixedWidthComponent,
    CustomizeThemeComponent,
    StylesComponent,
    ColTemplateComponent,
    SummaryFooterComponent,
    FilterTemplateComponent,
    CustomIntableSortComponent,
    PersistStateComponent,
    PaginationRangeComponent,
    AsyncComponent,
    SelectAllTemplateComponent,
    NoResultsTemplateComponent,
    InlineComponent,
    InlineRowComponent,
    ContextMenuComponent,
    ApiComponent,
    ApiDocComponent,
    BootstrapComponent,
    DocComponent,
    InstallationComponent,
    PinnedComponent,
    ColumnClassComponent,
    NestedTableComponent,
    PersistStateRouterComponent,
    MobileComponent,
    LoadingTemplateComponent,
    AdditionalActionsTemplateComponent,
    NestedObjectComponent,
    CustomPaginationComponent,
    FilterHeaderTemplateComponent,
    ReorderComponent,
    InfiniteScrollComponent,
    InfiniteScrollServerComponent,
    InfiniteScrollServerTemplateComponent,
    CheckboxAsRadioComponent,
    RadioComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages(),
      },
    },
  ],
})
export class AppModule {}
