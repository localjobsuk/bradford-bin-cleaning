// Firebase Modular SDK (for browser)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyADxEq-T2PW4Nk8ERbXjcq6oJzdDHu8F6E",
  authDomain: "westyorkshirebincleaning.firebaseapp.com",
  projectId: "westyorkshirebincleaning",
  storageBucket: "westyorkshirebincleaning.firebasestorage.app",
  messagingSenderId: "236905379736",
  appId: "1:236905379736:web:d179462e7d3b670be05ded",
  measurementId: "G-905799P3VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make function global so HTML can access it
window.submitEnquiry = async function(event) {
  event.preventDefault();

  const form = event.target;

  const data = {
    enquiryType: form.enquiryType.value,
    fullName: form.fullName.value,
    companyName: form.companyName.value,
    email: form.email.value,
    phone: form.phone.value,
    postcode: form.postcode.value,
    numberOfBins: form.numberOfBins.value,
    serviceFrequency: form.serviceFrequency.value,
    additionalDetails: form.additionalDetails.value,
    createdAt: new Date()
  };

  try {
    await addDoc(collection(db, "enquiries"), data);
    alert("✅ Enquiry submitted successfully!");
    form.reset();
  } catch (error) {
    console.error("Error:", error);
    alert("❌ Error submitting form. Check console.");
  }
};
