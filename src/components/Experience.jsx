export default function WorkExperience({
  company,
  location,
  position,
  startDate,
  endDate,
  description,
}) {
  return (
    <>
      <div className="flex justify-between font-bold">
        <p>{company}</p>
        <p>{location}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">{position}</p>
        <p>
          <span>{startDate}</span> - <span>{endDate}</span>
        </p>
      </div>
      <p className="mt-3">{description}</p>
    </>
  );
}
