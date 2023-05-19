import { View, Text, Image} from "react-native";
import { styles } from "./style";
import Moura from "./img/moura-logo.png";

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

        </View>

    );
}