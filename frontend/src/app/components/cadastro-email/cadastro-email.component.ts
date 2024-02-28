import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-email.component.html',
  styleUrl: './cadastro-email.component.css'
})

export class CadastroEmailComponent {
  @Output()
  newEmail = new EventEmitter<{name: string, email: string}>()

  cadastroForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  }
  );

  submitted = false;



  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      name: ['',[ Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
     
  }

  get f(): { [key: string]: AbstractControl } {
    return this.cadastroForm.controls;
  }

  onSubmit() {
    
    if (this.cadastroForm.invalid) {
      return
    }
   
    this.newEmail.emit(this.cadastroForm.value)
    this.cadastroForm.reset();
   
    
    
  }

  emitData(data: {
    email: string
    name: string
  }): void {
    this.newEmail.emit(data);
  }

}
