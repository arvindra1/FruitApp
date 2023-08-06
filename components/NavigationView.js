import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Touchable, DrawerLayoutAndroid } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Bars3CenterLeftIcon, HeartIcon, ShoppingCartIcon,AcademicCapIcon} from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import FruitCard from '../components/fruitCard';
import { useNavigation } from '@react-navigation/native';
import FruitCardSales from '../components/fruitCardSales';
import { featuredFruits, categories } from '../constants';


function NavigationView() {
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
    {/* top bar */}
    <View className="navbar mb-4 mt-4 mx-5 flex-row justify-around items-center">
    <TouchableOpacity >
    <AcademicCapIcon size="40" color="black" /> 
    </TouchableOpacity>
    <Text>__</Text>
    <View >
    <Text className="bg-orange-100">Arvindra Ahirwar</Text>
    <Text className="">Engineer</Text>

    </View>
   
      
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
 

  

   {/* hot sales */}
   
    
  
  </ScrollView>
  
</SafeAreaView>
  )
}

export default NavigationView