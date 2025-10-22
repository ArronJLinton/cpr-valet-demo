import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CameraButton } from '../MediaUpload/CameraButton';

interface ViolationFormProps {
  onSubmit: (violation: any) => void;
  onCancel: () => void;
  propertyId?: string;
}

const violationTypes = [
  { id: 'overflow', label: 'Overflow', icon: 'trash' },
  { id: 'damage', label: 'Damage', icon: 'warning' },
  { id: 'access', label: 'Access Issue', icon: 'lock-closed' },
  { id: 'other', label: 'Other', icon: 'ellipsis-horizontal' },
];

export const ViolationForm: React.FC<ViolationFormProps> = ({ onSubmit, onCancel, propertyId }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [media, setMedia] = useState<string[]>([]);

  const handleSubmit = () => {
    const violation = {
      type: selectedType,
      description,
      media,
      propertyId,
      timestamp: new Date(),
    };
    onSubmit(violation);
  };

  const handleAddMedia = () => {
    // Placeholder for media upload functionality
    console.log('Add media placeholder');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Report Issue</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Issue Type</Text>
        <View style={styles.typeGrid}>
          {violationTypes.map(type => (
            <TouchableOpacity
              key={type.id}
              style={[styles.typeButton, selectedType === type.id && styles.selectedTypeButton]}
              onPress={() => setSelectedType(type.id)}
            >
              <Ionicons
                name={type.icon as keyof typeof Ionicons.glyphMap}
                size={24}
                color={selectedType === type.id ? '#ffffff' : '#4CAF50'}
              />
              <Text
                style={[
                  styles.typeButtonText,
                  selectedType === type.id && styles.selectedTypeButtonText,
                ]}
              >
                {type.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Add Photo/Video</Text>
        <CameraButton onPress={handleAddMedia} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Describe the issue...'
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          textAlignVertical='top'
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.cancelButton]} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.actionButton,
            styles.submitButton,
            (!selectedType || !description.trim()) && styles.disabledButton,
          ]}
          onPress={handleSubmit}
          disabled={!selectedType || !description.trim()}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
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
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  typeButton: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  selectedTypeButton: {
    backgroundColor: '#4CAF50',
  },
  typeButtonText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  selectedTypeButtonText: {
    color: '#ffffff',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  cancelButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
