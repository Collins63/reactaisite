import { PlaceholdersAndVanishInput } from "./design/PlaceholdersAndVanishInput";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Who is Collins Chimbganda?",
    "He's good at which languages?",
    "Does he have any experince?",
    "How many projects done so far",
    "Are his clients satisfied?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className=" mt-15 flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>
  );
}
