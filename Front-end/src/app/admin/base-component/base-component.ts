import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-base-component',
  imports: [RouterModule],
  templateUrl: './base-component.html',
  styleUrl: './base-component.css',
})
export class BaseComponent {

}
