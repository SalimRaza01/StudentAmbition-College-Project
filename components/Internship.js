import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image,Linking, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

const handleLinkPress = (url) => {
  Linking.openURL(url);
  };
export default function Subject1(props) {

  return (

    <View >
<TouchableOpacity style={styles.back} 
      onPress={() => props.navigation.navigate('Home')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.back}>
        <Image style={styles.wpic1} source={require('../assets/back.png')} />
         
        </LinearGradient>
      </TouchableOpacity>

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>  Internship</Text>

      </LinearGradient>

      <ScrollView style={{ marginBottom: 130 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://trainings.internshala.com/?utm_source=Google-Search&utm_campaign=CT-Search-Brand-Oct22&utm_adgroup=Brand&utm_locationinterest=&utm_searchkeyword=internshala&utm_keywordid=kwd-296575527534&gclid=Cj0KCQjwmZejBhC_ARIsAGhCqneY8wLJjc4QMG4vcoL0ytlz93bpOnxUy74FDIM0eQ1pEcBMILN9RZsaAv_-EALw_wcB')}>
            <Text style={styles.btntext}>Internshala</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://www.coursera.org/courses?query=Free%20certificate%20courses&=&utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA__branded_FTCOF_courseraplus_arte_PMax&utm_content=Degree&campaignid=19607944793&adgroupid=&device=m&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo&gclid=Cj0KCQjwmZejBhC_ARIsAGhCqne3MoHkAVlJRYcFxhyLyonSe4tshoEL3AgHI9EoCNqx53M3M0I1hxsaAvtKEALw_wcB')}>
            <Text style={styles.btntext}>Coursera</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://www.glassdoor.co.in/index.htm')}>
            <Text style={styles.btntext}>Glassdoor</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjtyNGJ4YD_AhUMen0KHfSYADMYABAAGgJzZg&agsac=niyhPn2mY4E&cit=CkUKCQjwmZejBhDMARI0AH1jZunxk5E3LG_KCLfM0FslE3gJ_uRyd4gW2ujC3wbewF5VA6vgZ98C54DPy71EwWeHcBoCVQnw_wcB&ohost=www.google.com&cid=CAES1wHg9qDXjCN45iycqwxlxPUmRQsmlp3ndqVm-iJW11FVMX53a-cd-yMBPf-F5K0D43Pd-ovgUzemD9ORpdk4tCHkyLVxWNMTjs8p_pvF1ZgYp46FHBVw2yjP_kLSQAkmDe3LLuSgG3VK4gOzLVy9l4pacugZYiasOmEbQthhzWACT5oHzoa6ZmAyxD8nOM9gepOWRWnvr7MRvOXjPLDAZZkPlQ8j2DUNQCopR3TrV_GDFXjTDZkd5c6yT3kUO6q8zuYRcPj7KR7vRIx7TcqFrlrfAHhNATw5Cw&sig=AOD64_05xdBTx3HOQ9-Ks--O8ymYBHLNCQ&q&adurl&ved=2ahUKEwiTs8mJ4YD_AhWz9jgGHUu4B8sQ0Qx6BAgJEAE&ms=CoAC49Gt1at94AovL4ovqfY5mafVTjKK3KMqKeeGTGxmBjbC2uUmTpx7N1nPp3c_KfStRMFxYPTZ-90mczii3Z5mLvpuWNymGNseAeLPycEF69kDJZiMvG6OczpEZ4pMj8TyLJefE3DoOadOlygHgmzqkqC1mW4ebjjlUkL9-Sx8zjoUPx11_Fyizpvk0qIVH8P7YOiO4wBTZEQuts1kn-U-l3xfKtfTkGffgrTelvuYjQlbVQWSTpf0AQ4hb8Xb3GL3gvHB2xs6nPeHrCLIL6szXd94-pKO1fd9T8osiIAD5DN_EDOTLSO1E7Sme-AHNtUJ5dZ4kNSsU1Q90tGicEhjdAqAAmuRAqlHSm_V4m0pLQ0Te1VWZ5wDwS7AqPSGBpnUwQ3bsjD2_Ugwr6iZBJsxJKGmlOmklir6UBwSzKovv-2rcuE0fjlcpQNRkmb9GIklu0tYsH3zt3RZATz6OsKs8gZEY2n1x_1i8QjTUaKWGocYdvPAe1algzL65c33A2P6SN-xIZrP7R5tmb7D7RxZT4bd0yTL3kJDZMhwh2CoEJpm7nDPJTq76jn-43Jm67Pd_kWuKm5I6JyOarbfIlgiJY16p0epzNsUH6K_OnG4VnDhvlrfohA8sj4V1elKtEl8Ab_DOfiYhrTlrhrXMr6o2wtFMzsxMOXhn4RX_4CdNxtJxXISEORl_ROLSz4bl9OaaHcOSDk')}>
            <Text style={styles.btntext}>Indeed</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://www.hellointern.com/')}>
            <Text style={styles.btntext}>Hellointern</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://www.wayup.com/')}>
            <Text style={styles.btntext}>WayUp</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://www.coolworks.com/')}>
            <Text style={styles.btntext}>Coolworks</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://internmatch.io/')}>
            <Text style={styles.btntext}>InternMatch</Text>
          </TouchableOpacity>
          </LinearGradient>
        


      </ScrollView>
       
    </View>
  )

}


const styles = StyleSheet.create({

 
 
  btntext: {
  
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',

  },
  linearGradient: {
    flex:1,
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3),
    borderBottomWidth:2,
    borderEndColor:'black',
  },
  header: {
    fontSize: responsiveFontSize(4),
    height: responsiveHeight(7),
    marginBottom: responsiveHeight(8),
    marginLeft:50,
    width:350,
    marginTop:-54
  },
 
  headertext1: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(3),
    color: 'white',
    fontWeight: 'bold',
  },
  wpic1: {
    position: 'absolute',
    height: responsiveHeight(4),
    width: responsiveWidth(8),
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(1),
borderRadius:40,

   

},
back: {
    fontSize: responsiveFontSize(4),
    height: responsiveHeight(7),
    
     width:50
  },

  headertext: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    
    color: 'white',
    fontWeight: 'bold',
  },
  


})

