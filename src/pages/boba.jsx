import { useEffect, useState } from 'react'

const images = [
    new URL('../assets/boba-1.jpg', import.meta.url).href,
    new URL('../assets/boba-2.jpg', import.meta.url).href,
]

const Boba = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(i => (i + 1) % images.length)
        }, 9000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="container-boba">
            <div className="contenido-boba">
                <h1>BOBA TEA FROM 5.50</h1>
                <div className="informacion-boba">
                    <p>Thai Milk Tea</p>
                    <p>Classic Milk Tea</p>
                    <p>Dragon Fruit Green Tea</p>
                    <p>Strawberry Green Tea</p>
                    <p>Mango Green Tea</p>
                    <p>Passion Fruit Green Tea</p>
                    <p>Pineapple Green Tea</p>
                    <p>Taro Milk Tea</p>
                    <p>Brown Sugar</p>
                    <p>Pineapple Milk Tea</p>
                    <p>Strawberry Milk Tea</p>
                    <p>Dragon Fruit Milk Tea</p>
                    <p>Mango Milk Tea</p>
                    <p>Lychee Milk Tea</p>
                    <p>Raspberry Milk Tea</p>
                </div>
            </div>
            <div className="imagen-boba" aria-hidden="true">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Boba ${i + 1}`}
                        className={i === index ? 'carousel-img active' : 'carousel-img'}
                    />
                ))}
            </div>
        </div>
    )
}

export default Boba;