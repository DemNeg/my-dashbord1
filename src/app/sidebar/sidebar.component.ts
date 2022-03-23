import { Component, OnInit } from '@angular/core';
import { MegaMenuItem,PrimeNGConfig , MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 opened= true;
 dock = true;
 items: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
        {
            icon: 'pi pi-palette',
            label: 'Dashbord',
        },
        {
            label: 'Expiry reminders',
            icon: 'pi  pi-clock',
            items: [
                {label: 'Expiry reminders', icon: 'pi  pi-clock'},
                {label: 'RoadTex reminders', icon: 'pi  pi-clock'},
                {label: 'National Permit reminders', icon: 'pi  pi-clock'},
                {label: 'Poc reminders', icon: 'pi  pi-clock'}
            ]
        },
        {
            label: 'Vehicles',
            icon: 'pi  pi-car',
            items: [
                {label: 'Add vehicles',icon: 'pi  pi-plus-circle'},
                {label: 'Vehicles', icon: 'pi  pi-car'},
                {label: 'Assignment new Vehicle',icon: 'pi  pi-car'},
                {label: 'Assignment History', icon: 'pi  pi-history'}
            ]
            },
        {
            label: 'Issues',
            icon: 'pi  pi-ban',
            items: [
                {label: 'Add issue',icon: 'pi  pi-plus-circle'},
                {label: 'Issues',icon: 'pi  pi-list'}
            ]
        },
        {
            label: 'Service Entry   ',
            icon: 'pi  pi-key',
            items: [
                {label: 'Add Service Entry',icon: 'pi  pi-plus-circle'},
                {label: 'Service Entries        ',icon: 'pi  pi-sliders-h'}
            ]
        },

        ///
        {
            label: 'Fuel Entry   ',
            icon: 'pi  pi-pi-filter-fill',
            items: [
                {label: 'Add Fuel Entry',icon: 'pi  pi-plus-circle'},
                {label: 'Fuel Entries',icon: 'pi  pi-cloud'}
            ]
        },
        {
            label: 'Tyres',
            icon: 'pi  pi-money-bill',
            items: [
                {label: 'Tyre',icon: 'pi  pi-plus-circle'},
                {label: 'Tyes report',icon: 'pi  pi-chart-line'}
            ]
        },
        {
            label: 'Reminders',
            icon: 'pi  pi-bell',
            items: [
                {label: 'Set Reminder ',icon: 'pi  pi-bell'},
                {label: 'Service Reminders ',icon: 'pi  pi-bell'},
                {label: 'Renewal Reminders ',icon: 'pi pi-compass'}
            ]
        },
        {
            label: 'Mange Strip',
            icon: 'pi  pi-paperclip',
            items: [
                {label: 'Trip ENtry ',icon: 'pi  pi-plus-circle'},
                {label: 'All trips',icon: 'pi  pi-tags'},
                {label: 'Trip Sheet Entry ',icon: 'pi  pi-sort-alt'},
                {label: 'Trip Sheet List ',icon: 'pi  pi-table'}
            ]
        },
        {
            label: 'Contacts',
            icon: 'pi  pi-clone',
            items: [
                {label: 'Add User ',icon: 'pi  pi-user-plus'},
                {label: 'Users',icon: 'pi  pi-users'},
                {label: 'Add Vendor ',icon: 'pi  pi-user-plus'},
                {label: 'Vendors ',icon: 'pi  pi-users'}
            ]
        },
        {
            label: 'Masters',
            icon: 'pi  pi-cog',
            items: [
                {
                    label: 'Broker Master ',icon: 'pi  pi-box',
                    items:[
                        {label:'Add New Broker', icon: 'pi pi-user-plus'},
                        {label:'Brokers', icon: 'pi pi-users'},
                    ]
                },
                {
                    label: 'City Master',icon: 'pi  pi-filter',
                    items:[
                        {label:'Add New City', icon: 'pi pi-plus-circle'},
                        {label:'Cities', icon: 'pi pi-list'},
                    ]
                },
                {label: 'Item Master',icon: 'pi   pi-cog'},
                {label: 'Vehicles Types ',icon: 'pi  pi-car'},
                {label: 'Service Task ',icon: 'pi  pi-server'}
            ]
        },


  ];

  }

  

toggleSidebar() {
    this.opened = !this.opened;
  }



//   confirm(event: Event) {
//     this.confirmationService.confirm({
//         //target: event.target,
//         message: 'Are you sure that you want to proceed?',
//         icon: 'pi pi-exclamation-triangle',
//         accept: () => {
//             //confirm action
//         },
//         reject: () => {
//             //reject action
//         }
//     });
// }
}
