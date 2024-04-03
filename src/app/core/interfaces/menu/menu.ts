import { Ingrediente } from "./ingrediente";

export interface Menu {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    id: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nombre_plato: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    descripcion_plato: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    id_categoria: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    precio_venta:number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    costo_produccion: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ingredientes: Ingrediente[];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    alergenos: string[];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    imagen_plato: string;
}