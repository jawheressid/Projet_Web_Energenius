type SectionHeaderProps = {
  pill?: string;
  title?: string;
  description?: string;
  align?: "center" | "left";
  eyebrowClassName?: string;
};

export default function SectionHeader({
  pill,
  title,
  description,
  align = "center",
  eyebrowClassName = "",
}: SectionHeaderProps) {
  const alignmentClass = align === "left" ? "align-left" : "";

  return (
    <div className={`section-header ${alignmentClass}`.trim()}>
      {pill && <p className={`section-pill ${eyebrowClassName}`.trim()}>{pill}</p>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}
