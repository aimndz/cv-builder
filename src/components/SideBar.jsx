import { useState } from "react";
import PersonalButton from "./PersonalButton";
import EducationalButton from "./EducationalButton";
import ExperienceButton from "./ExperienceButton";
import PersonalCard from "./PersonalCard";
import EducationalCard from "./EducationalCard";
import ExperienceCard from "./ExperienceCard";

export default function SideBar({
  personalInfo,
  setPersonalInfo,
  educationInfo,
  setEducationInfo,
  experienceInfo,
  setExperienceInfo,
}) {
  const [showPersonalInfoForm, setShowPersonalInfoForm] = useState(false);
  const [showEducationalInfoForm, setShowEducationalInfoForm] = useState(false);
  const [showWorkInfoForm, setShowWorkInfoForm] = useState(false);

  const handlePersonalInfoClicK = () => {
    if (showPersonalInfoForm) {
      setShowPersonalInfoForm(false);
    } else {
      setShowPersonalInfoForm(true);
      setShowEducationalInfoForm(false);
      setShowWorkInfoForm(false);
    }
  };

  const handleEducationalInfoClick = () => {
    if (showEducationalInfoForm) {
      setShowEducationalInfoForm(false);
    } else {
      setShowEducationalInfoForm(true);
      setShowPersonalInfoForm(false);
      setShowWorkInfoForm(false);
    }
  };

  const handleWorkInfoClick = () => {
    if (showWorkInfoForm) {
      setShowWorkInfoForm(false);
    } else {
      setShowWorkInfoForm(true);
      setShowPersonalInfoForm(false);
      setShowEducationalInfoForm(false);
    }
  };
  return (
    <section className="flex flex-col gap-5 min-w-sidebar-btn w-sidebar-btn mb-10">
      {!showPersonalInfoForm ? (
        <PersonalButton onButtonClick={handlePersonalInfoClicK} />
      ) : (
        <PersonalCard
          info={personalInfo}
          setInfo={setPersonalInfo}
          onClick={handlePersonalInfoClicK}
        />
      )}

      {!showEducationalInfoForm ? (
        <EducationalButton onButtonClick={handleEducationalInfoClick} />
      ) : (
        <EducationalCard
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          onClick={handleEducationalInfoClick}
        />
      )}

      {!showWorkInfoForm ? (
        <ExperienceButton onButtonClick={handleWorkInfoClick} />
      ) : (
        <ExperienceCard
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
          onClick={handleWorkInfoClick}
        />
      )}
    </section>
  );
}
