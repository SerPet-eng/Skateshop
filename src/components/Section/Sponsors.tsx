import Palaboy from '../../../images/sponsor_PalaboyLogo-removebg.png';
import Axis from '../../../images/main_AxisRacoon-removebg.png';
import Tubero from '../../../images/sponsor_Tubero-removebg.png';
import Corterie from '../../../images/sponsor_CorterieLogo-removebg.png';
import NBGD from '../../../images/sponsor_NBGD-removebg.png';
import Vendetta from '../../../images/sponsor_VendettaLogo-removebg.png';

export default function Sponsors() {
  return (
    <>
      <figure className="sponsor">
        <img src={Palaboy} alt="Palaboy Icon" className="sponsor_icon" />
        <img src={Axis} alt="Axis Icon" className="sponsor_icon" />
        <img src={Tubero} alt="Tubero Icon" className="sponsor_icon" />
        <img src={Corterie} alt="Corterie Icon" className="sponsor_icon" />
        <img src={NBGD} alt="NBGD Icon" className="sponsor_icon" />
        <img src={Vendetta} alt="Vendetta Icon" className="sponsor_icon" />
      </figure>
    </>
  );
}
