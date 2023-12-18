import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import { useState } from 'react';
import SearchDropDown from './app/component/SearchDropDown';
import {LinearGradient} from 'expo-linear-gradient';



//home screen
function HomeScreen ({navigation}) {
  return (
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <View>
      <Text style={styles.log}>Welcome To Easy Readers!</Text>
      <View style={styles.imagee}>
        <Image source={{
          width:390,
          height:300,
          uri:"https://www.breakthrough.org.hk/wp-content/gallery/e4bd90e695a6e5ba97/Photo_Homepage-slider_book-gallery-3.jpeg",
        }}/>
      </View>
      <View style={styles.buttonn}>
      <View style={styles.but1}>
      <Button title = "LOGIN" onPress = {() => navigation.navigate('Login')} />
      </View>
      <View style={styles.but2}>
      <Button title = "REGISTER" onPress = {() => navigation.navigate('Register')} />
      </View>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>Thank you for join with us.</Text>
      </View>
    </View>
    </LinearGradient>
  )
}  

//login screen
function CustomInput ({navigation}) {
  return (
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
      <View style={styles.containe}>
          <Text style={styles.log}>Welcome To Login!</Text>
          <View style={styles.imagee}>
              <Image source={{
                width:390,
                height:200,
                uri:"https://www.lifesavvy.com/p/uploads/2020/04/b0f40ad8.jpg?width=1200",
              }}/>
          </View>
          <View style={styles.part1}>
            <Text style={styles.inputs}>UserName:</Text>
            <TextInput style={styles.input} placeholder= "Enter Username"/>
          </View>
          <View style={styles.part2}>
            <Text style={styles.inputs}>Password:</Text>
            <TextInput style={styles.input} placeholder= "Enter Password" />
          </View>

          <View style={styles.butt}>
          <Button title = "SIGN IN" onPress = {() => navigation.navigate('DASHBOARD')} />
          <View style={styles.butt2}>
            <Button title = "FORGOT PASSWORD" onPress = {() => navigation.navigate('FORGOT_PASSWORD')} />
          </View>
          </View>
      </View>
      </LinearGradient>
  )
}

//dashboard screen
function DetailScreen ({navigation}) {
  return (
    <View style={styles.Detail}>
      <View style={styles.imag}>
          <Image source={{
            width:390,
            height:200,
            marginTop:10,
            uri:"https://media.istockphoto.com/photos/book-reader-on-the-blurred-background-picture-id874160692?k=20&m=874160692&s=612x612&w=0&h=8EFekfEl0ClqX424I2C9o0YEtlwCBE3Sf-7r1Cp0SYU=",
            }}/>
      </View>
      <View style={{width:300,marginLeft:10,marginTop:10,}}>
        <Button title = "Novels" onPress = {() => navigation.navigate('Novels')} />
      </View>
      <View style={{width:300,marginLeft:10,marginTop:20,}}>
        <Button title = "Short Stories" onPress = {() => navigation.navigate('Short')} />
      </View>
      <View style={{width:300,marginLeft:10,marginTop:20,}}>
        <Button title = "Historical Fiction" onPress = {() => navigation.navigate('Historical')} />
      </View>
      <View style={{width:300,marginLeft:10,marginTop:20,marginBottom:10,}}>
        <Button title = "Action and Adventure" onPress = {() => navigation.navigate('Action')} />
      </View>
      <View style={styles.ima}>
          <Image source={{
            width:390,
            height:195,
            marginTop:20,
            uri:"https://thumbs.dreamstime.com/b/stack-colorful-books-e-book-reader-21610281.jpg",
            }}/>
      </View>
    </View>
  )
}

