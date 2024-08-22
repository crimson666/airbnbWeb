import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule,ButtonModule,NavbarComponent,FooterComponent,ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);
  isListingView = true;
  ngOnInit():void {
    this.initFrontAwesome();
  }

  private initFrontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

}
