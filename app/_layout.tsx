import AntDesign from '@expo/vector-icons/AntDesign';
import { router, Stack } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      animation: "slide_from_right",
      headerShadowVisible: false
    }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerLeft: () => (
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
              }}
              style={{ width: 30, height: 30 }}
            />
          ),
          headerRight: () => (
            <AntDesign name="setting" size={22} color="black" />
          ),
          headerTitle: () => (
            <Image
              source={{
                uri: "https://cdn-icons-png.freepik.com/512/11823/11823292.png",
              }}
              style={{ width: 24, height: 24 , resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Stack.Screen name='details' options={{headerShadowVisible: true, headerBackTitle: 'Back', headerTitleAlign : "center", headerRight: () => (
        <TouchableOpacity onPress={() => router.push('/seatting')}>
          <AntDesign name="setting" size={22} color="black"/>
        </TouchableOpacity>
      )}}/>
      <Stack.Screen name='seatting' options={{headerShadowVisible: true, headerBackTitle: 'Back', headerTitleAlign : "center", headerRight: () => (
        <TouchableOpacity>
          <AntDesign name="setting" size={22} color="black"/>
        </TouchableOpacity>
      )}}/>
    </Stack>
  );
}
