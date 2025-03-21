import { Text, View} from 'react-native';
import { headerStyle} from './HeaderStyle';

export default function Header() {
  return (
    <View style={headerStyle.header}>
        <Text style={headerStyle.headerText}>Só Viagens</Text>
    </View>
);
}

