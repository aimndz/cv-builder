import BuilderInput from "./BuilderInput";
import { useState } from "react";

export default function EducationalCard({
  educationInfo,
  setEducationInfo,
  onClick,
}) {
  const [isVisible, setIsVisible] = useState(educationInfo.map(() => true));

  const addEducationLevel = () => {
    const newEducationLevels = [
      ...educationInfo,
      {
        academicLevel: "[Academic Level]",
        universityName: "[University Name]",
        city: "[City]",
        country: "[Country]",
        course: "[Course]",
        graduationDate: "[Graduation Date]",
      },
    ];

    setEducationInfo(newEducationLevels);
    setIsVisible([...isVisible, true]);
  };

  const handleInfoChange = (input, value, index) => {
    const updatedEducationInfo = educationInfo.map((info, i) => {
      if (i === index) {
        return { ...info, [input]: value };
      }
      return info;
    });

    setEducationInfo(updatedEducationInfo);
  };

  const toggleVisibility = (index) => {
    setIsVisible(
      isVisible.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleClearInput = (index) => {
    const updatedEducationInfo = educationInfo.map((info, i) => {
      if (i === index) {
        return {
          academicLevel: "[Academic Level]",
          universityName: "[University Name]",
          city: "[City]",
          country: "[Country]",
          course: "[Course]",
          graduationDate: "[Graduation Date]",
        };
      }
      return info;
    });

    setEducationInfo(updatedEducationInfo);
  };

  const handleDelete = (index) => {
    const updatedEducationLevels = educationInfo.filter((_, i) => i !== index);
    setEducationInfo(updatedEducationLevels);
    setIsVisible(isVisible.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-zinc-700 px-6 py-6 rounded-lg border border-zinc-400">
      <h1 className="font-bold text-2xl mb-3 cursor-pointer" onClick={onClick}>
        <i className="fa-solid fa-caret-down"></i> Educational Information
      </h1>
      <section className="flex flex-col gap-4">
        {educationInfo.map((level, index) => (
          <div key={index} className="p-4 rounded-md border border-zinc-400">
            <button
              className="academic-level-header transition delay-75 duration-300 ease-in-out block w-full bg-zinc-800 py-3 rounded-lg font-bold border hover:bg-zinc-900 mt-3 mb-3"
              onClick={() => toggleVisibility(index)}
            >
              {level.academicLevel}
            </button>
            {isVisible[index] && (
              <>
                <BuilderInput
                  label="Academic level"
                  placeholder="Enter the academic level"
                  type="text"
                  value={level.academicLevel}
                  onChange={(e) =>
                    handleInfoChange("academicLevel", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="University name"
                  placeholder="Enter the university name"
                  type="text"
                  value={level.universityName}
                  onChange={(e) =>
                    handleInfoChange("universityName", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Course"
                  placeholder="Enter your course"
                  type="text"
                  value={level.course}
                  onChange={(e) =>
                    handleInfoChange("course", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="City"
                  placeholder="Enter the city"
                  type="text"
                  value={level.city}
                  onChange={(e) =>
                    handleInfoChange("city", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Country"
                  placeholder="Enter the country"
                  type="text"
                  value={level.country}
                  onChange={(e) =>
                    handleInfoChange("country", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Graduation date"
                  placeholder="Enter your graduation date"
                  type="email"
                  value={level.graduationDate}
                  onChange={(e) =>
                    handleInfoChange("graduationDate", e.target.value, index)
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
        onClick={addEducationLevel}
      >
        <i className="fa-solid fa-plus"></i> ADD
      </button>
    </section>
  );
}
