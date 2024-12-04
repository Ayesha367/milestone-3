// Fetch all editable elements
var editableElements = document.querySelectorAll(".editable");
var saveButton = document.getElementById("save-btn");
// Object to store the latest resume data
var resumeData = {
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: ""
};
// Function to load the existing resume data
function loadResume() {
    // Pre-fill some dummy data (or use previously saved data)
    resumeData = {
        name: "Ayesha farooq",
        email: "AyeshaFarooq@gmail.com",
        education: "Matriculation in Computer Science",
        experience: "Software Developer at XYZ Corp.",
        skills: "TypeScript, HTML, CSS, JavaScript"
    };
    document.getElementById("output-name").textContent = resumeData.name;
    document.getElementById("output-email").textContent = resumeData.email;
    document.getElementById("output-education").textContent = resumeData.education;
    document.getElementById("output-experience").textContent = resumeData.experience;
    document.getElementById("output-skills").textContent = resumeData.skills;
}
// Function to save the changes made to the resume
function saveChanges() {
    // Iterate over each editable element and update the resumeData object
    editableElements.forEach(function (element) {
        var field = element.id.split("-")[1]; // Get the field name (e.g., "name", "email")
        resumeData[field] = element.textContent || "";
    });
    alert("Resume changes saved successfully!");
}
// Load the initial resume data when the page loads
window.onload = loadResume;
// Add an event listener to the save button
saveButton.addEventListener("click", saveChanges);
