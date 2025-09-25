interface soporte {
  updateEquipo(estado: string): void;
}

interface equipo {
  nombre: string;
  tipo: string;
  estado: string;
  cambiarEstado(estado: string): void;
}

class Soporte implements soporte {
  updateEquipo(estado: string): void {}
}

class Equipo implements equipo {
  private Soporte: soporte[] | soporte[] = [];
  constructor(
    public nombre: string,
    public tipo: string,
    public estado: string
  ) {}

  cambiarEstado(estado: string): void {
    this.estado = estado;
    this.notificar(estado);
  }

  private notificar(estado: string) {
    this.Soporte.forEach((e) => {
      console.log(
        `Soporte notificado: ${this.nombre} ha cambiado su estado a ${this.estado} `
      );
      e.updateEquipo(estado);
    });
  }
}
