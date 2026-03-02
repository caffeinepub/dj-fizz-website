import Time "mo:core/Time";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import AccessControl "authorization/access-control";
import Nat "mo:core/Nat";

import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";

// Specify migration function in the with clause for automatic state upgrade.

actor {
  include MixinStorage();

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public type BookingForm = {
    name : Text;
    email : Text;
    phone : Text;
    eventType : Text;
    eventDate : Text;
    venue : Text;
    guestCount : Nat;
    additionalDetails : Text;
    submittedAt : Time.Time;
  };

  public type BookingSubmission = {
    id : Nat;
    booking : BookingForm;
    timestamp : Time.Time;
  };

  type SubmissionResult = {
    #ok : Nat;
    #error : Text;
  };

  stable var lastSubmissionId = 0;
  stable var submissions : Map.Map<Nat, BookingSubmission> = Map.empty<Nat, BookingSubmission>();

  // Open to all callers including guests — no authorization check needed.
  public shared ({ caller }) func submitBooking(name : Text, email : Text, phone : Text, eventType : Text, eventDate : Text, venue : Text, guestCount : Nat, additionalDetails : Text) : async SubmissionResult {
    let newBooking : BookingForm = {
      name;
      email;
      phone;
      eventType;
      eventDate;
      venue;
      guestCount;
      additionalDetails;
      submittedAt = Time.now();
    };

    let submissionId = lastSubmissionId;
    let newSubmission : BookingSubmission = {
      id = submissionId;
      booking = newBooking;
      timestamp = Time.now();
    };

    submissions.add(submissionId, newSubmission);
    lastSubmissionId += 1;
    #ok(submissionId);
  };

  // Admin-only: returns all customer submissions which contain sensitive data.
  public query ({ caller }) func getAllSubmissions() : async [BookingSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };
    submissions.values().toArray();
  };
};