//novels book
function NovelsScreen ({navigation}){
  return(
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#000000",fontWeight:"bold",}}>Famous Novels!!</Text>
      <View style={{marginLeft:10,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/MadolDoova.jpg/220px-MadolDoova.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "Madol Doova" onPress = {() => navigation.navigate('Madol')} />
      </View>
      </View>

      <View style={{marginLeft:10,marginTop:8,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:20,
            marginLeft:30,
            uri:"https://images-na.ssl-images-amazon.com/images/I/91Ux3rnim+L.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "Blade Runner" onPress = {() => navigation.navigate('Blade')} />
      </View>
      </View>
      
      <View style={{marginLeft:220,marginTop:-593}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327248026l/9293020.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "The Elephant Tree" onPress = {() => navigation.navigate('Elephant')} />
      </View>
      </View>
      
      <View style={{marginLeft:220,marginTop:8,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://s26162.pcdn.co/wp-content/uploads/2019/09/817FNKcZ1pL-663x1024.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "The Tiger's Wife" onPress = {() => navigation.navigate('Tiger')} />
      </View>
      </View>
      </ScrollView>
  )
}

function MadolScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <View>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>MADOL DOOVA</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/MadolDoova.jpg/220px-MadolDoova.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Martin Wickramasinghe</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.500</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:110,marginRight:10, textAlign:"justify",}}>It is very popular in Sri Lanka. It is a very interesting book and it is written in simple language. The main character is Upali Giniwella who lost his mother when he was seven years old and he is in the care of his stepmother. His best friend is Ginna and they get into a lot of mischief in the village.</Text>
    </View>
    </LinearGradient>
  )
}
function BladeScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>BLADE RUNNER </Text>
      <View>
          <Image source={{
            width:200,
            height:280,
            marginTop:15,
            marginLeft:50,
            uri:"https://images-na.ssl-images-amazon.com/images/I/91Ux3rnim+L.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Philip K. Dick</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.1000</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:125,marginRight:10, textAlign:"justify",}}>By 2021, the World War has killed millions, driving entire species into extinction and sending mankind off-planet. Those who remain covet any living creature, and for people who can’t afford one, companies build incredibly realistic simulacra: horses, birds, cats, sheep. They’ve even built humans. Immigrants to Mars receive androids so sophisticated they are indistinguishable from true men or women. Fearful of the havoc these artificial humans can wreak, the government bans them from Earth. Driven into hiding, unauthorized androids live among human beings, undetected. Rick Deckard, an officially sanctioned bounty hunter, is commissioned to find rogue androids and “retire” them. But when cornered, androids fight back—with lethal force.</Text>
    </ScrollView>
    </LinearGradient>
  )
}
function ElephantScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>THE ELEPHANT TREE</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327248026l/9293020.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By R.D. Ronald</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.750</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:125,marginRight:10, textAlign:"justify",}}>Mark Fallon is an overworked detective investigating a spate of attacks at a string of high profile city centre nightclubs. Scott is a dejected 24 year old struggling to make ends meet working for his brother and supplementing his income with a small-scale drug dealing operation. Angela is an attractive 23 year old, raised by her father, a career criminal and small time drug dealer who supplies Scott with cannabis. This is a chilling tale spanning a few months in the lives of Scott and Angela, where realizations about the present combine with shocking revelations from the past leading to an apocalyptic climax where they no longer know whom they can trust. </Text>
    </ScrollView>
    </LinearGradient>
  )
}
function TigerScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <View>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>THE TIGER'S WIFE</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://s26162.pcdn.co/wp-content/uploads/2019/09/817FNKcZ1pL-663x1024.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Téa Obreht</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.450</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:130,marginRight:10, textAlign:"justify",}}>The Tiger's Wife takes place in an unnamed Balkan country — closest in character to the former Yugoslavia, where Obreht was born. Natalia, a young medical student, is on her way to an orphanage in enemy territory when she learns that her beloved grandfather has died.</Text>
    </View>
    </LinearGradient>
  )
}

