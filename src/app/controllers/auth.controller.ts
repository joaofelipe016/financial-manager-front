import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError, tap, pipe } from "rxjs";
import { LoginRequest } from "../entity/login-request";
import { Injectable } from "@angular/core";
import axios, { AxiosInstance } from "axios";


@Injectable({
    providedIn: 'root'
})
export class AuthController {
    private readonly url = 'http://localhost:8080'

    constructor(private http: HttpClient) {}

    login(loginRequest: LoginRequest): Observable<LoginRequest> {
        return this.http.post<LoginRequest>(this.url, loginRequest)
            .pipe(
                tap(response => {
                    localStorage.setItem('token', response.scSenha)
                })
            )
    }

}
