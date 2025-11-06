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
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonIcon}
          onPress={handleBackPress}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{property.name}</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Property Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="location" size={20} color="#4CAF50" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Address</Text>
              <Text style={styles.infoValue}>{property.address}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="map" size={20} color="#4CAF50" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Coordinates</Text>
              <Text style={styles.infoValue}>
                {property.location.latitude.toFixed(4)},{' '}
                {property.location.longitude.toFixed(4)}
              </Text>
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
                      color={upload.type === 'photo' ? '#4CAF50' : '#FF9800'}
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
                    <Ionicons name="images" size={16} color="#666" />
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
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButtonIcon: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
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
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  infoTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  uploadCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
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
    color: '#000',
    marginLeft: 8,
  },
  uploadDate: {
    fontSize: 12,
    color: '#666',
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
    color: '#000',
    marginLeft: 8,
  },
  violationDate: {
    fontSize: 12,
    color: '#666',
  },
  violationDescription: {
    fontSize: 14,
    color: '#333',
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
    color: '#666',
    marginLeft: 6,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#999',
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
    color: '#666',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