//short stories books
function ShortScreen ({navigation}){
  return(
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#000000",fontWeight:"bold",}}>Famous Short Stories!!</Text>
      <View style={{marginLeft:10,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://assets.americanliterature.com/al/images/story/the-bogey-beast.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "The Bogey-Beast" onPress = {() => navigation.navigate('Bogey')} />
      </View>
      </View>

      <View style={{marginLeft:10,marginTop:8,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://m.media-amazon.com/images/I/61C3vVhcbQL._SL500_.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "The Tortoise & Hare" onPress = {() => navigation.navigate('Hare')} />
      </View>
      </View>
      
      <View style={{marginLeft:220,marginTop:-592}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://m.media-amazon.com/images/I/51LOjsLpyHL._SL500_.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "Orientation" onPress = {() => navigation.navigate('Orientation')} />
      </View>
      </View>
      
      <View style={{marginLeft:220,marginTop:8,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://m.media-amazon.com/images/I/41S7QB4VQOL._SL500_.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "Paper Menagerie" onPress = {() => navigation.navigate('Paper')} />
      </View>
      </View>
      </ScrollView>
  )
}

function BogeyScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>THE BOGEY-BEAST</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://assets.americanliterature.com/al/images/story/the-bogey-beast.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Flora Annie Steel</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.550</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:100,marginRight:10, textAlign:"justify",}}>A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly).
What Is Great About It: The old lady in this story is one of the most cheerful characters anyone can encounter in English fiction. Her positive disposition (personality) tries to make every negative situation seem like a gift, and she helps us look at luck as a matter of our view rather than events.</Text>
    </ScrollView>
    </LinearGradient>
  )
}
function HareScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>The Tortoise & The Hare </Text>
      <View>
          <Image source={{
            width:250,
            height:280,
            marginTop:15,
            marginLeft:50,
            uri:"https://m.media-amazon.com/images/I/61C3vVhcbQL._SL500_.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:270,marginTop:-180, fontWeight:"bold",}}>By Aesop</Text>
      <Text style={{fontSize:18,marginLeft:270,}}>LKR.350</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:130,marginRight:10, textAlign:"justify",}}>This classic fable (story) tells the story of a very slow tortoise (another word for turtle) and a speedy hare (another word for rabbit). The tortoise challenges the hare to a race. The hare laughs at the idea that a tortoise could run faster than him, but when the two actually race, the results are surprising.
What Is Great About It: Have you ever heard the English expression, “Slow and steady wins the race”? This story is the basis for that common phrase. This timeless (classic) short story teaches a lesson that we all know but can sometimes forget: Natural talent is no substitute for hard work, and overconfidence often leads to failure.</Text>
    </ScrollView>
    </LinearGradient>
  )
}
function OrientationScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>ORIENTATION</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://m.media-amazon.com/images/I/51LOjsLpyHL._SL500_.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Daniel Orozco</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.600</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:130,marginRight:10, textAlign:"justify",}}>This is a humorous story where the speaker explains the office policies, as well as gossip about the staff, to a new employee.
It is extremely easy to read as the sentences are short and without any overly difficult words. Many working English learners will relate to it as it explains the absurdities (silly moments) of modern office life and how so little of it makes sense.
What Is Great About It: Modern workplaces often feel like theaters where we pretend to work rather than get actual work done. The speaker exposes this reality that nobody will ever admit to. He over-explains everything from the view out the office window to the intimate details of everyone’s life—from the overweight loner to the secret serial killer. </Text>
    </ScrollView>
    </LinearGradient>
  )
}
function PaperScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>PAPER MENAGERIES</Text>
      <View>
          <Image source={{
            width:230,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://m.media-amazon.com/images/I/41S7QB4VQOL._SL500_.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:250,marginTop:-180, fontWeight:"bold",}}>By Ken Liu</Text>
      <Text style={{fontSize:18,marginLeft:250,}}>LKR.480</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:140,marginRight:10, textAlign:"justify",}}>Jack’s mother can make paper animals come to life. In the beginning, Jack loves them and spends hours with his mom. But as soon as he grows up he stops talking to her since she is unable to converse (speak) in English.
When his mother tries to talk to him through her creations, he kills them and collects them in a box. After a tragic loss, he finally gets to know her story through a hidden message which he should have read a long time ago.
What Is Great About It: The story is a simple narration that touches on complex issues. It is about leaving your own country with the promise of a better life.</Text>
    </ScrollView>
    </LinearGradient>
  )
}

