export default function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      className="block w-full rounded-xl my-3 border-0 py-2 px-3 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-400 text-lg leading-7"
    />
  );
}
