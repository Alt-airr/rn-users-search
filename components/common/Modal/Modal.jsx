import Modal from 'react-native-modal';
import {Text, TouchableHighlight, View} from 'react-native';
import React, {useState} from "react";
import {styles} from './modalStyles'

export const CustomModal = ({show, setModalShow, uuid, inviteUser}) => {

    const [confirmed, toggleIsConfirmed] = useState(false);

    const onConfirm = () => {
        inviteUser(uuid);
        setModalShow({show: false, uuid: null});
        toggleIsConfirmed(true)
    };

    return <View style={styles.modal}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.textStyle}>
                        {`Удалить пользователя с id = ${uuid}?`}
                    </Text>
                    <View style={styles.actionBlock}>
                        <TouchableHighlight
                            style={styles.openButton}
                            onPress={onConfirm}
                        >
                            <Text style={[styles.textStyle, styles.buttonText]}>
                                Подтвердить
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.openButton}
                            onPress={ () => { setModalShow({show: false, uuid: null})} }
                        >
                            <Text style={[styles.textStyle, styles.buttonText]}>
                                Отмена
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </Modal>

        <Modal
            animationType="slide"
            transparent={true}
            visible={confirmed}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.textStyle}>
                        Пользователь удалён
                    </Text>
                    <TouchableHighlight
                        style={{...styles.openButton, backgroundColor: "#3E3E3B"}}
                        onPress={ () => {toggleIsConfirmed(false)} }
                    >
                        <Text style={[styles.textStyle, styles.buttonText]}>
                            Ок
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    </View>
}



