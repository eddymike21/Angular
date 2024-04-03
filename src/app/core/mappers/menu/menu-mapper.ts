import { Menu } from '@interfaces/menu/menu';
import { MenuResponse } from '@model/menu/menu-response';

export class MenuMapper {
    static map(data: MenuResponse): Menu {
        return {
            id: data.id,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            nombre_plato: data.nombre_plato,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            descripcion_plato: data.descripcion_plato,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            id_categoria: data.id_categoria,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            precio_venta: data.precio_venta,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            costo_produccion: data.costo_produccion,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            ingredientes: data.ingredientes,
            alergenos: data.alergenos,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            imagen_plato: data.imagen_plato
        };
    }
    static toJson(data: Menu): MenuResponse {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            descripcion_plato: data.descripcion_plato,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            nombre_plato: data.nombre_plato,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            id_categoria: data.id_categoria,
            id: data.id,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            precio_venta: data.precio_venta,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            costo_produccion: data.costo_produccion,
            ingredientes: data.ingredientes,
            alergenos: data.alergenos,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            imagen_plato: data.imagen_plato
        };
    }


}