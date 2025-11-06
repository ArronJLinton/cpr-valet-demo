import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TimeEntry } from '../../types';
import { PRIMARY_RED, BLACK, WHITE } from '../../../constants/Colors';

interface ClockInOutButtonProps {
  timeEntry?: TimeEntry;
  onPress: () => void;
  disabled?: boolean;
}

export const ClockInOutButton: React.FC<ClockInOutButtonProps> = ({
  timeEntry,
  onPress,
  disabled = false,
}) => {
  const isClockedIn = timeEntry?.isClockedIn || false;
  const buttonText = isClockedIn ? 'Clocked In' : 'Clock-In';
  const buttonColor = PRIMARY_RED;
  const iconName = isClockedIn ? 'checkmark-circle' : 'time';

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.buttonContent}>
        <Ionicons name={iconName} size={24} color={WHITE} style={styles.icon} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    minWidth: 140,
    elevation: 2,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
