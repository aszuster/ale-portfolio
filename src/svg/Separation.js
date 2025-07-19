export default function Separation ({ className = "" }) {
  return (
    <svg
      className={`${className} `}
      width="5"
      height="105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="#B5FFE1" strokeWidth="5" d="M2.5 0v105" />
    </svg>
  );
}
