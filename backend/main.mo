import List "mo:core/List";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";

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

  type BookingForm = {
    name : Text;
    email : Text;
    phone : Text;
    eventType : Text;
    eventDate : Text;
    venue : Text;
    guestCount : Nat;
    additionalDetails : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<BookingForm>();

  public shared ({ caller }) func submitForm(
    name : Text,
    email : Text,
    phone : Text,
    eventType : Text,
    eventDate : Text,
    venue : Text,
    guestCount : Nat,
    additionalDetails : Text,
  ) : async () {
    let submission : BookingForm = {
      name;
      email;
      phone;
      eventType;
      eventDate;
      venue;
      guestCount;
      additionalDetails;
      timestamp = Time.now();
    };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [BookingForm] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };
    submissions.toArray();
  };
};
