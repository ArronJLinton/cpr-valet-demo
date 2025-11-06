import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
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
import {
  mockMediaUploads,
  mockProperties,
  mockViolationReports,
} from '../src/constants/mockData';
import { PRIMARY_RED, BLACK, WHITE, TEXT_GRAY, BORDER_GRAY, LIGHT_GRAY, CHARCOAL_GRAY } from '../constants/Colors';

export default function PropertyDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const property = mockProperties.find((p) => p.id === id);
  const propertyUploads = mockMediaUploads.filter(
    (upload) => upload.propertyId === id,
  );
  const propertyViolations = mockViolationReports.filter(
    (violation) => violation.propertyId === id,
  );

  if (!property) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Property not found</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const handleBackPress = () => {
    router.back();
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonIcon}
          onPress={handleBackPress}
        >
          <Ionicons name="chevron-back" size={24} color={WHITE} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{property.name}</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Property Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="location" size={20} color={PRIMARY_RED} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Address</Text>
              <Text style={styles.infoValue}>{property.address}</Text>
            </View>
          </View>
        </View>

        {/* Recent Uploads Section */}
        {propertyUploads.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Uploads</Text>
            {propertyUploads.map((upload) => (
              <View key={upload.id} style={styles.uploadCard}>
                <View style={styles.uploadHeader}>
                  <View style={styles.uploadTypeContainer}>
                    <Ionicons
                      name={upload.type === 'photo' ? 'image' : 'videocam'}
                      size={20}
                      color={upload.type === 'photo' ? PRIMARY_RED : '#FF9800'}
                    />
                    <Text style={styles.uploadType}>
                      {upload.type.charAt(0).toUpperCase() +
                        upload.type.slice(1)}
                    </Text>
                  </View>
                  <Text style={styles.uploadDate}>
                    {formatDate(upload.timestamp)} at {formatTime(upload.timestamp)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Violations Section */}
        {propertyViolations.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Violations</Text>
            {propertyViolations.map((violation) => (
              <View key={violation.id} style={styles.violationCard}>
                <View style={styles.violationHeader}>
                  <View style={styles.violationTypeContainer}>
                    <Ionicons name="warning" size={20} color="#FF9800" />
                    <Text style={styles.violationType}>{violation.type}</Text>
                  </View>
                  <Text style={styles.violationDate}>
                    {formatDate(violation.timestamp)} at{' '}
                    {formatTime(violation.timestamp)}
                  </Text>
                </View>
                <Text style={styles.violationDescription}>
                  {violation.description}
                </Text>
                {violation.mediaIds.length > 0 && (
                  <View style={styles.mediaIndicator}>
                    <Ionicons name="images" size={16} color={TEXT_GRAY} />
                    <Text style={styles.mediaCount}>
                      {violation.mediaIds.length} media file(s)
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Empty State */}
        {propertyUploads.length === 0 && propertyViolations.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={48} color="#ccc" />
            <Text style={styles.emptyStateText}>
              No recent activity for this property
            </Text>
          </View>
        )}
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
  backButtonIcon: {
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
  infoCard: {
    backgroundColor: LIGHT_GRAY,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: BORDER_GRAY,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: TEXT_GRAY,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: BLACK,
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: BLACK,
    marginBottom: 16,
  },
  uploadCard: {
    backgroundColor: LIGHT_GRAY,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: BORDER_GRAY,
  },
  uploadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  uploadTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadType: {
    fontSize: 16,
    fontWeight: '600',
    color: BLACK,
    marginLeft: 8,
  },
  uploadDate: {
    fontSize: 12,
    color: TEXT_GRAY,
  },
  violationCard: {
    backgroundColor: '#fff8e1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ffcc80',
  },
  violationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  violationTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  violationType: {
    fontSize: 16,
    fontWeight: '600',
    color: BLACK,
    marginLeft: 8,
  },
  violationDate: {
    fontSize: 12,
    color: TEXT_GRAY,
  },
  violationDescription: {
    fontSize: 14,
    color: CHARCOAL_GRAY,
    lineHeight: 20,
    marginBottom: 8,
  },
  mediaIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  mediaCount: {
    fontSize: 12,
    color: TEXT_GRAY,
    marginLeft: 6,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 16,
    color: TEXT_GRAY,
    marginTop: 16,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: TEXT_GRAY,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: PRIMARY_RED,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});

