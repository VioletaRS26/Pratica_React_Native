import { View, Text, Image, TouchableOpacity, Button} from "react-native";
import { styles } from "./style";
import Moura from "./image/moura-logo.png";
import Pessoas from './image/pessoas.png';
import { NewTurma } from "../NewTurma";

export function Home(){

    return(
        <View style={styles.container}>
            <View style={styles.topo}>
            <Image
                style={styles.img}
                source={Moura}
            />
                <Text style={styles.titulo}>Turmas</Text>
                <Text style={styles.text}>jogue com a sua turma</Text>
            </View>
            <View style={styles.containerB}>
                <TouchableOpacity style={styles.botao}>
                    <Image 
                        style={styles.imgB}
                        source={Pessoas}
                    />
                    <Text style={styles.textB}>Nome da turma</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Image 
                        style={styles.imgB}
                        source={Pessoas}
                    />
                    <Text style={styles.textB}>Nome da turma</Text>
                </TouchableOpacity>
            </View>
            <Button
            onPress={NewTurma}
                title="Criar nova turma"
                color="#3CB371"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>

    );
}