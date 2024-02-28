import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmailComponent } from './cadastro-email.component';

describe('CadastroEmailComponent', () => {
  let component: CadastroEmailComponent;
  let fixture: ComponentFixture<CadastroEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
