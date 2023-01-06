import Button from "./Button";

export default function Main({
  date,
  techskill,
  month,
  proIMG,
  firstname,
  lastname,
  greetPeople,
  showDate
}) {
  // let month = months[date.getMonth()];
  return (
    <div>
      {month}.{date.getDay()}.{date.getFullYear()}
      <ul>
        {techskill.map((skills) => (
          <li>{skills}</li>
        ))}
      </ul>
      <img src={proIMG} alt="" width={150} />
      <h2>
        {firstname}&nbsp;{lastname}
      </h2>

      <Button text="Greet People" status={true} func={greetPeople} />
      &nbsp;
      <Button text="Show Date" status={false} func={showDate} />

    </div>
  );
}
