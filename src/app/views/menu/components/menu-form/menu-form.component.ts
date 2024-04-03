import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Menu } from '@interfaces/menu/menu';
import { fieldsComponents } from '../../../../shared/fields/fields-components';

type FormData = {
  [key in keyof Menu]: FormControl<Menu[key] | unknown>
};
@Component({
    selector: 'menu-form',
    standalone: true,
    templateUrl: './menu-form.component.html',
    styleUrl: './menu-form.component.scss',
    imports: [CommonModule, ReactiveFormsModule,...fieldsComponents]
})
export class MenuFormComponent {
  @Output() addData: EventEmitter<Menu> = new EventEmitter<Menu>();

  form: FormGroup<FormData> = new FormGroup<FormData>({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nombre_plato: new FormControl(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    descripcion_plato: new FormControl(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    id_categoria: new FormControl(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    precio_venta: new FormControl(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    costo_produccion: new FormControl(),
    alergenos: new FormControl(),
    id: new FormControl({ value: 0, disabled: true }),
    ingredientes: new FormControl(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    imagen_plato: new FormControl()
  });


  constructor() {
  }

  saveData(): void {
    const data = this.form.getRawValue();
    this.addData.next(data as Menu);
  }
}
