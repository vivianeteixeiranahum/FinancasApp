import { View } from "react-native";
import { styles} from "../../config/styles";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { useState } from "react";

export default function CadastroScreen() {
    const [text, setText] = useState("teste@gmail.com");
    const [senha, setSenha] = useState("123");
    const [repeticaoSenha, SetRepetirSenha] = useState("123");

    const onChangeText = text => setText(text);

    const handleCadastro = () => {
        if (text == "teste@gmail.com" && senha == "123" && repeticaoSenha == "123") {
            return (
                alert("Cadastro Realizado com Sucesso")
            )
        }
    }

    const hasErrors = () => {
        return !text.includes('@');
    };

    const hasErrorsCampo = () => {
        if (text === "" && senha === "") {
            return;
        }
    };

    const onChangeSenha = senha => setSenha(senha);

    const hasErrorsSenha = () => {
        return senha == !setSenha
    }

    const onChangeRepetirSenha = repeticaoSenha => SetRepetirSenha(repeticaoSenha);

    const hasErrorsRepetirSenha = () => {
        return !(senha == repeticaoSenha);
    }

    // realizar de lógica de login

    return (
        <View style={styles.container}>
            <View style={styles.container_inner}>
                <Text style={styles.alinhamento} variant="displaySmall">Cadastro</Text>
                <Text>{"\n"}</Text>
                <TextInput
                    mode="outlined"
                    label={"Email"}
                    placeholder={"Digite seu e-mail"}
                    value={text}
                    onChangeText={onChangeText}
                />
                <HelperText type="error" visible={hasErrors()}>
                    Endereço de Email inválido!!
                </HelperText>
                <TextInput
                    mode="outlined"
                    label={"Senha"}
                    placeholder={"Digite sua Senha"}
                    value={senha}
                    onChangeText={onChangeSenha}
                    secureTextEntry // Para esconder a Senha
                />
                <HelperText type="error" visible={hasErrorsSenha()}>
                    Por favor preencha com uma senha válida!!
                </HelperText>

                <TextInput
                    mode="outlined"
                    label={"Repetir Senha"}
                    placeholder={"Repita sua Senha"}
                    value={repeticaoSenha}
                    onChangeText={onChangeRepetirSenha}
                    secureTextEntry // Para esconder a Senha
                />
                <HelperText type="error" visible={hasErrorsRepetirSenha()}>
                    Senhas não coincidem.
                </HelperText>
                <Text>{"\n"}</Text>
                <Button mode={"contained"} onPress={handleCadastro}>Cadastrar</Button>
                <Text>{"\n"}</Text>
                <Button
                    onPress={() =>
                        navigation.navigate('LoginScreen', { name: 'LoginScreen' })}
                    mode={"text"}>Logar</Button>
            </View>
        </View>
    )
}