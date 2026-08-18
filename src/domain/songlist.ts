import { Song } from "./song.ts";

export class SongList {
  #songs: Song[] = [];

  add(song: Song): void {
    const songInList = this.#songs.some(
      (existingSong) => existingSong.titulo === song.titulo,
    );
    if (!songInList) {
      this.#songs.push(song);
    } else {
      throw new Error(
        `No se pudo agregar. ${song.titulo} ya está en la lista.`,
      );
    }
  }

  getSongs(): readonly Song[] {
    return [...this.#songs];
  }
}
