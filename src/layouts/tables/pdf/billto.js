import {Text, View, StyleSheet } from '@react-pdf/renderer';
import React, { Fragment } from 'react';

const styles = StyleSheet.create({
    headerContainer: {
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'row',
    },
    label: {
        justifyContent: 'flex-end'
    }
  });


  const BillTo = () => (
    <Fragment >
    <View style={styles.headerContainer}>
        <Text>Nom :</Text>
        <Text style={styles.label}>RAMAROSANDY</Text>
    </View >
    <View style={styles.headerContainer}>
        <Text style={styles.label}>Prénom : </Text>
        <Text style={styles.label}>Abraham Prince</Text>
    </View>
    </Fragment>
  );
  
  export default BillTo;