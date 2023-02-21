import { useState, useRef, useEffect } from "react";
import ToneButton from '../ToneButton'
import * as st from './styled'


const generateButtons= (notes)=>{
    const buttons = []
    
    for(const id in notes){
        buttons.push(
            {
                id,
                status: "",
                name: notes[id],
            }
        )
    }
    return buttons
}

const notes = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]

export default function ToneButtons(){

    const buttons = generateButtons(notes)

    const [items, setItems] = useState(buttons)
    const [sequence, setSequence] = useState([])
    const [playing, setPlaying] = useState(false)
    const [playingIdx, setPlayingIdx] = useState(0)
    //refs
    const refs = {}
    const sounds = {}
    notes.forEach(note=>{
        refs[note]=useRef(null)
        sounds[note] = new Audio(require(`../../wav/${note}.wav`))
    })


    const addNewNote = ()=>{
        const note = notes[Math.floor(Math.random() * notes.length)]
        const newSequence = [...sequence, note]
        setSequence(newSequence)
    }

    const resetGame =()=>{
        setPlaying(false)
        setPlayingIdx(0)
        setSequence([])
    }

    const handleNextLevel = ()=>{
        if(!playing){
            setPlaying(true)
            addNewNote()
        }
    }

    useEffect(()=>{
        // show sequence
        console.log(sequence)
        if(sequence.length >0){
            const showSequence = (idx=0)=>{
                let ref = refs[sequence[idx]]
    
                //show the ref
                setTimeout(()=>{
                    ref.current.classList.add('brightness-50')
                    setTimeout(()=>{
                        ref.current.classList.remove('brightness-50')
                        if(idx < sequence.length -1) showSequence(idx+1)
                    }, 250)
                }, 250)
            }
    
            showSequence()
        }
        
    }, [sequence])

    const handleNoteClick = (e)=>{
        if(playing){
            e.target.classList.add("opacity-50")
            setTimeout(()=>{
                e.target.classList.remove("opacity-50")                

                const clickNote = e.target.getAttribute("note")

                sounds[clickNote].play()
                if(sequence[playingIdx] === clickNote){
                    if(playingIdx === sequence.length-1){
                        setTimeout(()=>{
                            //set playing idx 
                            setPlayingIdx(0)
                            addNewNote()
                        },250)
                    }else{
                        setPlayingIdx(playingIdx+1)
                    }
                }
                //clicked incorrect note
                else{
                    resetGame()
                    alert("You Lost")
                }
            },250)
        }
    }

    return (
        <st.Container>
            <st.PlayButton onClick={handleNextLevel}>
                { sequence.length === 0 ? "Play": `${sequence.length} Notes`}
            </st.PlayButton>
            <st.PlayContainer>
            { items.map(item => (
                <ToneButton key={item.id} item={item} onClick={handleNoteClick} ref={refs[item.name]} note={item.name} bg={`bg-red-${item.id}00`}/>
            ))}
            </st.PlayContainer>
            
        </st.Container>
    )
}