import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {

  private isUserSignedIn = new Subject<any>();
  isUserSignedInEvent = this.isUserSignedIn.asObservable();

  emitIsUserSignedInEvent(value: boolean) {
    this.isUserSignedIn.next(value);
  }
}