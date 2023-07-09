import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = ({title, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
