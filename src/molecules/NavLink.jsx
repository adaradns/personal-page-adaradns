export default function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-heading font-600 text-sm uppercase tracking-wider text-black hover:text-brand-dark transition-colors duration-150 cursor-pointer relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-200" />
    </a>
  )
}
