import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private usernameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private token: string | null = null; // Initialize token as null

  setUsername(username: string | null) {
    this.usernameSubject.next(username);
    }
  setToken(token: string | null) {
    this.token = token; // Set the token value 
  }
}