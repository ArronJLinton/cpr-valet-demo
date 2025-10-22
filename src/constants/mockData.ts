import {
  DashboardData,
  Employee,
  MediaUpload,
  Property,
  TimeEntry,
  ViolationReport,
} from '../types';

// Mock employee data
export const mockEmployee: Employee = {
  id: 'emp-001',
  name: 'Tony Stark',
  // role: 'Property Manager',
  profileImage: 'https://via.placeholder.com/100x100/4A90E2/FFFFFF?text=MT',
};

// Mock properties data
export const mockProperties: Property[] = [
  {
    id: 'prop-001',
    name: 'Acme Apartments',
    address: '123 Main St, City, State 12345',
    location: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
  {
    id: 'prop-002',
    name: 'Lakeside Villas',
    address: '456 Lake Ave, City, State 12345',
    location: {
      latitude: 40.7589,
      longitude: -73.9851,
    },
  },
  {
    id: 'prop-003',
    name: 'Westview Condos',
    address: '789 West St, City, State 12345',
    location: {
      latitude: 40.7505,
      longitude: -73.9934,
    },
  },
];

// Mock time entry data
export const mockTimeEntry: TimeEntry = {
  id: 'time-001',
  employeeId: 'emp-001',
  propertyId: 'prop-001',
  clockInTime: new Date('2024-01-15T08:00:00Z'),
  clockOutTime: undefined,
  isClockedIn: true,
};

// Mock media uploads
export const mockMediaUploads: MediaUpload[] = [
  {
    id: 'media-001',
    type: 'photo',
    uri: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Photo+1',
    timestamp: new Date('2024-01-15T10:30:00Z'),
    propertyId: 'prop-001',
    employeeId: 'emp-001',
  },
  {
    id: 'media-002',
    type: 'video',
    uri: 'https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Video+1',
    timestamp: new Date('2024-01-15T11:15:00Z'),
    propertyId: 'prop-002',
    employeeId: 'emp-001',
  },
];

// Mock violation reports
export const mockViolationReports: ViolationReport[] = [
  {
    id: 'violation-001',
    type: 'Overflow',
    description: 'Trash bins overflowing with excess waste',
    propertyId: 'prop-001',
    employeeId: 'emp-001',
    timestamp: new Date('2024-01-15T09:45:00Z'),
    mediaIds: ['media-001'],
  },
];

// Complete dashboard mock data
export const mockDashboardData: DashboardData = {
  employee: mockEmployee,
  assignedProperties: mockProperties,
  currentTimeEntry: mockTimeEntry,
  recentUploads: mockMediaUploads,
  recentViolations: mockViolationReports,
};
