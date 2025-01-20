import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  @Input() title: string = '';
  @Input() content: string = '';

  faGithub = faGithub;
  faGoogle = faGoogle;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser

  constructor(private modalService: ModalService) {}

  close(): void {
    this.modalService.close();
  }

}
