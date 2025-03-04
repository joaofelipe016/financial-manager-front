import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { CadastroComponent } from '../cadastro/cadastro.component';
import {
  faGithub,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faIdCard,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { AuthController } from 'src/app/controllers/auth.controller';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class LoginComponent implements OnInit {
  iconsLoaded = false;
  @ViewChild('modalContainer', { read: ViewContainerRef, static: true })
  modalContainer!: ViewContainerRef;
  isRightPanelActive = false;
  formGroup: FormGroup;
  signUpForm: FormGroup;
  faGithub = faGithub;
  faGoogle = faGoogle;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser;
  faIdCard = faIdCard;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private authService: AuthService,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      scUsuario: ['', [Validators.required]],
      scSenha: ['', [Validators.required]],
    });

    this.signUpForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.modalService.setViewContainerRef(this.modalContainer);
    this.initializeIcons();
  }
  private initializeIcons(): void {
    Promise.resolve().then(() => {
      this.faGoogle = faGoogle;
      this.faGithub = faGithub;
      this.faLinkedin = faLinkedin;
      this.faUser = faUser;
      this.faIdCard = faIdCard;
      this.faLock = faLock;
      this.faEnvelope = faEnvelope;
      this.iconsLoaded = true;
    });
  }
  togglePanel(): void {
    this.isRightPanelActive = !this.isRightPanelActive;
  }
  openModal(): void {
    this.modalService.open(CadastroComponent, {
      title: 'Modal Title',
      content: 'Modal Message',
    });
  }

  onSubmit(): void {
    this.authService
      .login(this.formGroup.value)
      .then((response) => {
        if (response.accessToken != null) {
          this.router.navigate(['/home']);
        }
        console.log('Login realizado com sucesso');
      })
      .catch(() => {
        console.error('Erro ao fazer login');
      });
  }
}
