import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-fixed-costs',
  templateUrl: './overview-fixed-costs.component.html',
  styleUrl: './overview-fixed-costs.component.css'
})
export class OverviewFixedCostsComponent {
  formDisplayed: boolean = false;

  showForm() {
    if (!this.formDisplayed) {
      this.formDisplayed = true;
    } else {
      this.formDisplayed = false;
    }
  }

}
