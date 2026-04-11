const LINES = [
  'Fan de Jugar roguelikes.',
  'Programar.',
  'Enseñar.',
  'Y entender como funcionan las cosas.',
]

export default function TerminalBlock() {
  return (
    <div className="brutal-border brutal-shadow bg-black max-w-2xl w-full">
      <div className="flex items-center gap-2 px-4 py-3 border-b-3 border-black bg-brand-dark">
        <span className="w-3 h-3 bg-red-500 brutal-border border-black block" />
        <span className="w-3 h-3 bg-brand-accent brutal-border border-black block" />
        <span className="w-3 h-3 bg-green-400 brutal-border border-black block" />
        <span className="font-mono text-xs text-brand-light ml-2 select-none">
          adara@portfolio ~ %
        </span>
      </div>

      <div className="p-5 md:p-6">
        <p className="font-mono text-brand-accent text-sm mb-3 select-none">
          $ whoami --interests
        </p>
        <ul className="flex flex-col gap-1" aria-label="Intereses de Adara">
          {LINES.map((line) => (
            <li key={line} className="font-mono text-sm md:text-base text-white flex items-start gap-2">
              <span className="text-brand-mid select-none flex-shrink-0">{'>'}</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
