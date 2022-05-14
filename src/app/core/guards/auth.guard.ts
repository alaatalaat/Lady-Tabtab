import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    console.log('in guard',next,state)

    if(next.routeConfig?.path === "categories"){
      return true ;
    }
    else{
      return false;
    }

  }
}
