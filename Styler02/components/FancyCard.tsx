import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.HeadingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{ uri: 'https://i.ytimg.com/vi/tU88vl3R9sA/maxresdefault.jpg' }} style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>IIT Tirupati</Text>
                    <Text style={styles.cardLabel}>Institute of Eminence</Text>
                    <Text style={styles.cardDescription}>Indian Institute of Technology Tirupati (IIT Tirupati) is an autonomous premier engineering and technology university located in Tirupati.</Text>
                    <Text style={styles.cardFooter}>10 Mins Away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HeadingText: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        height: 360,
        width: 380,
        margin: 8,
        borderRadius: 6
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#ffffff',
    },
    cardImage: {
        height: 200,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        marginTop: 6,
        fontWeight: 'bold',
        fontSize: 22
    },
    cardLabel: {
        color: '#000000',
        fontSize: 16,
        marginTop: 2
    },
    cardDescription: {
        color: '#000000',
        fontSize: 12,
        marginTop: 10
    },
    cardFooter: {
        color: '#000000',
        fontSize: 10,
        marginTop: 10
    },
})