export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "Aadhaar Card",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Amit Sharma",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Nisha Patel",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Rajesh Gupta",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Vikram Singh",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Anita Desai",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Karan Mehta",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Sita Reddy",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Pooja Joshi",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Ravi Kumar",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
