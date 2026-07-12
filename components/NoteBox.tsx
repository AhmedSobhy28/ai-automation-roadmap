export default function NoteBox({ heading, icon, text }: { heading: string; icon: string; text: string }) {
  return (
    <div className="p-5 rounded-lg bg-primary/5 border border-primary/20 h-full">
      <h4 className="flex items-center gap-2 font-semibold text-primary mb-2 text-sm">
        <span className="rounded-md border border-primary/20 bg-primary/10 px-2 py-1 font-mono text-xs">{icon}</span>{heading}
      </h4>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  );
}
