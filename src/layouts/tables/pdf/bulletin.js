import ReactPDF, {Text, Image, Page, Document, StyleSheet } from '@react-pdf/renderer';
import Title, { Adresse } from './Title';
import logo from '../../../assets/images/HEI.png'
import BillTo from './billto';
import Header from './header';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  });
  
function Bulletin(){
    return (
<Document>
    <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={logo} />
        <Title/>
        <BillTo/>
    </Page>
  </Document>
    )
}
  
  export default Bulletin; 
