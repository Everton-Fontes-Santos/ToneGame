import Db4 from "../sounds/Db4.mp3"
import D4 from "../sounds/D4.mp3"
import Eb4 from "../sounds/Eb4.mp3"
import E4 from "../sounds/E4.mp3"
import F4 from "../sounds/F4.mp3"
import Gb4 from "../sounds/Gb4.mp3"
import G4 from "../sounds/G4.mp3"
import Ab4 from "../sounds/Ab4.mp3"
import A4 from "../sounds/A4.mp3"
import Bb4 from "../sounds/Bb4.mp3"
import B4 from "../sounds/B4.mp3"
import C5 from "../sounds/C5.mp3"
import C4 from "../sounds/C4.mp3"
import Db5 from "../sounds/Db5.mp3"
import D5 from "../sounds/D5.mp3"
import Eb5 from "../sounds/Eb5.mp3"
import E5 from "../sounds/E5.mp3"

const notesWav = new Map()
notesWav.set('Db4', new Audio(Db4))
notesWav.set('D4', new Audio(D4))
notesWav.set('Eb4', new Audio(Eb4))
notesWav.set('E4', new Audio(E4))
notesWav.set('E5', new Audio(E5))
notesWav.set('Eb5', new Audio(Eb5))
notesWav.set('D5', new Audio(D5))
notesWav.set('Db5', new Audio(Db5))
notesWav.set('F4', new Audio(F4))
notesWav.set('G4', new Audio(G4))
notesWav.set('Gb4', new Audio(Gb4))
notesWav.set('A4', new Audio(A4))
notesWav.set('Ab4', new Audio(Ab4))
notesWav.set('B4', new Audio(B4))
notesWav.set('Bb4', new Audio(Bb4))
notesWav.set('C5', new Audio(C5))
notesWav.set('C4', new Audio(C4))

export const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
  };

export default notesWav