import { Ingrediente } from "@interfaces/menu/ingrediente";

export class MenuResponse {
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
    constructor(data: { [key: string]: unknown }) {
        this.id = data['id'] as number;
        this.nombre_plato = data['nombre_plato'] as string;
        this.descripcion_plato = data['descripcion_plato'] as string;
        this.id_categoria = data['id_categoria'] as number;
        this.precio_venta = data['precio_venta'] as number;
        this.costo_produccion = data['costo_produccion'] as number;
        this.ingredientes = data['ingredientes'] as Ingrediente[];
        this.alergenos = data['alergenos'] as string[];
        this.imagen_plato = data['imagen_plato'] as string;
    }
}