//historical books
function HistoricalScreen ({navigation}){
  return(
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#000000",fontWeight:"bold",}}>Famous Historical Fiction!!</Text>
      <View style={{marginLeft:10,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781509836215.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "A Thousand Ships" onPress = {() => navigation.navigate('Ships')} />
      </View>
      </View>

      <View style={{marginLeft:10,marginTop:8,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529038828.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "The Darkest Sin" onPress = {() => navigation.navigate('Darkest')} />
      </View>
      </View>
      
      <View style={{marginLeft:220,marginTop:-592}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529005219.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "The Dance Tree" onPress = {() => navigation.navigate('Dance')} />
      </View>
      </View>
      
      <View style={{marginLeft:220,marginTop:8,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9780330463294.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "Ross Poldark" onPress = {() => navigation.navigate('Ross')} />
      </View>
      </View>
      </ScrollView>
  )
}

function ShipsScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>A THOUSAND SHIPS</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781509836215.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Natalie Haynes</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.500</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:100,marginRight:10, textAlign:"justify",}}>Part history, part legend, the Trojan War often defines antiquity. Natalie Haynes’s powerful historical novel gives new life to the story of two ancient cultures at war. She takes a tale of heroes and kings and explores the experiences of the women caught up in these terrifying events. From slave women to queens, and even a goddess or two, Natalie Haynes’ retelling puts female voices front and centre. Longlisted for the Women's Prize for Fiction 2020 and chosen as one of The Guardian's 'Best Books of 2019', if you're looking for your next historical fiction read, A Thousand Ships is not to be missed.</Text>
    </ScrollView>
    </LinearGradient>
  )
}
function DarkestScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>THE DARKEST SIN </Text>
      <View>
          <Image source={{
            width:200,
            height:280,
            marginTop:15,
            marginLeft:50,
            uri:"https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529038828.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By D. V. Bishop</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.650</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:130,marginRight:10, textAlign:"justify",}}>It's spring in Florence in 1537, and Cesare Aldo is investigating a report that a convent in the northern quarter has been breached. Soon Aldo finds himself immersed in a bitterly divided community. And when a man's body is found in the convent, it seems as if one of the nuns must be the murderer. Meanwhile, Constable Carlo Strocchi finds human body parts in the Arno, which turn out to be the remains of a much feared officer who went missing in the winter. Aldo and Strocchi search for the truth, in an investigation that is increasingly full of peril.</Text>
    </ScrollView>
    </LinearGradient>
  )
}
function DanceScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>THE DANCE TREE</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529005219.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-220, fontWeight:"bold",}}>By Kiran Millwood Hargrave</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.780</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:120,marginRight:10, textAlign:"justify",}}>It's 1518 in Strasbourg, and in the intense summer heat a solitary woman starts to dance in the main square. She dances for days without rest, and is joined by hundreds of other women. The city authorities declare a state of emergency, and bring in musicians to play the devil out of the dancing women. Meanwhile pregnant Lisbet, who lives at the edge of the city, is tending to the family's bees. The dancing plague intensifies, as Lisbet is drawn into a net of secret passions and deceptions. Inspired by true events, this is a compelling story of superstition, transformative change and women pushed to their limits.

</Text>
    </ScrollView>
    </LinearGradient>
  )
}
function RossScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <View>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>THE ROSS POLDARK</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9780330463294.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-200, fontWeight:"bold",}}>By Winston Graham</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.950</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:120,marginRight:10, textAlign:"justify",}}>Historical fiction is often the basis for some of the most acclaimed and popular period dramas, and Winston Graham’s Poldark series is no exception. Fans of the Poldark TV series in particular, and historical fiction in general, will love this sweeping saga. In the first book Ross Poldark, the eponymous hero returns home from the American War of Independence to find his estate derelict and the woman he loves engaged to his cousin.

