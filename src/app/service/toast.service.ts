import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable({ providedIn: 'root' })
export class ToastService {

    constructor(public snackBar: MatSnackBar) { }

    open(msg: string, css: string) {
        console.log(msg, css);

        const config = new MatSnackBarConfig();
        config.duration = 3800;
        config.panelClass = [css];
        this.snackBar.open(msg, ' X ', config);
    }
    openPay(msg: string, css: string) {
        const config = new MatSnackBarConfig();
        config.duration = 5000;
        config.panelClass = [css];
        this.snackBar.open(msg, ' X ', config);
    }
}
