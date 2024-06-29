import { Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { desc } from "drizzle-orm";

import { useEffect, useState } from "react";
import { users } from "@/drizzle/schema";
import { FlashList } from "@shopify/flash-list";

function Content() {
  const sqlite_db = useSQLiteContext();
  const db = drizzle(sqlite_db);
  // useDrizzleStudio(sqlite_db);
  const all_users = db.select().from(users).orderBy(desc(users)).all();
  if (all_users.length === 0)
    return (
      <View>
        <Text>Nothing yet</Text>
      </View>
    );
  return (
    <FlashList
      numColumns={1}
      data={all_users}
      estimatedItemSize={70}
      renderItem={({ item: user }) => (
        <Text style={{ textAlign: "left" }}>
          {user.id}
          {"\n"}
          {user.username}
          {"\n"}
          {user.name}
          {"\n"}
        </Text>
      )}
    />
  );
}

export default function TabFourLocal() {
  if (Platform.OS === "web") {
    return (
      <View style={{ flex: 1 }}>
        <Text>Expo SQlite is not supported on web!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SQLiteProvider
        databaseName="xmen.db"
        assetSource={{ assetId: require("@/assets/db/xmen.db") }}
      >
        <Header />
        <Content />
      </SQLiteProvider>
    </View>
  );
}

export function Header() {
  const db = useSQLiteContext();
  const [version, setVersion] = useState("");
  useEffect(() => {
    async function setup() {
      const result = await db.getFirstAsync<{ "sqlite_version()": string }>(
        "SELECT sqlite_version()",
      );
      if (result) {
        setVersion(result["sqlite_version()"]);
      } else {
        setVersion("Error get version");
      }
    }

    setup();
  }, [db]);
  return (
    <View>
      <Text>SQLite version: {version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Constants.statusBarHeight,
  },
});
