import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-accounts',
  templateUrl: './overview-accounts.component.html',
  styleUrl: './overview-accounts.component.css'
})
export class OverviewAccountsComponent {
  formDisplayed: boolean = false;

  showForm(formDisplayed: boolean = this.formDisplayed) {
    this.formDisplayed = !formDisplayed
  }

}
