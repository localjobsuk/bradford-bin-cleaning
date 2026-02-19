// Show phone number
function showPhone(btn){
  const number = document.querySelector('.phone-number');
  number.style.display = 'inline';
  btn.style.display = 'none';
}

// Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyADxEq-T2PW4Nk8ERbXjcq6oJzdDHu8F6E",
    authDomain: "westyorkshirebincleaning.firebaseapp.com",
    projectId: "westyorkshirebincleaning",
    storageBucket: "westyorkshirebincleaning.firebasestorage.app",
    messagingSenderId: "236905379736",
    appId: "1:236905379736:web:d179462e7d3b670be05ded",
    measurementId: "G-905799P3VY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submission
window.submitEnquiry = async function(event){
    event.preventDefault();
    const form = event.target;
    const data = {
        enquiryType: form.enquiryType.value,
        fullName: form.fullName.value,
        company: form.companyName.value,
        email: form.email.value,
        phone: form.phone.value,
        postcode: form.postcode.value,
        numberOfBins: form.numberOfBins.value,
        serviceFrequency: form.serviceFrequency.value,
        additionalDetails: form.additionalDetails.value,
        timestamp: new Date().toISOString()
    };
    try {
        await addDoc(collection(db, "enquiries"), data);
        alert("Thank you! Your enquiry has been submitted.");
        form.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("There was an error submitting your enquiry.");
    }
}
