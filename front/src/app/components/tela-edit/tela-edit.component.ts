import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tela-edit',
  templateUrl: './tela-edit.component.html',
})
export class TelaEditComponent implements OnInit {
  public form: FormGroup;
  public total: number = 0;

  constructor(private _apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      valor: ['', Validators.required],
      parcelas: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let userValue = this.form.value;
    this._apiService.postUser(userValue).subscribe(
      (res) => {
        this.total = res;
      },
      (error) => {
        console.error('Erro ao calcular total', error);
      }
    );
  }

  get valor() {
    return this.form.get('valor');
  }

  get parcelas() {
    return this.form.get('parcelas');
  }
}
