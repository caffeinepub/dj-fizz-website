import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";

module {
  type OldActor = {
    nextSubmissionId : Nat;
    submissions : Map.Map<Nat, {
      name : Text;
      email : Text;
      phone : Text;
      eventType : Text;
      eventDate : Text;
      venue : Text;
      guestCount : Nat;
      additionalDetails : Text;
      timestamp : Time.Time;
      id : Nat;
    }>;
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
    submittedAt : Time.Time;
  };

  type BookingSubmission = {
    id : Nat;
    booking : BookingForm;
    timestamp : Time.Time;
  };

  type NewActor = {
    lastSubmissionId : Nat;
    submissions : Map.Map<Nat, BookingSubmission>;
  };

  public func run(old : OldActor) : NewActor {
    let newSubmissions = old.submissions.map<Nat, {
      name : Text;
      email : Text;
      phone : Text;
      eventType : Text;
      eventDate : Text;
      venue : Text;
      guestCount : Nat;
      additionalDetails : Text;
      timestamp : Time.Time;
      id : Nat;
    }, BookingSubmission>(
      func(_id, oldSubmission) {
        {
          id = oldSubmission.id;
          timestamp = oldSubmission.timestamp;
          booking = {
            name = oldSubmission.name;
            email = oldSubmission.email;
            phone = oldSubmission.phone;
            eventType = oldSubmission.eventType;
            eventDate = oldSubmission.eventDate;
            venue = oldSubmission.venue;
            guestCount = oldSubmission.guestCount;
            additionalDetails = oldSubmission.additionalDetails;
            submittedAt = oldSubmission.timestamp; // Use old timestamp as submittedAt.
          };
        };
      }
    );
    {
      lastSubmissionId = old.nextSubmissionId;
      submissions = newSubmissions;
    };
  };
};
