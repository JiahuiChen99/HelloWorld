import React from "react";
import Particles from "react-particles-js";

function Particle() {
    return (
        <Particles id="particles-js"
           params={{
               particles: {
                   number: {
                       value: 100,
                       density: {
                           enable: true,
                           value_area: 1000
                       }
                   },
                   color: {
                       value: '#FFF'
                   },
                   opacity: {
                       value: 0.5,
                       anim: {
                           enable: true
                       }
                   },
                   size: {
                       value: 2,
                       random: true,
                       anim: {
                           enable: true,
                           speed: 1
                       }
                   },
                   line_linked: {
                       enable: false
                   },
                   move: {
                       speed: 0.15
                   }
               }
           }}
        />
    );
}

export default Particle;