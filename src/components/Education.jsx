export default function Education({
  academicLevel,
  universityName,
  city,
  country,
  course,
  graduationDate,
}) {
  return (
    <>
      <div className="mb-3">
        <p>{academicLevel}</p>
        <div className="flex justify-between">
          <p className="font-bold">{universityName}</p>
          <p className="font-bold">{course}</p>
        </div>
        <div className="flex justify-between">
          <p>
            <span>{city}</span>, <span>{country}</span>
          </p>
          <p>{graduationDate}</p>
        </div>
      </div>
    </>
  );
}
