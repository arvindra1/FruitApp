import { View, Text, TouchableOpacity, Image, ScrollView, Touchable, DrawerLayoutAndroid } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Bars3CenterLeftIcon, HeartIcon, ShoppingCartIcon} from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import FruitCard from '../components/fruitCard';
import { useNavigation } from '@react-navigation/native';
import FruitCardSales from '../components/fruitCardSales';
import { featuredFruits, categories } from '../constants';
import NavigationView from '../components/NavigationView';


export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();
// Drawer code
const drawer = useRef(null);

const openDrawer = () => {
  drawer.current.openDrawer();
};

const closeDrawer = () => {
  drawer.current.closeDrawer();
};



  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={() => <NavigationView/>}
    >
    <SafeAreaView className="flex-1 bg-orange-50">
        {/* top bar */}
        <View className="navbar mb-4 mt-4 mx-5 flex-row justify-between items-center">
        <TouchableOpacity onPress={openDrawer}>
        <Bars3CenterLeftIcon size="30" color="black" />
        </TouchableOpacity>
          
          <TouchableOpacity onPress={()=> navigation.navigate('Cart')} className="p-2 rounded-full bg-orange-100">
            <ShoppingCartIcon size="25" color="orange" />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        {/* categories */}

        <View className="mt-4">
          <Text style={{color: themeColors.text}} 
          className="text-2xl tracking-widest font-medium ml-5">Seasonal</Text>
          <Text style={{color: themeColors.text}}  className="text-3xl font-semibold ml-5">Fruits and Vegetables</Text>
          <ScrollView className="mt-8 px-5" horizontal showsHorizontalScrollIndicator={false}>
            {
              categories.map((category, index)=>{
                let isActive = category == activeCategory;
                let textClass = `text-xl   ${isActive? ' font-bold': ''}`;
                let buttonClass = `mr-8 relative rounded-2xl`;
                return (
                  <TouchableOpacity 
                    onPress={()=> setActiveCategory(category)} 
                    key={index} 
                    className={buttonClass}>
                    <Text style={{color: themeColors.text}} className={textClass}>{category}</Text>
                    {
                      isActive? (
                        <Text className="font-extrabold -mt-3 ml-2 text-orange-400">___ _ _</Text>
                      ):null
                    }
                    
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
        {/* carousel */}
        <View className="carousel mt-8">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              featuredFruits.map((fruit, index)=>{
                return (
                  <FruitCard fruit={fruit} key={index} />
                )
              })
            }
          </ScrollView>
        </View>

        {/* hot sales */}
      <View className="mt-8 pl-5 space-y-1">
        <Text style={{color: themeColors.text}} className="text-xl font-bold">Hot Sales</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
          {
            [...featuredFruits].reverse().map((fruit, index)=>{
              return (
                <FruitCardSales key={index} fruit={fruit} />
              );
            })
          }
        </ScrollView>
        
      </View>

       {/* hot sales */}
       <View className="mt-8 mb-8 pl-5 space-y-1">
        <Text style={{color: themeColors.text}} className="text-xl font-bold">Fresh Deals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
          {
            [...featuredFruits].reverse().map((fruit, index)=>{
              return (
                <FruitCardSales key={index} fruit={fruit} />
              );
            })
          }
        </ScrollView>
        
      </View>

      <View className="mt-4">
          <Text style={{color: themeColors.text}} 
          className="text-2xl tracking-widest font-medium ml-5">Seasonal</Text>
          <Text style={{color: themeColors.text}}  className="text-3xl font-semibold ml-5">Fruits and Vegetables</Text>
          <ScrollView className="mt-8 px-5" showsVerticalScrollIndicator={false}>
         
            {
              featuredFruits.map((fruit, index)=>{
                return (
                  <FruitCard fruit={fruit} key={index} />
                )
              })
            }
          
          </ScrollView>
        </View>
      </ScrollView>
      
    </SafeAreaView>
    </DrawerLayoutAndroid>
  )
}