</Text>
    </View>
    </LinearGradient>
  )
}

//Action books
function ActionScreen ({navigation}){
  return(
    <ScrollView>
      <Text style={{fontSize:27, textAlign:"center", color:"#000000",fontWeight:"bold",}}>Famous Action & Adventures!!</Text>
      <View style={{marginLeft:10,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1532539711/pro_pbid_4086648.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "The Ancient Nine" onPress = {() => navigation.navigate('Ancient')} />
      </View>
      </View>

      <View style={{marginLeft:10,marginTop:8,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1619515517/pro_pbid_4547885.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "The Sentinel" onPress = {() => navigation.navigate('Sentinel')} />
      </View>
      </View>
      
      <View style={{marginLeft:220,marginTop:-592}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1599443818/pro_pbid_4287670.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "Empire of Lies" onPress = {() => navigation.navigate('Empire')} />
      </View>
      </View>
      
      <View style={{marginLeft:220,marginTop:8,}}>
      <View style={styles.i1}>
          <Image source={{
            width:180,
            height:250,
            marginTop:15,
            marginLeft:30,
            uri:"https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1587739001/pro_pbid_4594927.jpg",
            }}/>
      </View>
      <View style={{width:180,marginLeft:0,marginTop:5,}}>
        <Button title = "Coastal Pursuit" onPress = {() => navigation.navigate('Coastal')} />
      </View>
      </View>
      </ScrollView>
  )
}
function AncientScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>THE ANCIENT NINE</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1532539711/pro_pbid_4086648.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Lan K. Smith</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.1050</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:130,marginRight:10, textAlign:"justify",}}>This “based on real events” novel from Ian K. Smith has a lot going for it: secret histories inside Harvard’s walls, a mysterious disappearance, and a coveted Harlan Coben seal of approval. The Ancient Nine takes us back to Cambridge, Massachusetts, in 1988, where two unlikely friends — Dalton and Spenser — begin to uncover the dark past of the Delphic Club, Harvard’s most prestigious and exclusive finals club. As Dalton and Spenser dig into Delphic’s closely guarded secrets they run up against a powerful group of alums, the Ancient Nine, who will stop at nothing to protect the club they hold dear.

</Text>
    </ScrollView>
    </LinearGradient>
  )
}
function SentinelScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>THE SENTINEL </Text>
      <View>
          <Image source={{
            width:200,
            height:280,
            marginTop:15,
            marginLeft:50,
            uri:"https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1619515517/pro_pbid_4547885.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Lee Child & Andrew Child</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.980</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:100,marginRight:10, textAlign:"justify",}}>Jack Reacher has become one of the mainstays of the action and adventure genre because he’s a nearly-perfect thriller character: physically imposing, intelligent, deeply moral, and free. Child coauthored the 25th book in the series with his younger brother and fellow novelist Andrew Grant, who will take over the series under the pen name Andrew Child — but the DNA is all Reacher. Arriving in Nashville with no particular plan, Reacher does what he always does: Seeing a group of musicians being treated unfairly by a bar owner, he steps in to make things right and soon finds himself embroiled in a plot that goes deeper than anyone could have imagined. As usual, the action begins to simmer immediately, and following Reacher is so entertaining you just keep turning pages to find out how he settles all his accounts by the end.
</Text>
    </ScrollView>
    </LinearGradient>
  )
}
function EmpireScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>EMPIRE OF LIES</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1599443818/pro_pbid_4287670.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By Raymond Khoury</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.1200</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:100,marginRight:10, textAlign:"justify",}}>This alternate history novel brings us to a very different modern Paris, where the Ottoman Empire never collapsed, and, in fact, conquered the whole of Europe. With a looming war in the background, Kamal, an officer in the sultan’s secret police, is called to investigate the appearance of a mysterious stranger. However, Kamal soon discovers that this stranger holds powerful secrets that could threaten the integrity of the empire and finds himself on a dangerous mission that could change the fate of the world forever. If you enjoyed The Man in the High Castle, you’ll love Empire of Lies. </Text>
    </ScrollView>
    </LinearGradient>
  )
}
function CoastalScreen({navigation}){
  return(
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
      <Text style={{fontSize:30, textAlign:"center", color:"#0000b3",fontWeight:"bold",}}>COASTAL PURSUIT</Text>
      <View>
          <Image source={{
            width:200,
            height:300,
            marginTop:15,
            marginLeft:50,
            uri:"https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1587739001/pro_pbid_4594927.jpg",
            }}/>
      </View>
      <Text style={{fontSize:24,marginLeft:210,marginTop:-180, fontWeight:"bold",}}>By J.D. Dudycha</Text>
      <Text style={{fontSize:18,marginLeft:210,}}>LKR.820</Text>
      <Text style={{fontSize:18,marginLeft:10,marginTop:130,marginRight:10, textAlign:"justify",}}>If you’re looking to jump into an exciting adventure series from the very beginning, Dudycha has you covered with his first FBI Heist book. FBI Special Agent Jasper James heads to Florida and has a run-in with one of the FBI’s Most Wanted criminals — an encounter that ends with two bullets to the chest. Saved by his Kevlar vest, James is amazed to be alive — and determined to get his revenge. But his investigation goes nowhere fast, and as the dead ends pile up, James realizes there’s more going on than a criminal who wanted him dead. The story begins with a literal bang, dropping you into a breakneck story that races to a surprising, satisfying, and thrilling conclusion without a single wasted word.</Text>
    </ScrollView>
    </LinearGradient>
  )
}

