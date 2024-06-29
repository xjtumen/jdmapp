import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Topics",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "folder" : "folder-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: "Users",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="users" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="web"
        options={{
          title: "Web",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "globe" : "globe-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
