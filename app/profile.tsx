import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { PRIMARY_RED, BLACK, WHITE, TEXT_GRAY, BORDER_GRAY } from '../constants/Colors';

export default function ProfileScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleEditProfile = () => {
    // TODO: Navigate to edit profile screen
  };

  const handlePrivacyPolicy = () => {
    // TODO: Navigate to privacy policy screen
  };

  const handleTermsConditions = () => {
    // TODO: Navigate to terms & conditions screen
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
          <Ionicons name="chevron-back" size={24} color={BLACK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Profile Content */}
      <View style={styles.content}>
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          <View style={styles.profilePictureCircle}>
            <Image
              source={require('../assets/images/profile_pic.jpg')}
              style={styles.profilePicture}
            />
          </View>
        </View>

        {/* Name and Role */}
        <Text style={styles.name}>Mickelle Taylor</Text>
        <Text style={styles.role}>Property Manager</Text>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={handleEditProfile}
          >
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={handlePrivacyPolicy}
          >
            <Text style={styles.menuItemText}>Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={20} color={BLACK} />
          </TouchableOpacity>
          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={handleTermsConditions}
          >
            <Text style={styles.menuItemText}>Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={20} color={BLACK} />
          </TouchableOpacity>
        </View>
      </View>
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
    alignItems: 'center',
    paddingTop: 32,
  },
  profilePictureContainer: {
    marginBottom: 16,
  },
  profilePictureCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: PRIMARY_RED,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: BLACK,
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: TEXT_GRAY,
    marginBottom: 40,
  },
  menuContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: BLACK,
  },
  separator: {
    height: 1,
    backgroundColor: BORDER_GRAY,
  },
});