//register screen
function RegScreen ({navigation}) {
  return (
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <ScrollView>
    <View style={styles.containe}>
      <Text style={styles.log}>Welcome To Register!</Text>
      <View style={styles.imagee}>
              <Image source={{
                width:390,
                height:100,
                uri:"https://www.lifesavvy.com/p/uploads/2020/04/b0f40ad8.jpg?width=1200",
              }}/>
      </View>
      <View style={styles.part1}>
        <Text style={styles.inputs}>Full Name:</Text>
        <TextInput style={styles.input} placeholder= "Enter Fullname"/>
      </View>
      <View style={styles.part2}>
        <Text style={styles.inputs}>Email:</Text>
        <TextInput style={styles.input} placeholder= "Enter Email" />
      </View>
      <View style={styles.part2}>
        <Text style={styles.inputs}>Username:</Text>
        <TextInput style={styles.input} placeholder= "Enter Username" />
      </View>
      <View style={styles.part2}>
        <Text style={styles.inputs}>Password:</Text>
        <TextInput style={styles.input} placeholder= "Enter Password" />
      </View>

      <View style={styles.butt}>
      <Button title = "REGISTER" onPress = {() => navigation.navigate('Login')} />
      </View>
  </View>
  </ScrollView>
  </LinearGradient>
)
}

//forgot password screen
function FpScreen ({navigation}) {
  return (
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <View style={styles.containe}>
    <Text style={styles.log}>Reset Your Password!</Text>
    <View style={styles.imagee}>
              <Image source={{
                width:390,
                height:200,
                uri:"https://images.idgesg.net/images/article/2020/05/access_to_username_and_password_authentication_login_by_weedezign_gettyimages-909818270_2400x1600-100842356-large.jpg?auto=webp&quality=85,70",
              }}/>
      </View>

    <View style={styles.part1}>
      <Text style={styles.inputs}>UserName:</Text>
      <TextInput style={styles.input} placeholder= "Enter Username"/>
    </View>
    <View style={styles.part2}>
      <Text style={styles.inputs}>Email:</Text>
      <TextInput style={styles.input} placeholder= "Enter Email" />
    </View>
    <View style={styles.butt}>
    <Button title = "SEND CODE" onPress = {() => navigation.navigate('Login')} />
    </View>
</View>
</LinearGradient>
)
}

