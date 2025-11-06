import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BLACK,
  BORDER_GRAY,
  CHARCOAL_GRAY,
  LIGHT_GRAY,
  PRIMARY_RED,
  TEXT_GRAY,
  WHITE,
} from '../constants/Colors';

export default function ExplorePropertyScreen() {
  const router = useRouter();
  const [showGateCode, setShowGateCode] = useState(false);
  const [propertyName] = useState('Aquavista Apartments');
  const [gateCode] = useState('Seatr-npanimorg');
  const [managerEmail] = useState('Hp.c@ehtepnall.com');
  const [supportPhone] = useState('6346459709');
  const [emergencyPhone] = useState('724469709');

  const handleBackPress = () => {
    router.back();
  };

  const handleCreateReport = () => {
    router.push('/report-issue');
  };

  const handleCallSupport = () => {
    // In a real app, this would open the phone dialer
    console.log('Calling support:', supportPhone);
  };

  const handleCallEmergency = () => {
    // In a real app, this would open the phone dialer
    console.log('Calling emergency:', emergencyPhone);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="chevron-back" size={24} color={WHITE} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explore Property</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Property Name */}
        <Text style={styles.propertyName}>{propertyName}</Text>

        {/* Gate Code Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Gate Code</Text>
          <View style={styles.gateCodeContainer}>
            <Text style={styles.gateCodeText}>
              {showGateCode ? gateCode : '••••••••••••'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setShowGateCode(!showGateCode)}
          >
            <Ionicons
              name={showGateCode ? 'checkbox' : 'checkbox-outline'}
              size={20}
              color={showGateCode ? PRIMARY_RED : TEXT_GRAY}
            />
            <Text style={styles.checkboxLabel}>Show password</Text>
          </TouchableOpacity>
        </View>

        {/* Manager Email Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Manager email</Text>
          <Text style={styles.valueText}>{managerEmail}</Text>
        </View>

        {/* Support Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Support contact.</Text>
          <TouchableOpacity
            style={styles.contactContainer}
            onPress={handleCallSupport}
          >
            <Text style={styles.contactLabel}>Call</Text>
            <Text style={styles.valueText}>{supportPhone}</Text>
          </TouchableOpacity>
        </View>

        {/* Create Report Button */}
        <TouchableOpacity
          style={styles.createReportButton}
          onPress={handleCreateReport}
        >
          <Text style={styles.createReportButtonText}>Create Report</Text>
        </TouchableOpacity>

        {/* Emergency Contact */}
        <View style={styles.emergencyContainer}>
          <Text style={styles.emergencyText}>
            Use in case of emergency Call{' '}
            <Text
              style={styles.emergencyPhone}
              onPress={handleCallEmergency}
            >
              {emergencyPhone}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_GRAY,
    backgroundColor: BLACK,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: WHITE,
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  propertyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CHARCOAL_GRAY,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: CHARCOAL_GRAY,
    marginBottom: 8,
  },
  gateCodeContainer: {
    backgroundColor: LIGHT_GRAY,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 8,
  },
  gateCodeText: {
    fontSize: 16,
    fontWeight: '600',
    color: BLACK,
    fontFamily: 'monospace',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  checkboxLabel: {
    fontSize: 14,
    color: TEXT_GRAY,
    marginLeft: 8,
  },
  valueText: {
    fontSize: 16,
    color: BLACK,
    fontWeight: '500',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  contactLabel: {
    fontSize: 16,
    color: BLACK,
    marginRight: 8,
  },
  createReportButton: {
    backgroundColor: PRIMARY_RED,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  createReportButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  emergencyContainer: {
    marginTop: 20,
    marginBottom: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: BORDER_GRAY,
  },
  emergencyText: {
    fontSize: 14,
    color: TEXT_GRAY,
    textAlign: 'center',
  },
  emergencyPhone: {
    color: PRIMARY_RED,
    fontWeight: '600',
  },
});

