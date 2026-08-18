export class Song {
  _titulo!: string;
  _artista?: string;

  constructor(aTitulo: string) {
    this.titulo = aTitulo;
  }

  get titulo(): string {
    console.log("get titulo");
    return this._titulo;
  }

  set titulo(aTitulo: string) {
    const trimmed = aTitulo.trim();
    if (trimmed.length === 0) {
      throw new Error("El título de la canción no puede ser vacío.");
    }
    this._titulo = trimmed;
  }

  get artista(): string | undefined {
    return this._artista;
  }

  set artista(aArtista: string) {
    const trimmed = aArtista.trim();
    this._artista = trimmed;
  }

  toString(): string {
    return `Canción: ${this.titulo} - artista: ${this.artista}`;
  }
}