//settings screen
function SettingScreen () {
  return (
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>
    <View style={styles.Detail}>
      <Text style={{color:"blue", fontSize:25, marginLeft:-16,marginTop:50,}}>You Can Change your settings here</Text>
      <FlatList style={{marginLeft:-200,marginTop:20,}}
        data={[
          {key: 'General Settings'},
          {key: 'Profile Settings'},
          {key: 'Change Password'},
          {key: 'Device Maintenance'},
          {key: 'Display Settings'},
          {key: 'Themes'},
        ]}
        renderItem={({item}) => <Text style={{fontSize:18,}}>{item.key}</Text>}
      />
            <View style={styles.imagee}>
              <Image source={{
                width:390,
                height:280,
                uri:"https://media.wired.com/photos/5f7b9cfd126693e1dc256c39/master/pass/games-settings-wired.png",
              }}/>
      </View>
    </View>
    </LinearGradient>
  )
}

//search screen
function SearchScreen () {
  const [dataSource] = useState(['madolDoova', 'bladeRunner', 'theElephantTree', 'theTigersWife', 'theBogeyBeast', 'theTortoise&Hare', 'Orientation', 'paperMenagerie', 'thousandShips','theDarkestSin','theDanceTree', 'rossPoldark','theAncientNine', 'theSentinel', 'coastalPursuit', 'empireofLies'])
  const [colors] = useState(['#9599e4', '#dce42d', '#9de293', "#a8eae6",
  ])
  const [filtered, setFiltered] = useState(dataSource)
  const [searching, setSearching] = useState(false)
  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  return (
    <LinearGradient colors={['#e1d8b6','#ecd597','#eeeee8','#e8c258','#FFFFFF','#e1d8b6','#FFFFFF','#00d4ff',]} style={{flex: 1,}}>

<View style={styles.container}>
<TextInput
  style={styles.textInput}
  placeholder="Search Book Here"
  placeholderTextColor='white'
  onChangeText={onSearch}
/>
<View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
  <View style={{
    flexWrap: 'wrap', flexDirection: 'row',
    justifyContent: 'center',
    marginTop:80,

  }}>
    {
      dataSource.map((item, index) => {
        return (
          <View style={{
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 80, width: 80, backgroundColor: randomColor()
          }}>
            <Text style={{ fontSize: 15, }}>
              {item}
            </Text>
          </View>
        )
      })
    }
  </View>
</View>

{
  searching &&
  <SearchDropDown
    onPress={() => setSearching(false)}
    dataSource={filtered} />
}
</View>
</LinearGradient>
)
}

//tab navigation
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({focused})=>(
        <View>
        <Image source={{
          width:30,
          height:30,
          marginTop:15,
          marginLeft:50,
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KAHwUCyT3up90CllCHRm7cMAHELmKzv4iWsMleJrRBLs9psLxYMyvQ4g4YPMr4xL4ok&usqp=CAU",
          }}/>
        </View> ),}}/>

      <Tab.Screen name="Login" component={CustomInput} options={{tabBarIcon:({focused})=>(
        <View>
        <Image source={{
          width:30,
          height:30,
          marginTop:25,
          marginLeft:50,
          uri:"https://icon-library.com/images/504737-200.png",
          }}/>
        </View>),}}/>

      <Tab.Screen name="Register" component={RegScreen}options={{tabBarIcon:({focused})=>(
        <View>
        <Image source={{
          width:25,
          height:25,
          marginTop:15,
          marginLeft:50,
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoTQ_Npwmf7BbL8E9EIbw1aQlvO4EkB4HZmkIt1v7RNwP7_wLz9Q80YBRNZXsv1rG-zw&usqp=CAU",
        }}/>
        </View>),}}/>

        <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon:({focused})=>(
        <View>
        <Image source={{
          width:25,
          height:25,
          marginTop:15,
          marginLeft:50,
          uri:"http://cdn.onlinewebfonts.com/svg/img_456268.png",
          }}/>
        </View>),}}/>

      <Tab.Screen name="Settings" component={SettingScreen} options={{tabBarIcon:({focused})=>(
        <View>
        <Image source={{
          width:25,
          height:25,
          marginTop:15,
          marginLeft:50,
          uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/640px-Windows_Settings_app_icon.png",
          }}/>
        </View>),}}/>
    </Tab.Navigator>
  );
}

