import { useEffect, useRef, useState } from 'react'

function onChangecolor(currentColor) {

    const arrColor = ['red', 'blue', 'green']
    let colorRandomIndex = Math.trunc(Math.random() * 4)
    let newColor = arrColor[colorRandomIndex]

    while (newColor == currentColor) {
        colorRandomIndex = Math.trunc(Math.random() * 4)
        newColor = arrColor[colorRandomIndex]
    }
    return newColor
}

const useColor = () => {

    const [color, setColor] = useState('red')
    const colorRef = useRef(color)

    useEffect(() => {
        const timerId = setInterval(() => {
            const newColor = onChangecolor(colorRef.current)
            setColor(newColor)
            colorRef.current = newColor
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    return color
}

export default useColor