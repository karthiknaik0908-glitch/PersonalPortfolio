import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions in points
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const primaryColor = rgb(37 / 255, 99 / 255, 235 / 255); // Blue 600
  const purpleAccent = rgb(124 / 255, 58 / 255, 237 / 255); // Purple 600
  const darkText = rgb(30 / 255, 41 / 255, 59 / 255); // Slate 800
  const mutedText = rgb(100 / 255, 116 / 255, 139 / 255); // Slate 500
  const lightBg = rgb(248 / 255, 250 / 255, 252 / 255);
  const borderLine = rgb(226 / 255, 232 / 255, 240 / 255);

  let y = height - 45;

  // Header background bar
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    fill: lightBg,
  });
  page.drawLine({
    start: { x: 0, y: height - 100 },
    end: { x: width, y: height - 100 },
    thickness: 1,
    color: borderLine,
  });

  // Name
  page.drawText('KARTHIK JANARDHAN NAIK', {
    x: 40,
    y: y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });
  y -= 18;

  // Title / Subtitle
  page.drawText('Computer Science & Engineering Student | Aspiring Software Engineer', {
    x: 40,
    y: y,
    size: 10.5,
    font: fontBold,
    color: purpleAccent,
  });
  y -= 16;

  // Contact / Links line
  const contactText = 'Mangalore, India | Canara Engineering College | github.com/your-username | linkedin.com/in/your-username';
  page.drawText(contactText, {
    x: 40,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: mutedText,
  });
  y -= 38;

  // Helper section header
  const drawSectionHeader = (title) => {
    page.drawText(title.toUpperCase(), {
      x: 40,
      y: y,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    y -= 5;
    page.drawLine({
      start: { x: 40, y },
      end: { x: width - 40, y },
      thickness: 1.5,
      color: purpleAccent,
    });
    y -= 14;
  };

  // 1. CAREER OBJECTIVE
  drawSectionHeader('Career Objective');
  const objective =
    'Dedicated Computer Science Engineering student at Canara Engineering College with a strong foundation in\n' +
    'programming, full-stack software development, and database architecture. Eager to contribute to high-impact\n' +
    'software engineering teams, develop scalable and user-centric web applications, and solve challenging real-world problems.';
  
  objective.split('\n').forEach((line) => {
    page.drawText(line, {
      x: 40,
      y,
      size: 9,
      font: fontRegular,
      color: darkText,
    });
    y -= 13;
  });
  y -= 10;

  // 2. EDUCATION
  drawSectionHeader('Education');
  page.drawText('Bachelor of Engineering (B.E.) in Computer Science & Engineering', {
    x: 40,
    y,
    size: 10,
    font: fontBold,
    color: darkText,
  });
  page.drawText('2022 - 2026 (Expected)', {
    x: width - 150,
    y,
    size: 9,
    font: fontRegular,
    color: mutedText,
  });
  y -= 13;
  page.drawText('Canara Engineering College, Benjanapadavu, Mangalore, Karnataka', {
    x: 40,
    y,
    size: 9,
    font: fontOblique,
    color: purpleAccent,
  });
  y -= 14;
  page.drawText('Relevant Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering', {
    x: 40,
    y,
    size: 8.5,
    font: fontRegular,
    color: mutedText,
  });
  y -= 18;

  // 3. TECHNICAL SKILLS
  drawSectionHeader('Technical Skills');
  const skillsList = [
    { label: 'Programming Languages:', val: 'C, Python, Java, JavaScript (ES6+)' },
    { label: 'Frontend Development:', val: 'React, HTML5, CSS3, Tailwind CSS, Responsive Web Design' },
    { label: 'Backend & Databases:', val: 'Node.js, Express.js, MongoDB (Atlas), Firebase (Auth & Firestore), RESTful APIs' },
    { label: 'Developer Tools:', val: 'Git, GitHub, VS Code, Postman, Vite, npm' },
  ];

  skillsList.forEach((item) => {
    page.drawText(item.label, {
      x: 40,
      y,
      size: 9,
      font: fontBold,
      color: darkText,
    });
    page.drawText(item.val, {
      x: 175,
      y,
      size: 9,
      font: fontRegular,
      color: darkText,
    });
    y -= 13;
  });
  y -= 10;

  // 4. PROJECTS
  drawSectionHeader('Key Technical Projects');

  const projects = [
    {
      title: 'SmartShop AI | AI-Powered Retail & Smart Commerce Assistant',
      tech: 'React, Node.js, Express, MongoDB, Tailwind CSS, AI APIs',
      bullets: [
        'Built an intelligent shopping assistant web app providing personalized recommendations and real-time product comparisons.',
        'Engineered price comparison algorithms to analyze multi-vendor stores and suggest cost-effective deals to shoppers.',
        'Developed clean, responsive UI with interactive product filtering, review analytics, and conversational AI assistance.',
      ],
    },
    {
      title: 'MediQueue | Real-Time Healthcare & Clinic Queue Management',
      tech: 'React, Node.js, Express, MongoDB, WebSocket / Real-time, Tailwind CSS',
      bullets: [
        'Created a smart outpatient queue management system reducing hospital waiting room congestion and wait-time uncertainties.',
        'Implemented live token status monitoring, estimated consultation time calculation, and doctor availability tracking.',
        'Integrated role-based views for clinic receptionists, doctors, and remote token checking for patients on mobile devices.',
      ],
    },
    {
      title: 'Medicine Availability Finder | Neighborhood Pharmacy Locator',
      tech: 'React, Node.js, Express, Firebase / MongoDB, Geolocation API, Google Maps',
      bullets: [
        'Developed a proximity-based pharmacy locator helping patients find emergency medications in nearby verified pharmacies.',
        'Applied Haversine formula to compute accurate distance between user GPS coordinates and registered local retail pharmacies.',
        'Integrated turn-by-turn navigation via Google Maps and direct pharmacy phone contact for verified medicine inquiries.',
      ],
    },
  ];

  projects.forEach((proj) => {
    page.drawText(proj.title, {
      x: 40,
      y,
      size: 9.5,
      font: fontBold,
      color: darkText,
    });
    y -= 12;
    page.drawText(`Tech Stack: ${proj.tech}`, {
      x: 40,
      y,
      size: 8.5,
      font: fontOblique,
      color: purpleAccent,
    });
    y -= 12;

    proj.bullets.forEach((b) => {
      page.drawText('•  ' + b, {
        x: 48,
        y,
        size: 8.5,
        font: fontRegular,
        color: darkText,
      });
      y -= 11;
    });
    y -= 5;
  });

  // Footer note on PDF
  page.drawText('Generated for Karthik Janardhan Naik | Portfolio Website | Canara Engineering College, Mangalore', {
    x: 40,
    y: 25,
    size: 7.5,
    font: fontRegular,
    color: mutedText,
  });

  const pdfBytes = await pdfDoc.save();
  const targetDir = path.resolve(process.cwd(), 'frontend', 'public');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const outputPath = path.join(targetDir, 'Karthik_Janardhan_Naik_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('✅ Resume PDF successfully created at:', outputPath);
}

generateResume().catch((err) => {
  console.error('Failed to generate resume:', err);
  process.exit(1);
});
