// children adalah value default yang ada setelah parent
const ButtonElement = ({ variant = "bg-black", info, children }) => {
  return (
      <>
        <button
          className={`h-10 px-6 font-semibold rounded-md ${variant} text-white w-full`}
          type="submit"
        >
          {info || children}
        </button>
      </>
    );
}

export default ButtonElement;