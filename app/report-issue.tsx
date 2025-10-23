import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface PastReport {
  id: string;
  issueType: string;
  description: string;
  status: 'resolved' | 'pending' | 'in-progress';
  date: string;
  time: string;
  location: string;
}

const mockPastReports: PastReport[] = [
  {
    id: '1',
    issueType: 'Overflow',
    description: 'Trash bins overflowing at building entrance. Multiple bags scattered around the area.',
    status: 'resolved',
    date: '2024-01-15',
    time: '2:30 PM',
    location: 'Acme Apartments - Building A',
  },
  {
    id: '2',
    issueType: 'Damaged Container',
    description: 'Trash container lid is broken and cannot be properly closed. Needs replacement.',
    status: 'in-progress',
    date: '2024-01-14',
    time: '4:15 PM',
    location: 'Lakeside Villas - Unit 205',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'resolved':
      return '#4CAF50';
    case 'pending':
      return '#FF9800';
    case 'in-progress':
      return '#2196F3';
    default:
      return '#666666';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'resolved':
      return 'checkmark-circle';
    case 'pending':
      return 'time';
    case 'in-progress':
      return 'refresh';
    default:
      return 'help-circle';
  }
};

export default function ReportIssueScreen() {
  const [issueType, setIssueType] = useState('Overflow');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report Issue</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Issue Type Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Issue type</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              value={issueType}
              onChangeText={setIssueType}
              placeholder="Enter issue type"
            />
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
        </View>

        {/* Add Photo/Video Field */}
        <View style={styles.fieldContainer}>
          <View style={styles.mediaContainer}>
            <Ionicons name="camera" size={24} color="#666" />
            <View style={styles.mediaTextContainer}>
              <Text style={styles.mediaText}>Add Photo/video</Text>
              <Text style={styles.mediaSubtext}>Saved after this</Text>
            </View>
          </View>
        </View>

        {/* Description Field */}
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Past Reports Section */}
        <View style={styles.pastReportsSection}>
          <Text style={styles.pastReportsTitle}>Past Reports</Text>
          {mockPastReports.map((report) => (
            <View key={report.id} style={styles.reportCard}>
              {/* Report Header */}
              <View style={styles.reportHeader}>
                <View style={styles.reportInfo}>
                  <Text style={styles.issueType}>{report.issueType}</Text>
                  <Text style={styles.reportDate}>{report.date} at {report.time}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(report.status) + '20' }]}>
                  <Ionicons 
                    name={getStatusIcon(report.status)} 
                    size={16} 
                    color={getStatusColor(report.status)} 
                  />
                  <Text style={[styles.statusText, { color: getStatusColor(report.status) }]}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1).replace('-', ' ')}
                  </Text>
                </View>
              </View>

              {/* Location */}
              <View style={styles.locationContainer}>
                <Ionicons name="location" size={16} color="#666" />
                <Text style={styles.locationText}>{report.location}</Text>
              </View>

              {/* Description */}
              <Text style={styles.description}>{report.description}</Text>

              {/* Report Footer */}
              <View style={styles.reportFooter}>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="eye" size={16} color="#4CAF50" />
                  <Text style={styles.actionButtonText}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="share" size={16} color="#666" />
                  <Text style={styles.actionButtonText}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
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
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  mediaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  mediaTextContainer: {
    marginLeft: 12,
  },
  mediaText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  mediaSubtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  descriptionInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    minHeight: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#666',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  pastReportsSection: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  pastReportsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  reportCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  reportInfo: {
    flex: 1,
  },
  issueType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  reportDate: {
    fontSize: 14,
    color: '#666',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 16,
  },
  reportFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
});

