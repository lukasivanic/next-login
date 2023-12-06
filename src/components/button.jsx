export default function SubmitButton(props) {
  return (
    <input
      className="text-base font-normal w-full h-11 rounded-xl py-1 px-3 mt-6 bg-gray-300"
      type="submit"
      value={props.value}
    />
  );
}
