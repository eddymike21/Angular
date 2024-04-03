import { Menu } from '@interfaces/menu/menu';
import { menu } from '../const-data/menu';
import { MenuResponse } from '@model/menu/menu-response';
import { MenuMapper } from '@mapper/menu/menu-mapper';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

type BaseResponse = {
    [key: string]: unknown;
};

@Injectable()
export class MenuServices {

    private httpClient = inject(HttpClient);

    private allMenuSubject: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);
    allCategories$: Observable<Menu[]> = this.allMenuSubject.asObservable();

    apiUrl = environment.apiUrl;

    // constructor() {
    //     this.getAllCategories().subscribe();
    // }

    getMenu(): Menu[] {
        const menuResponse: MenuResponse[] = menu.map((category) => new MenuResponse(category));
        const finalResponse: Menu[] = menuResponse.map((menu) => MenuMapper.map(menu));
        return finalResponse;
    }

    getAllMenu(): Observable<Menu[]> {

        return this.httpClient.get<BaseResponse[]>(this.apiUrl + '/menu')
            .pipe(
                // delay(5000),
                map((response: BaseResponse[]) => response.map((menu) => new MenuResponse(menu))),
                map((response: MenuResponse[]) => response.map((menu) => MenuMapper.map(menu))),
                map((response) => response.map((menu) => ({ ...menu, name: menu.nombre_plato + '  Edison ' }))),
                tap((response) => this.allMenuSubject.next(response))
            );
    }

    postNewMenu(bodyRequest: Menu): Observable<boolean> {
        return this.httpClient.post(this.apiUrl + '/menu',MenuMapper.toJson(bodyRequest))
            .pipe(
                tap((response) => console.log(response)),
                map(() => {
                    this.getAllMenu().subscribe();
                    return true;
                })
            );
    }
}