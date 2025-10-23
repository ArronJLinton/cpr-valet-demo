import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { ClockInOutButton } from '../src/components/ClockInOut/ClockInOutButton';
import { mockDashboardData } from '../src/constants/mockData';

export default function TimeTrackingScreen() {
  const { currentTimeEntry } = mockDashboardData;

  const handleClockInOut = () => {
    // Placeholder for clock in/out functionality
    console.log('Clock in/out placeholder');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#ffffff' />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Time Tracking</Text>
        </View>

        {/* Clock In/Out Section */}
        <View style={styles.section}>
          <View style={styles.clockInOutContainer}>
            <ClockInOutButton timeEntry={currentTimeEntry} onPress={handleClockInOut} />
            {currentTimeEntry?.isClockedIn && (
              <Text style={styles.clockInTime}>
                Clocked in at {currentTimeEntry.clockInTime?.toLocaleTimeString()}
              </Text>
            )}
          </View>
        </View>

        {/* Time History */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Time Entries</Text>
          <View style={styles.timeHistoryCard}>
            <View style={styles.timeEntryItem}>
              <Ionicons name='time' size={20} color='#4CAF50' />
              <View style={styles.timeEntryDetails}>
                <Text style={styles.timeEntryText}>Clock In - Acme Apartments</Text>
                <Text style={styles.timeEntryTime}>Today, 8:00 AM</Text>
              </View>
            </View>
            <View style={styles.timeEntryItem}>
              <Ionicons name='time-outline' size={20} color='#FF9800' />
              <View style={styles.timeEntryDetails}>
                <Text style={styles.timeEntryText}>Clock Out - Lakeside Villas</Text>
                <Text style={styles.timeEntryTime}>Yesterday, 5:30 PM</Text>
              </View>
            </View>
            <View style={styles.timeEntryItem}>
              <Ionicons name='time' size={20} color='#4CAF50' />
              <View style={styles.timeEntryDetails}>
                <Text style={styles.timeEntryText}>Clock In - Lakeside Villas</Text>
                <Text style={styles.timeEntryTime}>Yesterday, 8:15 AM</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Weekly Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>This Week</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Total Hours</Text>
              <Text style={styles.summaryValue}>32.5</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Properties Visited</Text>
              <Text style={styles.summaryValue}>8</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Average per Property</Text>
              <Text style={styles.summaryValue}>4.1h</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
  },
  clockInOutContainer: {
    alignItems: 'center',
  },
  clockInTime: {
    marginTop: 12,
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  timeHistoryCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
  },
  timeEntryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  timeEntryDetails: {
    marginLeft: 12,
    flex: 1,
  },
  timeEntryText: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 4,
  },
  timeEntryTime: {
    fontSize: 12,
    color: '#666666',
  },
  summaryCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
