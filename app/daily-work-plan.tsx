import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { mockProperties } from '../src/constants/mockData';
import { PRIMARY_RED, BLACK, WHITE, TEXT_GRAY, BORDER_GRAY, CHARCOAL_GRAY } from '../constants/Colors';

const getPropertyIcon = (index: number): keyof typeof Ionicons.glyphMap => {
  const icons: (keyof typeof Ionicons.glyphMap)[] = [
    'cloud-outline',
    'location',
    'business',
  ];
  return icons[index % icons.length];
};

const getPropertyIconColor = (index: number): string => {
  const colors = [PRIMARY_RED, PRIMARY_RED, PRIMARY_RED];
  return colors[index % colors.length];
};

export default function DailyWorkPlanScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handlePropertyPress = (propertyId: string) => {
    router.push({
      pathname: '/property-details',
      params: { id: propertyId },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBackPress}
        >
          <Ionicons name="chevron-back" size={24} color={WHITE} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Daily Work Plan</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Assigned Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Assigned</Text>
            <View style={styles.sectionHeaderRight}>
              <Ionicons name="checkmark-circle-outline" size={20} color={TEXT_GRAY} />
              <View style={styles.verticalDivider} />
            </View>
          </View>

          {/* Property List */}
          <View style={styles.propertyList}>
            {mockProperties.map((property, index) => (
              <TouchableOpacity
                key={property.id}
                style={styles.propertyCard}
                onPress={() => handlePropertyPress(property.id)}
                activeOpacity={0.7}
              >
                <View style={styles.propertyIconContainer}>
                  <Ionicons
                    name={getPropertyIcon(index)}
                    size={32}
                    color={getPropertyIconColor(index)}
                  />
                </View>
                <View style={styles.propertyInfo}>
                  <Text style={styles.propertyName}>{property.name}</Text>
                  <Text style={styles.propertySubtext}>Assigned Properties</Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={TEXT_GRAY}
                />
              </TouchableOpacity>
            ))}
          </View>
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
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: BLACK,
  },
  sectionHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalDivider: {
    width: 1,
    height: 20,
    backgroundColor: BORDER_GRAY,
    marginLeft: 8,
  },
  propertyList: {
    gap: 12,
  },
  propertyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: BORDER_GRAY,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  propertyIconContainer: {
    marginRight: 16,
  },
  propertyInfo: {
    flex: 1,
  },
  propertyName: {
    fontSize: 16,
    fontWeight: '600',
    color: BLACK,
    marginBottom: 4,
  },
  propertySubtext: {
    fontSize: 14,
    color: TEXT_GRAY,
  },
});

