import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface NavItem {
  name: string;
  route: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    route: '/',
    icon: 'home',
    label: 'Home',
  },
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: 'grid',
    label: 'Dashboard',
  },
  {
    name: 'Time Tracking',
    route: '/time-tracking',
    icon: 'time',
    label: 'Time Tracking',
  },
  {
    name: 'Report Issue',
    route: '/report-issue',
    icon: 'warning',
    label: 'Report Issue',
  },
  {
    name: 'Daily Work Plan',
    route: '/daily-work-plan',
    icon: 'calendar',
    label: 'Work Plan',
  },
  {
    name: 'Profile',
    route: '/profile',
    icon: 'person',
    label: 'Profile',
  },
];

export const GlobalNavbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        {navItems.map((item) => {
          const isActive = pathname === item.route;
          return (
            <TouchableOpacity
              key={item.name}
              style={[styles.navItem, isActive && styles.activeNavItem]}
              onPress={() => handleNavigation(item.route)}
            >
              <Ionicons
                name={item.icon}
                size={24}
                color={isActive ? '#4CAF50' : '#666666'}
              />
              <Text
                style={[
                  styles.navLabel,
                  isActive && styles.activeNavLabel,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    minWidth: 80,
  },
  activeNavItem: {
    backgroundColor: '#f0f8f0',
  },
  navLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
    textAlign: 'center',
  },
  activeNavLabel: {
    color: '#4CAF50',
    fontWeight: '600',
  },
});
