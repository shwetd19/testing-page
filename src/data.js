const people = [
  {
    id: 1,
    image: "/assets/file.gif",
    name: "Upload E-File",
    title: "The e-file will be processed in ML model",
    quote:
      "Please upload the E-File following the provided template for streamlined case scheduling using Differentiated Case Flow Management",
  },
  {
    id: 2,
    image: "/assets/processing-file.gif",
    name: "Processing the file in ML Model",
    title: "The priority list will be scheduled in ALFQ",
    quote:
      "Initially, the cases will be categorized based on parameters like complexity, urgency, nature (civil, criminal, etc.), and expected duration stored in respective storage buckets. These cases will be send as an input to the AI/ML model.",
  },
  {
    id: 3,
    image: "/assets/schedulling.gif",
    name: "Scheduling the final list",
    title: "Final List will be given after Scheduling",
    quote:
      "This algorithm uses boosting to elevate lower-priority cases over time, employs a feedback mechanism to consider new information and adjust priorities, and incorporates an aging mechanism to prevent cases from being stuck in lower priority indefinitely.",
  },
  {
    id: 4,
    image: "/assets/final-list.jpeg",
    name: "Final Priority wise cases list",
    title: "The judge can alter the case order as per requirement",
    quote:
      "Admins can allocate and schedule the cases per department on the respective particular centralized calender available.",
  },
];

export default people;
