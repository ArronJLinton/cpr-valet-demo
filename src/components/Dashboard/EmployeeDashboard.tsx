import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { mockDashboardData } from '../../constants/mockData';
import { DashboardData } from '../../types';
import { CameraButton } from '../MediaUpload/CameraButton';
import { ViolationForm } from '../ViolationForm/ViolationForm';
import { PRIMARY_RED, BLACK, WHITE, TEXT_GRAY, BORDER_GRAY, LIGHT_GRAY, CHARCOAL_GRAY } from '../../../constants/Colors';

interface EmployeeDashboardProps {
  data?: DashboardData;
}

export const EmployeeDashboard: React.FC<EmployeeDashboardProps> = ({
  data = mockDashboardData,
}) => {
  const [showViolationForm, setShowViolationForm] = useState(false);
  const { employee, assignedProperties } = data;

  const handleMediaUpload = () => {
    // Placeholder for media upload functionality
    console.log('Media upload placeholder');
  };

  const handleViolationSubmit = (violation: any) => {
    // Placeholder for violation submission
    console.log('Violation submitted:', violation);
    setShowViolationForm(false);
  };

  const handleViolationCancel = () => {
    setShowViolationForm(false);
  };

  if (showViolationForm) {
    return (
      <ViolationForm
        onSubmit={handleViolationSubmit}
        onCancel={handleViolationCancel}
        propertyId={assignedProperties[0]?.id}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={WHITE} />

      {/* Header */}
      {/* <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.timeText}>4:19</Text>
          <View style={styles.batteryContainer}>
            <Ionicons name='battery-full' size={20} color={CHARCOAL_GRAY} />
          </View>
        </View>
        <Text style={styles.headerTitle}>Daily Work Plan</Text>
      </View> */}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Employee Info */}
        <View style={styles.employeeSection}>
          <View style={styles.employeeInfo}>
            <View style={styles.profileImage}>
              <Ionicons name='person' size={40} color={PRIMARY_RED} />
            </View>
            <View style={styles.employeeDetails}>
              <Text style={styles.employeeName}>{employee.name}</Text>
              {/* <Text style={styles.employeeRole}>{employee.role}</Text> */}
            </View>
          </View>
        </View>


        {/* Assigned Properties */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Assigned Properties</Text>
          {assignedProperties.map(property => (
            <TouchableOpacity key={property.id} style={styles.propertyCard}>
              <View style={styles.propertyInfo}>
                <Ionicons name='location' size={20} color={PRIMARY_RED} />
                <View style={styles.propertyDetails}>
                  <Text style={styles.propertyName}>{property.name}</Text>
                  <Text style={styles.propertyAddress}>{property.address}</Text>
                </View>
              </View>
              <Ionicons name='chevron-forward' size={20} color={TEXT_GRAY} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsContainer}>
            <CameraButton onPress={handleMediaUpload} />

            <TouchableOpacity
              style={styles.violationButton}
              // onPress={() => setShowViolationForm(true)}
            >
              <View style={styles.violationButtonContent}>
                <Ionicons name='warning' size={24} color={WHITE} />
                <Text style={styles.violationButtonText}>Create Report</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <View style={styles.activityItem}>
              <Ionicons name='camera' size={20} color={PRIMARY_RED} />
              <Text style={styles.activityText}>Photo uploaded at Acme Apartments</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
            <View style={styles.activityItem}>
              <Ionicons name='warning' size={20} color='#FF9800' />
              <Text style={styles.activityText}>Violation reported at Lakeside Villas</Text>
              <Text style={styles.activityTime}>4 hours ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_GRAY,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 18,
    fontWeight: '600',
    color: CHARCOAL_GRAY,
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CHARCOAL_GRAY,
  },
  content: {
    flex: 1,
  },
  employeeSection: {
    padding: 20,
    backgroundColor: LIGHT_GRAY,
  },
  employeeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffe8e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  employeeDetails: {
    flex: 1,
  },
  employeeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CHARCOAL_GRAY,
    marginBottom: 4,
  },
  employeeRole: {
    fontSize: 16,
    color: TEXT_GRAY,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_GRAY,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CHARCOAL_GRAY,
    marginBottom: 16,
  },
  clockInOutContainer: {
    alignItems: 'center',
  },
  clockInTime: {
    marginTop: 12,
    fontSize: 14,
    color: PRIMARY_RED,
    fontWeight: '500',
  },
  propertyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: LIGHT_GRAY,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  propertyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  propertyDetails: {
    marginLeft: 12,
    flex: 1,
  },
  propertyName: {
    fontSize: 16,
    fontWeight: '600',
    color: CHARCOAL_GRAY,
    marginBottom: 4,
  },
  propertyAddress: {
    fontSize: 14,
    color: TEXT_GRAY,
  },
  actionsContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  violationButton: {
    backgroundColor: PRIMARY_RED,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    elevation: 2,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minHeight: 60,
    justifyContent: 'center',
  },
  violationButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  violationButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  activityCard: {
    backgroundColor: LIGHT_GRAY,
    borderRadius: 12,
    padding: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  activityText: {
    flex: 1,
    fontSize: 14,
    color: CHARCOAL_GRAY,
    marginLeft: 12,
  },
  activityTime: {
    fontSize: 12,
    color: TEXT_GRAY,
  },
});
