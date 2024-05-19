import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getUserResponse } from 'src/app/entity/response';

@Component({
  selector: 'app-tela-list',
  templateUrl: './tela-list.component.html',
})
export class TelaListComponent implements OnInit {
  public form: FormGroup;
  public userNome: string = '';
  public userList: getUserResponse[] = [];

  constructor(private _apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      idUser: [''],
    });
  }

  ngOnInit(): void {
    this.getListUser();
  }

  onSubmit(): void {
    let id = this.form.get('idUser').value;

    this._apiService.getUser(id).subscribe(
      (res) => {
        this.userNome = res;
      },
      (error) => {
        console.error('Erro ao carregar nome usuário', error);
      }
    );
  }

  getListUser(): void {
    this._apiService.getUserList().subscribe(
      (res) => {
        console.log(res);
        this.userList = res;
      },
      (error) => {
        console.error('Erro ao carregar a lista de usuários', error);
      }
    );
  }
}
