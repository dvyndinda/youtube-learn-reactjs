// children adalah value default yang ada setelah parent
const ButtonElement = ({ variant = "bg-black", info, children, onClick, type = "button"}) => {
  return (
      <>
        <button
          className={`h-10 px-6 font-semibold rounded-md ${variant} text-white w-fit`}
          type={type} onClick={onClick}
        >
          {info || children}
        </button>
      </>
    );
}

export default ButtonElement;