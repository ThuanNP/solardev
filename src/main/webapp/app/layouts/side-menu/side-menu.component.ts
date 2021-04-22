import { Component, OnInit } from '@angular/core';
import { ExpandedLTR, MultilevelNodes, SlideInOut } from 'ng-material-multilevel-menu';
import { ProfileService } from 'app/layouts/profiles/profile.service';

@Component({
  selector: 'jhi-sidebar',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [SlideInOut, ExpandedLTR],
})
export class SideMenuComponent implements OnInit {
  inProduction?: boolean;
  openAPIEnabled?: boolean;
  config = {
    paddingAtStart: true,
    classname: 'menu-label',
    interfaceWithRoute: true,
    highlightOnSelect: true,
    collapseOnSelect: true,
    useDividers: true,
    rtlLayout: false,
  };

  adminNavItems: MultilevelNodes[] = [
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
      items: [
        {
          label: 'Danh mục tỉnh/ Thành phố',
          icon: 'more_vert',
          link: 'entities/province',
        },
        {
          label: 'Danh mục Quận/ huyện',
          icon: 'more_vert',
          link: 'entities/district',
        },
        {
          label: 'Danh mục Quận/ huyện',
          icon: 'more_vert',
          link: 'entities/district',
        },
      ],
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

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.openAPIEnabled = profileInfo.openAPIEnabled;
    });
  }

  selectedItem($event: any): void {}

  selectedLabel($event: any): void {}

  menuIsReady($event: any): void {}
}
