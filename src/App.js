import "./App.css";
import logo from "./Assets/Images/logo-falcone.jpg";
import scrollSvg from "./Assets/Svg/scroll.svg";

function App() {
  return (
    <>
      <navbar>
        <img src={logo} alt="logo" className="logo-image" />
      </navbar>

      <section id="Section1">
        <div className="font-roboto image image--mountains hero-flex">
          <div className="hero-title margin-auto">
            Fly high <br /> as fuck!
          </div>
          <div className="hero-scroll">
            <div>scroll to explore</div>
            <img src={scrollSvg} alt="scroll-icon"></img>
          </div>
        </div>
      </section>

      <section id="Section2">
        <div className="side-flex">
          <div className="side-flex-60">
            <div className="side-flex-60--text-title-wrapper">
              <div className="font-roboto text-48">Stay hydrated!</div>
              <div className="font-montserrat text-24 mt-40">
                Non si intrometta! No, aspetti, mi porga l'indice; ecco lo alzi
                così... guardi, guardi, guardi; lo vede il dito? Lo vede che
                stuzzica, che prematura anche. E lei.. cosa si sente?
                Professore, non le dico.Non si intrometta! No, aspetti, mi porga
                l'indice; ecco lo alzi così... guardi, guardi, guardi; lo vede
                il dito? Lo vede che stuzzica, che prematura anche. E lei.. cosa
                si sente? Professore, non le dico.
              </div>
            </div>
          </div>
          <div className="side-flex-40 image image--hand" />
        </div>
      </section>
      
      <section id="Section3">
        <div className="side-flex">
          <div className="side-flex-60 image image--stairs" />
          <div className="side-flex-40 side-flex-40--central-title-wrapper">
            <div className="font-roboto text-48">Stay focused!</div>
          </div>
        </div>
      </section>

      <section id="Section4">
        <div className="section4-wrapper">
          <div className="section4-top">
            <div className="section4-top--title font-roboto text-48">
              ESTIQAATSI
            </div>
          </div>
          <div className="section4-center">
            <div className="section4-left">
              <div className="section4-left--title font-roboto text-48">
                ESTIQAATSI
              </div>
            </div>
            <div className="section4-box-wrapper">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="section4-right">
              <div className="section4-right--title font-roboto text-48">
                ESTIQAATSI
              </div>
            </div>
          </div>
          <div className="section4-bottom"></div>
        </div>
      </section>
    </>
  );
}

export default App;
