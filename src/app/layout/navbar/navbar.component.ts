import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryComponent } from './category/category.component';
import { AvatarComponent } from './avatar/avatar.component';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {MenuModule} from "primeng/menu";
import {DialogService} from "primeng/dynamicdialog";
import { MenuItem } from 'primeng/api';
import { style } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  location : String = "Anywhere";
  guests : String =  "Add Guests";
  dates : String = "Any Week";
  currentMenuItems : MenuItem[] | undefined = this.fetchMenu();
  ngOnInit(): void {
    this.fetchMenu();
  }
  private fetchMenu() {
    return[
      {
        label: "Sign up",
        styleClass: "font-bold"
      },
      {
        label: "Log in"
      }
    ];
  }

}
