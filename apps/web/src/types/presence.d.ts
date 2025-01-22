export interface PresenceEvent {
    apiId: string; // UUID format
    eventNoSqlId: string; // UUID format
    uri: string;
    subdomain: string;
    campusName: string;
    eventName: string;
    organizationName: string;
    organizationUri: string;
    orgStructureNoSqlId: string; // UUID format
    description: string; // HTML content
    location: string;
    isVirtualEventLink: boolean;
    hasVirtualEventIntegration: boolean;
    hasEventEnded: boolean;
    contactName: string;
    contactEmail: string;
    hasCoverImage: boolean;
    photoUri: string; // UUID format with file extension
    photoType: string; // e.g., "upload"
    photoUriWithVersion: string; // UUID format with file extension and version
    startDateTimeUtc: string; // ISO 8601 date-time format
    endDateTimeUtc: string; // ISO 8601 date-time format
    statusId: number;
    rsvpStatus: number;
    allowMaybe: boolean;
    isRsvpLimited: boolean;
    rsvpLimit: number;
    yesAnswerCount: number;
    maybeAnswerCount: number;
    noAnswerCount: number;
    rsvpAnswer: number;
    filterRSVPAnswer: number;
    tags: string[]; // Array of strings
}

export interface PresenceOrganization {
    subdomain: string;
    campusName: string;
    name: string;
    uri: string;
    regularMeetingTime: string;
    regularMeetingLocation: string;
    hasCoverImage: boolean;
    photoUri: string; // UUID format with file extension
    photoType: string; // e.g., "upload"
    photoUriWithVersion: string; // UUID format with file extension and version
    memberCount: number;
    categories: string[]; // Array of category names
    orgMember: boolean;
    newOrg: boolean;
    hasUpcomingEvents: boolean;
}