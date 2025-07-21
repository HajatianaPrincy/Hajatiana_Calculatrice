import { StatusBar } from 'expo-status-bar';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'; 

export default function App() {

  const [inputValue, setInputValue] = useState('');

  
  const Afficher = (value) => {
    if (value == 'AC') {
      setInputValue('');
    }

    else if (value == 'BS') {
      setInputValue(prevValue => prevValue.slice(0, -1));
    }

    else {
      setInputValue(prevValue => prevValue + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.edit}>
        <TextInput
          style={styles.input}
          value={inputValue} 

          editable={false} 
        />
        <TouchableOpacity style={styles.point} onPress={() => {}}>
          <MaterialCommunityIcons name="dots-vertical" color="#000" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.nbr}>

        <TouchableOpacity style={styles.btn} onPress={() => Afficher('√')}>
          <Text style={styles.racin}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('π')}>
          <MaterialCommunityIcons name="pi" color="#000" style={styles.pi}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('^')}>
          <Text style={styles.expo}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('!')}>
          <Text style={styles.exla}>!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('AC')}> 
          <Text style={styles.sup}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('()')}> 
          <Text style={styles.parenthese}> () </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('%')}>
          <Text style={styles.pourcentage}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('/')}>
          <Feather name="divide" color="#000" style={styles.division} />
        </TouchableOpacity>
      </View>

      <View style={styles.nbr1}>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('7')}>
          <Text style={styles.sept}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('8')}>
          <Text style={styles.heuit}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('9')}>
          <Text style={styles.neuf}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('*')}>
          <MaterialCommunityIcons name="multiplication" color="#000" style={styles.multi}/>
        </TouchableOpacity>
      </View>

      <View style={styles.nbr2}>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('4')}>
          <Text style={styles.quatre}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('5')}>
          <Text style={styles.cinq}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('6')}>
          <Text style={styles.six}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('-')}>
          <Entypo name="minus" color="#000" style={styles.moin}/>
        </TouchableOpacity>
      </View>

      <View style={styles.nbr3}>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('1')}>
          <Text style={styles.un}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('2')}>
          <Text style={styles.deux}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('3')}>
          <Text style={styles.trois}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('+')}>
          <MaterialIcons name="add" color="#000" style={styles.add}/>
        </TouchableOpacity>
      </View>

      <View style={styles.nbr4}>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('0')}>
          <Text style={styles.zero}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('.')}>
          <Text style={styles.virgule}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('BS')}> 
          <Ionicons name="backspace-sharp" color="#000" style={styles.bs}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Afficher('=')}>
          <Text style={styles.egal}>=</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'light',
    alignItems: 'center',
    justifyContent: 'center',
  },

  point:{
    position:'absolute',
    marginTop:50,
    right:10,
},

  input:{
    height: 280,
    width: 330,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor:'lightblue',
    textAlign:'right',
    fontSize: 30, 
    paddingTop: 100, 
  },

  actions:{
    flexDirection:'row',
    alignItems: 'center',
  },

  nbr1:{
    flexDirection:'row',
    alignItems: 'center',
  },

  nbr2:{
    flexDirection:'row',
    alignItems: 'center',
  },

  nbr3:{
    flexDirection:'row',
    alignItems: 'center',
  },

  nbr:{
    flexDirection:'row',
    alignItems: 'center',
  },

  nbr4:{
    flexDirection:'row',
    alignItems: 'center',
  },

  racin:{
    width:60,
    height:60,
    left:-25,
    fontSize:40,
    borderRadius:50,
    paddingLeft:13,
    paddingTop:0,
  },

  pi:{
    width:60,
    height:60,
    right:22,
    fontSize:40,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:10,
  },

  expo:{
    width:60,
    height:60,
    left:10,
    fontSize:40,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:0,
  },

  exla:{
    width:60,
    height:60,
    left:40,
    fontSize:40,
    borderRadius:50,
    paddingLeft:17,
    paddingTop:0,
  },

  sup:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:-30,
    fontSize:25,
    borderRadius:50,
    paddingLeft:13,
    paddingTop:10,
  },

  parenthese:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    right:10,
    fontSize:25,
    borderRadius:50,
    paddingLeft:17,
    paddingTop:10,
  },

  pourcentage:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:10,
    fontSize:25,
    borderRadius:50,
    paddingLeft:22,
    paddingTop:10,
  },

  division:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:30,
    fontSize:25,
    borderRadius:50,
    paddingLeft:17,
    paddingTop:16,
  },

  sept:{
    margin:10,
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:0,
    fontSize:25,
    borderRadius:50,
    paddingLeft:25,
    paddingTop:10,
  },

  heuit:{
    margin:10,
    width:60,
    height:60,
    backgroundColor:'lightblue',
    right:0,
    fontSize:25,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:10,
  },

  neuf:{
    margin:10,
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:0,
    fontSize:25,
    borderRadius:50,
    paddingLeft:24,
    paddingTop:10,
  },

  multi:{
    margin:10,
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:0,
    fontSize:25,
    borderRadius:50,
    paddingLeft:17,
    paddingTop:16,
  },

  quatre:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    right:30,
    fontSize:25,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:10,
  },

  cinq:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    right:10,
    fontSize:25,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:10,
  },

  six:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:10,
    fontSize:25,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:10,
  },

  moin:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:30,
    fontSize:25,
    borderRadius:50,
    paddingLeft:17,
    paddingTop:16,
  },

  un:{
    margin:10,
    width:60,
    height:60,
    backgroundColor:'lightblue',
    right:0,
    fontSize:25,
    borderRadius:50,
    paddingLeft:24,
    paddingTop:10,
  },

  deux:{
    margin:10,
    width:60,
    height:60,
    backgroundColor:'lightblue',
    right:0,
    fontSize:25,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:10,
  },

  trois:{
    margin:10,
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:0,
    fontSize:25,
    borderRadius:50,
    paddingLeft:24,
    paddingTop:10,
  },

  add:{
    margin:10,
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:0,
    fontSize:25,
    borderRadius:50,
    paddingLeft:17,
    paddingTop:16,
  },

  zero:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    right:30,
    fontSize:25,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:10,
  },

  virgule:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    right:10,
    fontSize:40,
    borderRadius:50,
    paddingLeft:28,
    paddingTop:0,
  },

  bs:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:10,
    fontSize:25,
    borderRadius:50,
    paddingLeft:18,
    paddingTop:17,
  },

  egal:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:30,
    fontSize:25,
    borderRadius:50,
    paddingLeft:23,
    paddingTop:13,
  },
});

