import { FaBell } from "react-icons/fa";

const Reminder = () => {
  const reminders = [
    {
      quote: "Indeed, prayers were prescribed on the believers at fixed times.",
      reference: "An-Nisa 4:103",
    },
    {
      quote: "Verily, in the remembrance of Allah do hearts find rest.",
      reference: "Ar-Ra'd 13:28",
    },
    {
      quote: "And seek help through patience and prayer.",
      reference: "Al-Baqarah 2:45",
    },
  ];

  const rendomReminders =
    reminders[Math.floor(Math.random() * reminders.length)];

  return (
    <>
      <div className="flex flex-col gap-10 p-7 bg-white shadow-sm border border-border rounded-xl">
        <div className="flex items-center gap-4">
          <span className="text-3xl">
            <FaBell />
          </span>
          <h2 className="">Weekly Progress</h2>
        </div>
        <div className="flex flex-col gap-16 bg-gray-100 rounded-2xl p-10 ">
          <p className="text-xl font-medium">{rendomReminders.quote}</p>
          <span className="text-gray-500 text-lg">
            ( {rendomReminders.reference} )
          </span>
        </div>
      </div>
    </>
  );
};

export default Reminder;
