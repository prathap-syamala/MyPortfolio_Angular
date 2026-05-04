import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagement } from '../page/product-management/product-management';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProductManagement],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  showModal = false;

  openModal() {

    this.showModal = true;

  }

  closeModal() {

    this.showModal = false;

  }

}