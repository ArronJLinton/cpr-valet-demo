import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        <Ionicons name={getIconName()} size={24} color='#4CAF50' style={styles.icon} />
        <Text style={styles.buttonText}>{getButtonText()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderStyle: 'dashed',
    minHeight: 60,
    elevation: 1,
    shadowColor: '#000',
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
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
