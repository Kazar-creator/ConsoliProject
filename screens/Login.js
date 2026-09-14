import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, Pressable, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import CustomButton from '../components/CustomButton';
import styles from '../styles/AppStyles';

//Import delle Immagini
import miurLogo from '../assets/miurLogo.png';
import itsLogo from '../assets/itsWideLogo.png';

export default function Login({navigation}) {
    //Funzioni per modificare Email, Password e Messaggio Errore
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    //Funzione per validare i campi del form
    const validateForm = () => {
        let newErrors = {}
        if (!email) newErrors.email = "Email richiesta"
        if (!password) newErrors.password = "Password richiesta"

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    }

    //Funzione per inviare i dati inseriti nei campi
    const handleSubmit = () => {
        if(validateForm()){
        console.log("Submitted", email, password)
        setEmail("")
        setPassword("")
        setErrors({})
        }
    }

    return (
        
        <View style={styles.mainContainer}>
            {/* HEADER */}
            <View style={styles.headerContainer}>

                <Image source={miurLogo} style={styles.miurLogo} resizeMode='contain'/>
                
                <Pressable onPress={() => console.log("Pagina del Profilo")}>
                    <Image source={itsLogo} style={styles.itsLogo} resizeMode='contain'/>
                </Pressable>
                
                <Image style={styles.profileLogo} resizeMode='contain'/>
                
                
            </View>

            <StatusBar backgroundColor='blue' barStyle="dark-content"/>

            {/* LOGIN FORM */}
            <KeyboardAvoidingView
                behavior='padding'
                style={styles.formContainer}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >

                <View style={styles.formBox}>

                    {/* EMAIL */}
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input} 
                        value={email} 
                        onChangeText={setEmail}
                        placeholder="Inserisci Email"
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    {
                    errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null
                    }

                    {/* PASSWORD */}
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        value={password} 
                        onChangeText={setPassword}
                        placeholder="Inserisci Password"
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    {
                    errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
                    }

                    {/* LOGIN */}
                    <View style={{alignItems:'center'}}>
                        <CustomButton
                            text='Login'
                            onPress={() => navigation.replace('Home')}
                            width={150}
                        >
                        </CustomButton>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </View>
    );
}