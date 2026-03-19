import { useEffect, useState } from 'react'

const images = [
    new URL('../assets/wings.jpg', import.meta.url).href,
    new URL('../assets/baobun.jpg', import.meta.url).href,
    new URL('../assets/bahn.jpg', import.meta.url).href,
]

const Meal = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(i => (i + 1) % images.length)
        }, 9000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="container-meal">
                <div className="bahn-mi">
                    <h1>BAHN MI SANDWICH</h1>
                    <h2>Korean BBQ Beef</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Chicken Marinated</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    </div>
                  <div className="bao-buns">
                    <h1>BAU BUNS</h1>
                    <h2>One Bau Buns $12.95</h2>
                    <h2>Two Bau Buns $12.95</h2>
                    <h2>Bao Buns Meal $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Chicken Marinated $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Korean Beef Bao Buns</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    
                </div>
                 <div className="wings">
                    <h1>JUMBO WINGS</h1>
                     <h2>Six Wings Only $9.95</h2>
                    <h2>Korean BBQ Wings $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Sweet Thai Chili Wings $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    <h2>Honey Hot Wings $12.95</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti delectus perferendis, et perspiciatis exercitationem fugiat corporis nihil vel, tenetur ad omnis, consequuntur fugit? Mollitia ipsam placeat neque tempore culpa doloremque?</p>
                    
           
                 </div>
            <div className="imagen-meal" aria-hidden="true">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Meal ${i + 1}`}
                        className={i === index ? 'carousel-img active' : 'carousel-img'}
                    />
                ))}
            </div>
        </div>
    )
}

export default Meal;