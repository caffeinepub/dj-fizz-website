import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface UserProfile {
    name: string;
}
export interface BookingForm {
    additionalDetails: string;
    venue: string;
    guestCount: bigint;
    name: string;
    email: string;
    timestamp: Time;
    phone: string;
    eventDate: string;
    eventType: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllSubmissions(): Promise<Array<BookingForm>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitForm(name: string, email: string, phone: string, eventType: string, eventDate: string, venue: string, guestCount: bigint, additionalDetails: string): Promise<void>;
}
