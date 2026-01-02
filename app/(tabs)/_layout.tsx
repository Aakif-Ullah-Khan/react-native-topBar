import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();
export const Tabs = withLayoutContext(Navigator);

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          elevation: 0,       // Android shadow
          shadowOpacity: 0,   // iOS shadow
          borderBottomWidth: 0.5,
          borderBottomColor: "#e5e5e5",
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          textTransform: "none",
        },

        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#777",

        tabBarIndicatorStyle: {
          backgroundColor: "#000",
          height: 1,
          borderRadius: 1,
        },

        tabBarItemStyle: {
          paddingVertical: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "For you" }}
      />
      <Tabs.Screen
        name="following"
        options={{ title: "Following" }}
      />
    </Tabs>
  );
}
