import { getAllEvents, Tables } from "@the-leftovers/supabase"
import { fetchLatestNews } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

export default function LatestNews() {
    const [news, setNews] = useState<Tables<"news"> | null>(null)

    useEffect(() => {
        async function fetchNews() {
            const news = await fetchLatestNews()
            if (news) setNews(news)
        }

        fetchNews()
    }, [])

    if (!news) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: news.banner_url }} style={styles.banner} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.blurb}>{news.blurb}</Text>
                <Button title="Read More" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        margin: 16,
        borderRadius: 8,
        overflow: "hidden"
    },
    banner: {
        width: "100%",
        height: 200,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff",
    },
    blurb: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 8
    }
})
