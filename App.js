import { StatusBar } from 'expo-status-bar';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.edit}>
        <TextInput style={styles.input}placeholder="Votre nombre"/>
        <TouchableOpacity style={styles.point} onPress={() => {}}>
          <MaterialCommunityIcons name="dots-vertical" color="#000" size={24} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.nbr}>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.sept}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <MaterialCommunityIcons name="pi" color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.neuf}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.neuf}>!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.sup}>AC</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.parenthese}>()</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.pourcentage}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Feather name="divide" color="#000" style={styles.division} />
        </TouchableOpacity>
      </View>

      <View style={styles.nbr1}>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.sept}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.heuit}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.neuf}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <MaterialCommunityIcons name="multiplication" color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.nbr2}>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.quatre}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.cinq}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.six}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Entypo name="minus" color="#000"/>
        </TouchableOpacity>
      </View>

      <View style={styles.nbr3}>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.un}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.deux}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.trois}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <MaterialIcons name="add" color="#000"/>
        </TouchableOpacity>
      </View>

      <View style={styles.nbr4}>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.zero}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.virgule}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Ionicons name="backspace-sharp" color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
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
    height: 250,
    width: 330,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor:'lightblue',
    textAlign:'right',
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

  sup:{
    width:60,
    height:60,
    backgroundColor:'lightblue',
    left:-100,
    fontSize:25,
    borderRadius:50,
    paddingLeft:13,
    paddingTop:10,
  }
});
