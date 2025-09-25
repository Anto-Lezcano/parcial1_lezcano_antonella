class Configuracion {
  private static instancia: Configuracion;
  private modo: string | string = "";
  private tipo: string | string = "";

  static ObtenerInstancia() {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  set(modo: string, tipo: string) {
    this.modo = modo;
    this.tipo = tipo;
  }

  get(modo: string) {
    return this.modo;
  }
}

const conf1 = Configuracion.ObtenerInstancia();
const conf2 = Configuracion.ObtenerInstancia();

conf1.set("modo", "produccion");
console.log(conf2.get("modo"));
