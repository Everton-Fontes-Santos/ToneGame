import { useState, useRef, useEffect } from "react";
import ToneButton, { ToneBlackButton } from '../ToneButton'
import Content from '../ContentMiddle'
import * as st from './styled'
import wavs, {playSound} from '../../utils/sounds'

// import { drawHand } from '../../utils/hand'
// import Webcam from "react-webcam";
// import * as handpose from '@tensorflow-models/handpose'

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
const lefts = {
    Db4:'28px',
    Eb4:"68px",
    Gb4:"148px",
    Ab4:"188px",
    Bb4:"228px",
    Db5:"308px",
    Eb5:"348px"
}
const notes = [...wavs.keys()]

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
        sounds[note] = wavs.get(note)
    })
    refs.content = useRef(null)
    


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

    // useEffect(()=>{runHandPose()},[]);
    useEffect(()=>{
        // show sequence
        if(sequence.length >0){
            const showSequence = (idx=0)=>{
                let ref = refs[sequence[idx]]
                //show the ref
                setTimeout(()=>{
                    ref.current.classList.add('shadow-lg')
                    ref.current.classList.add('shadow-indigo-500/50')
                    playSound(sounds[sequence[idx]])
                    setTimeout(()=>{
                        ref.current.classList.remove('shadow-lg')
                        ref.current.classList.remove('shadow-indigo-500/50')
                        
                        if(idx < sequence.length -1) showSequence(idx+1)
                    }, 250)
                }, 250)
            }
    
            showSequence()
        }
        
    }, [sequence])

    const handleNoteClick = (e)=>{
        const clickNote = e.target.innerText
        if(playing){
            e.target.classList.add('shadow-lg')
            e.target.classList.add('shadow-indigo-500/50')
            setTimeout(()=>{
                e.target.classList.remove("shadow-lg")                
                e.target.classList.remove("shadow-indigo-500/50")                

                playSound(sounds[clickNote])
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
        }else{
            playSound(sounds[clickNote])
            e.target.classList.add('shadow-lg')
            e.target.classList.add('shadow-indigo-500/50')
            setTimeout(()=>{
                e.target.classList.remove("shadow-lg")
                e.target.classList.remove("shadow-indigo-500/50")
            })
        }
    }

    return (
        <st.Container>
            
            <st.PlayContainer>
                    <st.PlayButton 
                        id={0}
                        onClick={handleNextLevel}
                    >
                        {!playing ? "Play": "Running"}
                    </st.PlayButton>
                <st.Icon>
                    
                    { items.map((item, idx) => (
                        item.name.slice().includes('b') ?
                        <ToneBlackButton
                            key={item.id}
                            item={item} 
                            onClick={handleNoteClick} 
                            note={item.name} 
                            bg={`${lefts[item.name]}`}
                            ref={refs[item.name]}
                        />:
                        <ToneButton
                            key={item.id}
                            item={item} 
                            onClick={handleNoteClick} 
                            note={item.name} 
                            bg={''}
                            ref={refs[item.name]} 
                        />
                    ))}
                </st.Icon>
                <Content ref={refs.content}>
                { sequence.length === 0 ? "Play": `${sequence.length} Notes`}
                </Content>
            </st.PlayContainer>
            
        </st.Container>
    )
}