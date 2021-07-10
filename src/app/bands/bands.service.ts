import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HARD_API } from '../app.api';
import { Band } from './band/band.model';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  bands(): Observable<Band[]> {
    return this.http.get<Band[]>(`${HARD_API}/bands`).pipe(
      map(bands => bands),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any> {
    this.exibirMensagem('ERRO', 'A operação não pôde ser realizada.', 'toast-error');
    return EMPTY
  } 

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo);
  }
}
