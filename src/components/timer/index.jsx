export function Timer({ time, text }) {
  return (
    <>
      <div className="w-24 h-24 rounded-lg flex flex-col items-center justify-center bg-red-400">
        <p className="font-medium text-4xl">{time}</p>
        <p className="text-sm">{text}</p>
      </div>
    </>
  )
}
