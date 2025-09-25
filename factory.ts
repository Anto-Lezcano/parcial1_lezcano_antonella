interface IEquipo {
  nombre: string;
  ram: string;
  procesador: string;
  detalles(): void;
}

class Notebook implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): void {
    console.log(
      `Tipo: Servidor, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`
    );
  }
}

class destokp implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): void {
    console.log(
      `Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`
    );
  }
}

class servidor implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): void {
    console.log(
      `Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`
    );
  }
}

class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string) {
    if (tipo == "Notebook") {
      return new Notebook(nombre, ram, procesador);
    }
    if (tipo == "Servidor") {
      return new servidor(nombre, ram, procesador);
    }
    if (tipo == "Destokp") {
      return new destokp(nombre, ram, procesador);
    } else {
      throw new Error("Ingrese una opcion valida");
    }
  }
}

const fabrica = new EquipoFactory();

const server = fabrica.crearEquipo("Servidor", "DellPowerEdge", "32GB", "Xeon");
server.detalles();
