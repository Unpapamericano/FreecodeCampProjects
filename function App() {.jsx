import moon  from './moon.jpg';
import land from './land.jpg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

    return (
        <div>
            <Parallax pages={4}>
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage: `url(${moon})`,
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage: `url(${land})`,
                        backgroundSize: 'cover',
                        }}
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={1}
                >
                    <h2>Welcome to my website</h2>
                </ParallaxLayer>
                
                <ParallaxLayer
                    offset={3.2}
                    speed={2}
                >
                    <h2>Web development is fun!</h2>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}