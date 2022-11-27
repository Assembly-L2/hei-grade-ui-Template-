import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({ 
    titleContainer:{
        marginTop: 20,
    },
    schoolTitle:{
        color: '#dd9933',
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    informationStyle:{
        fontFamily: 'Arial Narrow Bold',
        textAlign: 'center',
    }
  });

// const Title = ({title},{adresse},{contact},{email}) => (
//     <View style={styles.titleContainer}>
//         <Text style={styles.schoolTitle}>{title}</Text>
//         <Text style={styles.informationStyle}>{adresse}</Text>
//         <Text style={styles.informationStyle}>{contact}</Text>
//         <Text style={styles.informationStyle}>{email}</Text>
//     </View>
//   );

function Title() {
    return (
    <View style={styles.titleContainer}>
        <Text style={styles.schoolTitle}>HAUTE ECOLE D'INFORMATIQUE</Text>
        <Adresse/>
     </View>
    )
}

export function Adresse() {
    return (
    <View>
        <Text style={styles.informationStyle}>Lot 2J 161 R Ivandry, 101 Antananarivo, Madagascar</Text>
     </View>
    )
}
export default Title;