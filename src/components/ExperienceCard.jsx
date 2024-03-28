import BuilderInput from "./BuilderInput";
import { useState } from "react";

export default function ExperienceCard({
  experienceInfo,
  setExperienceInfo,
  onClick,
}) {
  const [isVisible, setIsVisible] = useState(experienceInfo.map(() => true));

  const addExperienceInfo = () => {
    const newEducationLevels = [
      ...experienceInfo,
      {
        company: "[Company Name]",
        position: "[Position]",
        location: "[Location]",
        startDate: "[Start Date]",
        endDate: "[End Date]",
        description: "[Description]",
      },
    ];

    setExperienceInfo(newEducationLevels);
    setIsVisible([...isVisible, true]);
  };

  const toggleVisibility = (index) => {
    setIsVisible(
      isVisible.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleInfoChange = (input, value, index) => {
    const updatedExperienceInfo = experienceInfo.map((info, i) => {
      if (i === index) {
        return { ...info, [input]: value };
      }
      return info;
    });

    setExperienceInfo(updatedExperienceInfo);
  };

  const handleClearInput = (index) => {
    const updatedExperienceInfo = experienceInfo.map((info, i) => {
      if (i === index) {
        return {
          company: "[Company Name]",
          position: "[Position]",
          location: "[Location]",
          startDate: "[Start Date]",
          endDate: "[End Date]",
          description: "[Description]",
        };
      }
      return info;
    });

    setExperienceInfo(updatedExperienceInfo);
  };

  const handleDelete = (index) => {
    const updatedExperienceInfo = experienceInfo.filter((_, i) => i !== index);
    setExperienceInfo(updatedExperienceInfo);
    setIsVisible(isVisible.filter((_, i) => i !== index));
  };

  return (
    <section className=" bg-zinc-700 px-6 py-6 rounded-lg border">
      <h1 className="font-bold text-2xl mb-3 cursor-pointer" onClick={onClick}>
        <i className="fa-solid fa-caret-down"></i> Work Experience
      </h1>
      <section className="flex flex-col gap-4">
        {experienceInfo.map((experience, index) => (
          <div key={index} className="p-4 rounded-md border border-zinc-400">
            <button
              className="academic-level-header transition delay-75 duration-300 ease-in-out block w-full bg-zinc-800 py-3 rounded-lg font-bold border hover:bg-zinc-900 mt-3 mb-3"
              onClick={() => toggleVisibility(index)}
            >
              {experience.company}
            </button>
            {isVisible[index] && (
              <>
                <BuilderInput
                  label="Company"
                  placeholder="Enter the company"
                  type="text"
                  value={experience.company}
                  onChange={(e) =>
                    handleInfoChange("company", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Location"
                  placeholder="Enter your location"
                  type="text"
                  value={experience.location}
                  onChange={(e) =>
                    handleInfoChange("location", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Position"
                  placeholder="Enter your position"
                  type="text"
                  value={experience.position}
                  onChange={(e) =>
                    handleInfoChange("position", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Start Date"
                  placeholder="Enter the start date"
                  type="text"
                  value={experience.startDate}
                  onChange={(e) =>
                    handleInfoChange("startDate", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="End Date"
                  placeholder="Enter the end date"
                  type="text"
                  value={experience.endDate}
                  onChange={(e) =>
                    handleInfoChange("endDate", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Description"
                  placeholder="Enter a description"
                  type="text"
                  value={experience.description}
                  onChange={(e) =>
                    handleInfoChange("description", e.target.value, index)
                  }
                />
                <div className="flex gap-2">
                  <button
                    className="transition delay-75 duration-300 ease-in-out block w-full bg-red-700 py-3 rounded-lg font-bold border hover:bg-red-600 mt-3"
                    onClick={() => handleDelete(index)}
                  >
                    DELETE
                  </button>
                  <button
                    className="transition delay-75 duration-300 ease-in-out block w-full bg-sky-500 py-3 rounded-lg font-bold border hover:bg-sky-400 mt-3"
                    onClick={() => handleClearInput(index)}
                  >
                    CLEAR
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </section>
      <button
        className="transition delay-75 duration-300 ease-in-out block w-full bg-sky-500 py-3 rounded-lg font-bold border hover:bg-sky-400 mt-6"
        onClick={addExperienceInfo}
      >
        <i className="fa-solid fa-plus"></i> ADD
      </button>
    </section>
  );
}
