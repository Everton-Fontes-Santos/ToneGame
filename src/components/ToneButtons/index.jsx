import { useState, useRef, useEffect } from "react";
import ToneButton from '../ToneButton'
import Content from '../ContentMiddle'
import * as st from './styled'
import wavs from '../../utils/sounds'
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
        sounds[note] = new Audio(wavs.get(note))
    })
    refs.content = useRef(null)
    // refs.webcam = useRef(null)
    // refs.canvas = useRef(null)

    // const runHandPose = async ()=>{
    //     const net = await handpose.load()
    //     setInterval(()=>{
    //         detect(net)
    //     },100)
    // }

    // const detect = async (net) => {
    //     // Check data is available
    //     if (
    //       typeof refs.webcam.current !== "undefined" &&
    //       refs.webcam.current !== null &&
    //       refs.webcam.current.video.readyState === 4
    //     ) {
    //       // Get Video Properties
    //       const video = refs.webcam.current.video;
    //       const videoWidth = refs.webcam.current.video.videoWidth;
    //       const videoHeight = refs.webcam.current.video.videoHeight;
    
    //       // Set video width
    //       refs.webcam.current.video.width = videoWidth;
    //       refs.webcam.current.video.height = videoHeight;
    
    //       // Set canvas height and width
    //       refs.canvas.current.width = videoWidth;
    //       refs.canvas.current.height = videoHeight;
    
    //       // Make Detections
    //       const hand = await net.estimateHands(video);
    //       // console.log(hand);
    
    //       ///////// NEW STUFF ADDED GESTURE HANDLING
    
    //       if (hand.length > 0) {
            
    //       }
    
    //       ///////// NEW STUFF ADDED GESTURE HANDLING
    
    //       // Draw mesh
    //       const ctx = refs.canvas.current.getContext("2d");
    //       drawHand(hand, ctx);
    //     }
    //   };


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
        console.log(sequence)
        if(sequence.length >0){
            const showSequence = (idx=0)=>{
                let ref = refs[sequence[idx]]
                //show the ref
                setTimeout(()=>{
                    ref.current.classList.add('brightness-40')
                    sounds[sequence[idx]].play()
                    setTimeout(()=>{
                        ref.current.classList.remove('brightness-40')
                        
                        if(idx < sequence.length -1) showSequence(idx+1)
                    }, 250)
                }, 250)
            }
    
            showSequence()
        }
        
    }, [sequence])

    const handleNoteClick = (e)=>{
        const clickNote = e.target.getAttribute("note")
        if(playing){
            e.target.classList.add("opacity-50")
            setTimeout(()=>{
                e.target.classList.remove("opacity-50")                

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
        }else{
            sounds[clickNote].play()
        }
    }

    return (
        <st.Container>
            
            <st.PlayContainer>
                <st.Icon>
                    <st.PlayButton 
                        id={0}
                        onClick={handleNextLevel}
                    >
                        {!playing ? "Play": "Running"}
                    </st.PlayButton>
                    { items.map((item, idx) => (
                        <ToneButton
                            key={item.id}
                            rotate={(Number(idx)+1)*(360/8)}
                            item={item} 
                            onClick={handleNoteClick} 
                            ref={refs[item.name]} 
                            note={item.name} 
                            bg={`bg-red-${item.id}00`}
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