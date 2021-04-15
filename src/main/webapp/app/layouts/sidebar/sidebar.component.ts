import { Component, OnInit } from '@angular/core';
import { ExpandCollapseStatusEnum, MultilevelMenuService } from 'ng-material-multilevel-menu';

@Component({
  selector: 'jhi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  config = {
    paddingAtStart: true,
    classname: 'menu-label',
    interfaceWithRoute: true,
    highlightOnSelect: true,
    collapseOnSelect: true,
    useDividers: true,
    rtlLayout: false,
  };
  appItems = [
    {
      label: 'Hệ thống',
      icon: 'settings',
      expanded: true,
      items: [
        {
          label: 'Người dùng',
          icon: 'more_vert',
          link: 'admin/user-management',
        },
        {
          label: 'Tracker',
          icon: 'more_vert',
          link: 'admin/tracker',
        },
        {
          label: 'Health',
          icon: 'more_vert',
          link: 'admin/health',
        },
        {
          label: 'Configuration',
          icon: 'more_vert',
          link: 'admin/configuration',
        },
        {
          label: 'Logs',
          icon: 'more_vert',
          link: 'admin/logs',
        },
        {
          label: 'API',
          icon: 'more_vert',
          link: 'admin/docs',
        },
      ],
    },
    {
      label: 'Danh mục',
      icon: 'style',
    },
    {
      label: 'Giao dịch',
      icon: 'stars',
    },
    {
      label: 'Kế toán',
      icon: 'account_balance_wallet',
    },
    {
      label: 'Nghiệp vụ kho',
      icon: 'inventory',
    },
    {
      label: 'Báo cáo',
      icon: 'print',
    },
  ];

  constructor(private multilevelMenuService: MultilevelMenuService) {}

  ngOnInit(): void {}

  setExpandCollapseStatus(type: ExpandCollapseStatusEnum): void {
    this.multilevelMenuService.setMenuExapandCollpaseStatus(type);
  }

  selectedItem($event: any): void {}

  selectedLabel($event: any): void {}

  menuIsReady($event: any): void {}
}
