// Basic TypeScript interfaces for employee dashboard
export interface Employee {
  id: string;
  name: string;
  // role: string;
  profileImage?: string;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  assignedProperties?: string[];
}

export interface TimeEntry {
  id: string;
  employeeId: string;
  propertyId: string;
  clockInTime?: Date;
  clockOutTime?: Date;
  isClockedIn: boolean;
}

export interface MediaUpload {
  id: string;
  type: 'photo' | 'video';
  uri: string;
  timestamp: Date;
  propertyId: string;
  employeeId: string;
}

export interface ViolationReport {
  id: string;
  type: string;
  description: string;
  propertyId: string;
  employeeId: string;
  timestamp: Date;
  mediaIds: string[];
}

export interface DashboardData {
  employee: Employee;
  assignedProperties: Property[];
  currentTimeEntry?: TimeEntry;
  recentUploads: MediaUpload[];
  recentViolations: ViolationReport[];
}
