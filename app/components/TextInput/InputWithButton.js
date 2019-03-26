import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const {
    onPress, buttonText, editable = true, textColor,
  } = props;
  const containerStyles = [styles.container];
  const buttonTextStyles = [styles.buttonText];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View styles={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

export default InputWithButton;
