import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Clipboard, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { TextColors, AppColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 15,
    padding: 10,
    borderBottomColor: AppColors.rowSeparator,
    borderBottomWidth: 1,
    backgroundColor: AppColors.background,
  },
  input: {
    paddingTop: 5,
  },
  result: {
    paddingTop: 5,
  },
  textName: {
    color: TextColors.textInput,
    fontSize: FontSizes.textInput,
  },
  textDefine: {
    color: TextColors.textResult,
    fontSize: FontSizes.textResult,
  },
});



class CommandRow extends React.Component {

  render() {
    return (
      <TouchableOpacity style={styles.container} onLongPress={this.props.onLongPress} onPress={this.props.onPress}>
        <Text style={[styles.textName]}>{this.props.textName}</Text>
        <Text style={[styles.textDefine]}>    {this.props.textDefine}</Text>
      </TouchableOpacity>
    )
  }
}

CommandRow.propTypes = {
    textName: PropTypes.string,
    textDefine: PropTypes.string,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
}

export default CommandRow
