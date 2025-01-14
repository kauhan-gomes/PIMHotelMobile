import React, { useState } from 'react';
import {Alert} from 'react-native'
import {useFilter} from '../../../hooks/filter'

import {
    Container,
    ImagemFundo,
    LogoImage,
    ButtonText,
    CreateAccount,
    LoginArea,
    Header,
    LoginButton,
    LoginInput,
    PassIcon,
    UserIcon,
    UserLogin,
} from './styles';


export default function Login(){
    const [text, setText] = useState("")
    const [senha, setSenha] = useState("")
    const {setUser} = useFilter()


    return(
        <Container>
            <ImagemFundo
                source={require('../../assets/images/cidadeNoite.png')}
            >
                <Header>
                    <LogoImage 
                        source={require('../../assets/images/logoLogin.png')}
                        resizeMode="contain"
                    />
                </Header>
                <LoginArea>
                    <UserLogin>
                        <UserIcon 
                            name="user"
                            size={22}
                            color="#000"
                        />
                        <LoginInput
                            placeholder="Nome"
                            onChangeText={setText}
                            placeholderTextColor="#000"
                        />
                    </UserLogin>
                    <UserLogin>
                        <PassIcon name="shield" size={24} color="black" />
                        <LoginInput
                            placeholder="Senha"
                            onChangeText={setSenha}
                            placeholderTextColor="#000"
                        />
                    </UserLogin>
                    <LoginButton
                        onPress={() => {

                            if(text == "admin" && senha == "admin"){
                                setUser({
                                    login: text,
                                    senha,
                                })
                            }else{
                                Alert.alert("Dados incorretos", "Usuário ou senha")
                            }

                        }}
                    >
                        <ButtonText>Entrar</ButtonText>
                    </LoginButton>
                </LoginArea>
                
            </ImagemFundo>
        </Container>
    )
}