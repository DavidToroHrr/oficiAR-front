export default function TextInput({ id, name, type, label }) {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input 
        type={type} 
        name={name} 
        id={id} 
        className="block py-2.5 px-0 w-full text-sm text-very-dark-blue bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-dark-blue peer" 
        placeholder=" " 
        required 
      />
      <label 
        htmlFor={id} 
        className="peer-focus:font-medium absolute text-sm text-light-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}