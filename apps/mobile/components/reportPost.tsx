import { ThemeColors } from "@/constants/Colors";
import { Modal, View, Text, Pressable, TextInput, StyleSheet} from "react-native";

type propValue = {
    isVisible: boolean;
    close: () => void;
    delete: () => void;
}

export default function ReportPost(props: propValue) {

    return (
        <Modal transparent visible={props.isVisible}>
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Report</Text>
                    <Text style={styles.modalSubHeader}>Describe the issue(s) with the post.</Text>
                    <View style={styles.modalInputContainer}>
                        <TextInput style={styles.modalInput} multiline={true} scrollEnabled={true}></TextInput>
                    </View>
                    <View style={styles.modalActionContainer}>
                        <Pressable onPress={() => { props.close() }} >
                            <View style={styles.modalActionCancelContainer}>
                                <Text style={styles.modalActionCancelText}>Cancel</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => { props.delete() }}>
                            <View style={styles.modalActionSubmitContainer}>
                                <Text style={styles.modalActionSubmitText}>Submit</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles =StyleSheet.create({
    container:
    {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    modalContainer:
    {
        padding: 12,
        backgroundColor: 'white',
        borderColor: ThemeColors['red'],
        borderRadius: 16,
        borderWidth: 4,
        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
        width: '75%',
    },
    modalTitle:
    {
        padding: 4,
        marginTop:20,
        marginBottom: 4,
        fontSize: 30, 
        fontWeight: 700,
        textAlign: 'center',
        color: 'white',
        backgroundColor: ThemeColors['red'],
        borderRadius: 16 
    },
    modalSubHeader:
    {
        marginTop: 8
    },
    modalInputContainer:
    {
        height: 260,
        padding: 8,
        margin: 8
    },
    modalInput:
    {
        height: '100%',
        padding: 8,
        marginBottom: 8,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: ThemeColors['red'],
        borderRadius: 8
    },
    modalActionContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalActionCancelContainer:
    {
        paddingHorizontal: 16, 
        paddingVertical: 4,
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: ThemeColors['red'],
        borderRadius: 999
    },
    modalActionCancelText:
    {
        fontSize: 16,
        fontWeight: 700,
        color: ThemeColors['red']
    },
    modalActionSubmitContainer:
    {
        paddingHorizontal: 16, 
        paddingVertical: 4,
        backgroundColor: ThemeColors['red'],
        borderWidth: 4,
        borderColor: ThemeColors['red'],
        borderRadius: 999
    },
    modalActionSubmitText:
    {
        fontSize: 16,
        fontWeight: 700,
        color: 'white'
    },
})