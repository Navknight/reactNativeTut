import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
  const handleClick = (websiteURL: string) => {
    Linking.openURL(websiteURL);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>Sebastian Vettel become's 3 Time Champ</Text>
      </View>
      <Image source={{
        uri: 'https://th.bing.com/th/id/OIP.XR8TI-2myKhgnK0xUvA0lgAAAA?pid=ImgDet&rs=1'
      }} style={styles.cardImage} />
      <View style={styles.cardBody}>
        <Text
          style={styles.cardDescription} numberOfLines={3}>The 2013 Indian Grand Prix (formally the 2013 Formula 1 Airtel Indian Grand Prix ) was a Formula One motor race held on 27 October 2013 at the Buddh International Circuit, Greater Noida, Uttar Pradesh, India. It was the sixteenth round of the 2013 Formula One season, and the third (and, to date, last) Indian Grand Prix.
        </Text>
        <TouchableOpacity
          onPress={() => handleClick('https://en.wikipedia.org/wiki/2013_Indian_Grand_Prix')}
        >
          <Text>Read More</Text>
          <View style={styles.cardSocials}>
            <TouchableOpacity onPress={() => handleClick('https://instagram.com')}>
              <Text>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClick('https://linkedin.conm')}>
              <Text>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 300,
    borderRadius: 6,
  },
  cardBody: {
    marginTop: 10
  },
  cardDescription: {},
  cardSocials: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  container:{
    backgroundColor: '#4eb8ff',
    padding: 8,
    elevation: 3,
    shadowOffset:{
      height:1,
      width:1
    },
    shadowColor: '#333',
    borderRadius: 6,
    margin: 10
  }
})