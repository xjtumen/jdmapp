import { Button, Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { desc } from "drizzle-orm";
import { useEffect, useState } from "react";
import { topics } from "@/drizzle/schema";
import { FlashList } from "@shopify/flash-list";
import { Link, router } from "expo-router";
function Content() {
  const sqlite_db = useSQLiteContext();
  const db = drizzle(sqlite_db);
  const all_topics = db.select().from(topics).orderBy(desc(topics)).all();

  if (all_topics.length === 0)
    return (
      <View>
        <Text>Nothing yet</Text>
      </View>
    );
  return (
    <FlashList
      numColumns={1}
      data={all_topics}
      estimatedItemSize={70}
      renderItem={({ item: topic }) => (
        <>
          <Link key={topic.id} href={`/post?id=${topic.id}`}>
            <Text style={{ color: "green", textAlign: "left" }}>
              {topic.id}
              {"\n"}
              {topic.title}
              {"\n"}
              {topic.user_id}
              {"\n"}
            </Text>
          </Link>
        </>
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
        "SELECT sqlite_version()"
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
