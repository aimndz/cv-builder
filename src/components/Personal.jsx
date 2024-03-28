export default function PersonalInformation({
  name,
  address,
  phoneNumber,
  email,
}) {
  return (
    <section className="min-w-14">
      <header className="text-center">
        <p className=" font-bold text-2xl">{name}</p>
        <p>{address}</p>
        <div className="flex gap-3 justify-center ">
          <p>
            <span className="fa-solid fa-phone mr-2" />
            {phoneNumber}
          </p>
          <p>
            <span className="fa-solid fa-envelope mr-2" />
            {email}
          </p>
        </div>
      </header>
    </section>
  );
}
