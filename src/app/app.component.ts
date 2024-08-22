import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {ToastModule} from "primeng/toast";
import { ToastService } from './layout/toast.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule,ButtonModule,NavbarComponent,FooterComponent,ToastModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);
  isListingView = true;
  toastService = inject(ToastService);
  messegeService = inject(MessageService);
  ngOnInit():void {
    this.initFrontAwesome();
    this.listenToastService();
  }

  private initFrontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  private listenToastService(){
    this.toastService.sendSub.subscribe({
      next: newMessege => {
        if(newMessege && newMessege.summary !== this.toastService.INIT_STATE){
          this.messegeService.add(newMessege);
        }
      }
    })
  }

}
