import AntDesign from "@expo/vector-icons/AntDesign";
import { router, Stack } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "slide_from_right",
        headerShadowVisible: false,
        
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          
          headerShadowVisible: false,
          headerTitleAlign: "center",

          headerTitle: () => (
            <Image
              source={{
                uri: "https://cdn-icons-png.freepik.com/512/11823/11823292.png",
              }}
              style={{ width: 24, height: 24, resizeMode: "contain" }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerShadowVisible: false,
          headerBackTitle: "Back",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push("/seatting")}>
              <AntDesign name="setting" size={22} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="seatting"
        options={{
          headerShadowVisible: false,
          headerBackTitle: "Back",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
