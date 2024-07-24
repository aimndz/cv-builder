import { useState } from "react";
import ResumePreview from "./components/ResumePreview";
import SideBar from "./components/SideBar";
import resumeIcon from "./assets/resume-icon.png";

const defaultPersonalInfo = {
  fullName: "[Name]",
  address: "[Address]",
  phoneNumber: "09123456789",
  email: "[Email Address]",
};

const defaultEducationInfo = [
  {
    academicLevel: "College",
    universityName: "[University Name]",
    city: "[City]",
    country: "[Country]",
    course: "[Course]",
    graduationDate: "[Graduation Date]",
  },
  {
    academicLevel: "Senior High School",
    universityName: "[University Name]",
    city: "[City]",
    country: "[Country]",
    course: "[Course]",
    graduationDate: "[Graduation Date]",
  },
];
const defaultExperienceInfo = [
  {
    company: "[Company Name]",
    location: "[Location]",
    position: "[Position]",
    startDate: "[Start Date]",
    endDate: "[End Date]",
    description: "[Description]",
  },
];

function App() {
  const [information, setInformation] = useState(defaultPersonalInfo);
  const [educationInfo, setEducationInfo] = useState(defaultEducationInfo);
  const [experienceInfo, setExperienceInfo] = useState(defaultExperienceInfo);

  return (
    <>
      <header className="max-w-7xl mx-auto mt-1">
        <div className="flex justify-center items-center gap-5 mb-4">
          <img className="w-16 h-16" src={resumeIcon} />
          <h1 className="font-bold text-4xl text-center my-10">CV Builder</h1>
        </div>
      </header>
      <main className="flex flex-col md:flex-row h-full gap-5 max-w-7xl mb-10 mx-auto">
        <SideBar
          personalInfo={information}
          setPersonalInfo={setInformation}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
        <ResumePreview
          information={information}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </main>
    </>
  );
}

export default App;
