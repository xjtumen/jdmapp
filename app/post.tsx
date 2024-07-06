import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { topics, posts, users } from "@/drizzle/schema";
import { desc, sql } from "drizzle-orm";

function Content() {
  const { id } = useGlobalSearchParams();

  const sqlite_db = useSQLiteContext();
  const db = drizzle(sqlite_db);
  const all_users = db.select().from(users);
  const all_posts = db
    .select()
    .from(posts)
    .where(sql`${posts.topic_id} = ${id}`)
    .all();
  // const user = db
  //   .select()
  //   .from(users)
  //   .where(sql$``);
  return (
    <>
      <FlashList
        numColumns={1}
        estimatedItemSize={70}
        data={all_posts}
        renderItem={({ item: all_posts }) => (
          <Text style={{ color: "green", textAlign: "left" }}>
            {}
            {all_posts.user_id}
            {"\n"}
            {all_posts.raw}
            {"\n"}
          </Text>
        )}
      ></FlashList>
    </>
  );
}

export default function Route() {
  return (
    <View style={styles.container}>
      <SQLiteProvider
        databaseName="xmen.db"
        assetSource={{ assetId: require("../assets/db/xmen.db") }}
      >
        <Content />
      </SQLiteProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
