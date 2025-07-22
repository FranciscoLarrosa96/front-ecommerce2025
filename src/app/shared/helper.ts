import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    isDrawerOpen = signal(false);

    /**
   * Detecta si el drawer está abierto
   */
    openDrawer() {
        this.isDrawerOpen.update(value => !value);
    }

}