//stack navigations
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name= "Home" component = {HomeScreen} />
        <Stack.Screen name= "UserInput" component = {CustomInput} />
        <Stack.Screen name= "DASHBOARD" component = {DetailScreen} />
        <Stack.Screen name= "REGISTER" component = {RegScreen} />
        <Stack.Screen name= "FORGOT_PASSWORD" component = {FpScreen} />
        <Stack.Screen name= "Novels" component = {NovelsScreen} />
        <Stack.Screen name= "Short" component = {ShortScreen} />
        <Stack.Screen name= "Historical" component = {HistoricalScreen} />
        <Stack.Screen name= "Action" component = {ActionScreen} />
        <Stack.Screen name= "Madol" component = {MadolScreen} />
        <Stack.Screen name= "Blade" component = {BladeScreen} />
        <Stack.Screen name= "Elephant" component = {ElephantScreen} />
        <Stack.Screen name= "Tiger" component = {TigerScreen} />
        <Stack.Screen name= "Bogey" component = {BogeyScreen} />
        <Stack.Screen name= "Hare" component = {HareScreen} />
        <Stack.Screen name= "Orientation" component = {OrientationScreen} />
        <Stack.Screen name= "Paper" component = {PaperScreen} />
        <Stack.Screen name= "Ships" component = {ShipsScreen} />
        <Stack.Screen name= "Darkest" component = {DarkestScreen} />
        <Stack.Screen name= "Dance" component = {DanceScreen} />
        <Stack.Screen name= "Ross" component = {RossScreen} />
        <Stack.Screen name= "Ancient" component = {AncientScreen} />
        <Stack.Screen name= "Sentinel" component = {SentinelScreen} />
        <Stack.Screen name= "Empire" component = {EmpireScreen} />
        <Stack.Screen name= "Coastal" component = {CoastalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//properties
const styles = StyleSheet.create({
  log:{ 
    textAlign: 'center', 
    justifyContent: 'center', 
    paddingBottom:100, 
    paddingTop:30,
    color:"#063970",
    fontWeight:"bold",
    fontSize:30,
  },
  buttonn:{
    marginTop:20,
    width:310,
    height:100,
    marginLeft:50,
  },
  imagee:{
    marginTop:-70,
    marginLeft:10,
  },
  Detail:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  part:{
    marginTop:30,
  },
  text:{
    fontSize:15,
    textAlign:"center",
  },
  butt:{
    width:180,
    height:150,
    marginTop:13,
    marginLeft:120,
  },
  butt2:{
    width:180,
    height:50,
    marginTop:15,
  },

  part1:{
    marginTop:10,
    marginLeft:30,
  },
  part2:{
    marginTop:10,
    marginLeft:30,
  },
  inputs:{
    fontSize:20,
  },
  input:{
    width:350,
    height:50,
    fontSize:15,
    backgroundColor: "#e6e6e6",
  },
  but1:{
    width:200,
    height:150,
    marginTop:20,
    marginLeft:60,
  },
  but2:{
    width:200,
    height:150,
    marginTop:-100,
    marginLeft:60,
  },
  b1:{
    width:250,
    height:250,
    marginTop:200,
  },
  b2:{
    width:250,
    height:250,
    marginTop:-120,
  },
  b3:{
    width:250,
    height:250,
    marginTop:-120,
  },
  container: {
    alignItems: 'center',
    marginTop: '20%',
    flex: 1
  },
  textInput: {
    backgroundColor: '#BFBFBF',
    width: '90%',
    borderRadius:40,
    height: 50,
    marginTop:-40,
    fontSize: 17,
    textAlign:"center",
    paddingHorizontal: 10,
  },
});


