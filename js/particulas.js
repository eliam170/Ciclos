particlesJS("particles-js", 
    {
        "particles": {
            "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
            },
            "color": {
            "value": "#22d3ee"
            },
            "shape": {
            "type": "circle"
            },
            "opacity": {
            "value": 0.6,
            "random": false
            },
            "size": {
            "value": 5,
            "random": true
            },
            "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#22d3ee",
            "opacity": 0.6,
            "width": 1
            },
            "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
            },
            "modes": {
            "repulse": {
                "distance": 120
            },
            "push": {
                "particles_nb": 4
            }
            }
        },
        "retina_detect": true
    }
);