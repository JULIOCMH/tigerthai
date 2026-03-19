import { useEffect, useState } from 'react'

const images = [
    new URL('../assets/friedrice.jpg', import.meta.url).href,
    new URL('../assets/padthai.jpg', import.meta.url).href,
]

const Noodles = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(i => (i + 1) % images.length)
        }, 9000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="container-noodles">
                <div className="noodles">
                    <h1>NOODLES</h1>
                    <h2>Pad Thai $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Pad See Eu $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Pad Kee Mow $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Thai Egg Noodles $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    
           
                </div>
                 <div className="rice">
                    <h1>RICE</h1>
                     <h2>Chicken Fried Rice $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Veggie Fried Rice $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Toffu Fried Rice $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Beef Fried Rice $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    
           
                 </div>
            <div className="imagen-noodles" aria-hidden="true">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Noodles ${i + 1}`}
                        className={i === index ? 'carousel-img active' : 'carousel-img'}
                    />
                ))}
            </div>
        </div>
    )
}

export default Noodles;