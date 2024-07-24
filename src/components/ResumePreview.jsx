import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

export default function Resume({ information, educationInfo, experienceInfo }) {
  return (
    <section className=" bg-white text-black py-10 px-8 h-900 w-full w-full md:min-w-resume-width mb-10">
      <Personal
        name={information.fullName}
        address={information.address}
        phoneNumber={information.phoneNumber}
        email={information.email}
      />

      <section>
        <h1 className="font-bold">Education</h1>
        <hr className="my-2 h-0.5 bg-zinc-400" />
        {educationInfo.map((education, index) => (
          <Education
            key={index} // It's important to provide a unique key for each child in a list
            academicLevel={education.academicLevel}
            universityName={education.universityName}
            city={education.city}
            country={education.country}
            course={education.course}
            graduationDate={education.graduationDate}
          />
        ))}
      </section>
      <section>
        <h1 className="font-bold">Work Experience</h1>
        <hr className="my-2 h-0.5 bg-zinc-400" />
        {experienceInfo.map((experience, index) => (
          <Experience
            key={index}
            company={experience.company}
            location={experience.location}
            position={experience.position}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
          />
        ))}
      </section>
    </section>
  );
}
