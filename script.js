const collegeData = {
  kits: {
    name: "KITS Institute of Technology",
    course: "B.Tech in CSE",
    duration: "4 Years",
    details: "Well-known for engineering education and innovation.",
    placements: "Top companies like Infosys, Wipro, TCS.",
    certificateYear: "2025",
    admission: "Online + Offline",
    salary: "Average: ₹6 LPA",
    timings: "9:00 AM - 5:00 PM"
  },
  a1: {
    name: "A1 Engineering College",
    course: "Diploma, B.Tech",
    duration: "3-4 Years",
    details: "Emerging institute with modern infrastructure.",
    placements: "Growing placement cell with MNCs visiting.",
    certificateYear: "2024",
    admission: "Offline only",
    salary: "Average: ₹4.5 LPA",
    timings: "8:30 AM - 4:30 PM"
  },
  xyz: {
    name: "XYZ University",
    course: "MBA, BBA, BCA",
    duration: "2-4 Years",
    details: "University offering multiple graduate programs.",
    placements: "95% placement record with top firms.",
    certificateYear: "2023",
    admission: "Online Admission Portal",
    salary: "Average: ₹7 LPA",
    timings: "10:00 AM - 6:00 PM"
  },
  Sgit: {
    name: "Sgit University",
    course: "MBA, BBA, BCA",
    duration: "2-4 Years",
    details: "University offering multiple graduate programs.",
    placements: "95% placement record with top firms.",
    certificateYear: "2023",
    admission: "Online Admission Portal",
    salary: "Average: ₹7 LPA",
    timings: "10:00 AM - 6:00 PM"
  },
  vijay: {
    name: "vijay University",
    course: "MBA, BBA, BCA",
    duration: "2-4 Years",
    details: "University offering multiple graduate programs.",
    placements: "95% placement record with top firms.",
    certificateYear: "2023",
    admission: "Online Admission Portal",
    salary: "Average: ₹7 LPA",
    timings: "10:00 AM - 6:00 PM"
  },
  karthik: {
    name: "karthik University",
    course: "MBA, BBA, BCA",
    duration: "2-4 Years",
    details: "University offering multiple graduate programs.",
    placements: "95% placement record with top firms.",
    certificateYear: "2023",
    admission: "Online Admission Portal",
    salary: "Average: ₹7 LPA",
    timings: "10:00 AM - 6:00 PM"
  },
  Sri: {
    name: "SriUniversity",
    course: "MBA, BBA, BCA",
    duration: "2-4 Years",
    details: "University offering multiple graduate programs.",
    placements: "95% placement record with top firms.",
    certificateYear: "2023",
    admission: "Online Admission Portal",
    salary: "Average: ₹7 LPA",
    timings: "10:00 AM - 6:00 PM"
  },
  sai: {
    name: "Sai techno University",
    course: "MBA, BBA, BCA",
    duration: "2-4 Years",
    details: "University offering multiple graduate programs.",
    placements: "95% placement record with top firms.",
    certificateYear: "2023",
    admission: "Online Admission Portal",
    salary: "Average: ₹7 LPA",
    timings: "10:00 AM - 6:00 PM"
  },
  jeevan: {
    name: "jeevan jythoi University",
    course: "MBA, BBA, BCA",
    duration: "2-4 Years",
    details: "University offering multiple graduate programs.",
    placements: "95% placement record with top firms.",
    certificateYear: "2023",
    admission: "Online Admission Portal",
    salary: "Average: ₹7 LPA",
    timings: "10:00 AM - 6:00 PM"
  }
};

function showCollegeData() {
  const selected = document.getElementById("collegeDropdown").value;
  const infoBox = document.getElementById("collegeInfo");

  if (collegeData[selected]) {
    const data = collegeData[selected];
    infoBox.innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>Course:</strong> ${data.course}</p>
      <p><strong>Duration:</strong> ${data.duration}</p>
      <p><strong>Details:</strong> ${data.details}</p>
      <p><strong>Placements:</strong> ${data.placements}</p>
      <p><strong>Certificate Year:</strong> ${data.certificateYear}</p>
      <p><strong>Admission:</strong> ${data.admission}</p>
      <p><strong>Average Salary:</strong> ${data.salary}</p>
      <p><strong>Timings:</strong> ${data.timings}</p>
    `;
  } else {
    infoBox.innerHTML = "<p>Please select a college from the dropdown above.</p>";
  }
}