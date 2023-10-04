import React, { useEffect, useState } from "react";
import './positionfinder.css';

const PositionFinder = () => {
    const [position, setPosition] = useState({x : 0, y : 0});

    useEffect(() => {
        const handleMove = e => {
            setPosition({x : e.clientX, y : e.clientY});
        }
        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove);
        }
    }, [])

    return (
        <div className="parent_container w-100 h-100">
            <div className="pointer_highlighter w-40 h-40 blur" style={{"transform" : `translate(${position.x}px, ${position.y}px)`}}>

            </div>
        </div>
    )
}

export default PositionFinder