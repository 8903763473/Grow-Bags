import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class HandlerService {

    constructor(public toast: ToastService,
        public router: Router) { }

    Info(arg0: string) {
        throw new Error('Method not implemented.');
    }

    loader: boolean = false;

    err(err: any) {
        if (err.error) {
            let error: any = err.error;
            if (error.errorMessage != null) {
                this.toast.open(error.errorMessage, 'err');
            } else {
                this.toast.open(error.msg, 'err');
            }
        }
        if (err.status == 401)
            this.route();
        if (err.status == 500)
            this.toast.open("Internal Server Error", 'err');
        if (err.status == 0)
            this.toast.open("Unable to reach server", 'err');
    }

    error(err: any) {
        this.toast.open(err, 'err');
    }

    res(msg: any) {
        console.log(msg);
        this.toast.open(msg, 'res');
    }

    route() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/start']);
    }

    staticError(err: any) {
        this.toast.openPay(err, 'err')
    }

}
