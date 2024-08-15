import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

// hidden tab
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="hidden"
        options={{
          title: "hidden",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="yahoo" color={color} />
          ),
          // headerShown: false,
          // hide here
          // href: null,
        }}
      />
    </Tabs>
  );
}
