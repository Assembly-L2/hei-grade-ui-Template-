import "./Moyenne.css";
import MDButton from "components/MDButton";
import { PDFDownloadLink} from '@react-pdf/renderer';
import Bulletin from "../pdf/bulletin";


function Download(){
return (
  <div>
    <PDFDownloadLink document={<Bulletin />} fileName="bulletin.pdf">
        <MDButton variant="gradient" color="dark" size="large">
          Télécharger
        </MDButton>
    </PDFDownloadLink>
  </div>
)
}

export default function Moyenne() {
  return (
    <div className="container">
      <div className="section">
        <div>Résultat générale : </div>
        <div className="result">
          Crédits acquis (*) : 56 <br />
          Moyenne annuelle pondérée par les crédits : 14.04/20 <br />
          Mention obtenue : Bien
        </div>
        <div className="buton">
          <Download/>
        </div>
      </div>
      <div className="signature" />
    </div>
  );
}
