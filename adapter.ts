interface invViejo {
  addItem(nombre: string): void;
}

interface IEquipo {
  nombre: string;
  tipo: string;
  estado: string;
}
class InventarioViejo implements invViejo {
  addItem(nombre: string): void {}
}

class Adaptador {
  private equipos: IEquipo[] | IEquipo[] = [];
  constructor(inventarioViejo: InventarioViejo) {}

  agregarEquipo(equipo: IEquipo) {
    this.equipos.push(equipo);
  }

  listarEquipo() {
    return this.equipos;
  }
}
