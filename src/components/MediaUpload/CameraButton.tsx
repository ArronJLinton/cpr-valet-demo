import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_RED, BLACK, WHITE } from '../../../constants/Colors';

interface CameraButtonProps {
  onPress: () => void;
  disabled?: boolean;
  type?: 'photo' | 'video' | 'both';
}

export const CameraButton: React.FC<CameraButtonProps> = ({
  onPress,
  disabled = false,
  type = 'both',
}) => {
  const getButtonText = () => {
    switch (type) {
      case 'photo':
        return 'Add Photo';
      case 'video':
        return 'Add Video';
      default:
        return 'Add Photo/Video';
    }
  };

  const getIconName = (): keyof typeof Ionicons.glyphMap => {
    switch (type) {
      case 'photo':
        return 'camera';
      case 'video':
        return 'videocam';
      default:
        return 'camera';
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.buttonContent}>
        <Ionicons name={getIconName()} size={24} color={PRIMARY_RED} style={styles.icon} />
        <Text style={styles.buttonText}>{getButtonText()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: PRIMARY_RED,
    borderStyle: 'dashed',
    minHeight: 60,
    elevation: 1,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: PRIMARY_RED,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
