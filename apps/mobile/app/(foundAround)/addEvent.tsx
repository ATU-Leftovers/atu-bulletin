import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Pressable, View, ScrollView, TextInput, StyleSheet } from "react-native";
import { ThemeColors } from '@/constants/Colors';

export default function AddEvent() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Event Title</Text>
                    <TextInput style={styles.inputBox}></TextInput>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Location</Text>
                    <TextInput style={styles.inputBox}></TextInput>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Date, Time</Text>
                    <TextInput style={styles.inputBox}></TextInput>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Summary</Text>
                    <TextInput style={styles.inputLarge}></TextInput>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Cover Image</Text>
                    <TextInput style={styles.inputBox}></TextInput>
                </View>

                <Pressable style={styles.buttonContainer}>
                    <View style={styles.buttonBox}>
                        <Text style={styles.buttonText}>Add Event</Text>
                    </View>
                </Pressable>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    inputContainer:{
        padding: 5,
        marginLeft: 2,
        marginRight: 2,
    },
    inputText:{
        marginBottom: 1,
        fontWeight: 'bold',
    },
    inputBox:{
        padding: 10,
        marginBottom: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: ThemeColors['atu-gold-vd'],
    },
    inputLarge:{
        padding: 2,
        paddingTop: 50,
        paddingBottom: 50,
        marginBottom: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: ThemeColors['atu-gold-vd'],
    },
    buttonContainer:{
        flex: 1,
        alignItems: 'center',
    },
    buttonBox:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10, 
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: ThemeColors['atu-gold-vd'],
        backgroundColor: ThemeColors['atu-gold-vd'],
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }   
})