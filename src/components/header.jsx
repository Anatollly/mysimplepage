import ParticlesBg from "particles-bg";

let config = {
    num: 15,
    rps: 0.1,
    radius: [5, 10],
    // life: [1.5, 3],
    // v: [2, 3],
    // tha: [-40, 40],
    // body: "./img/bott1.png", // Whether to render pictures
    // rotate: [0, 20],
    // alpha: [0.6, 0],
    scale: [1, 1],
    position: {x:1,y:600,width:3000,height:250}, // all or center or {x:1,y:1,width:100,height:100}
    color: ["#ffffff"],
    // cross: "dead", // cross or bround
    // random: 15,  // or null,
    // g: 1,    // gravity
    // // f: [2, -1], // force
    // onParticleUpdate: (ctx, particle) => {
    //     ctx.beginPath();
    //     ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
    //     ctx.fillStyle = particle.color;
    //     ctx.fill();
    //     ctx.closePath();
    // }
  };

console.info("particle: ", ParticlesBg);

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="custom" config={config} bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <img src="img/logo.png" className="img-responsive logo" alt="Logo" />
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Прочитать историю
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
