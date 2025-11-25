import Link from "next/link";

interface ProjectCardProps{
    title: string,
    description: string,
    href: string,
    status?: string,
    isInternal?: boolean
}

export const ProjectCard = ({ title, description, href, status, isInternal }:ProjectCardProps) => {
  const CardContent = (
    <div className="card-body p-6">
      <h3 className="card-title text-2xl font-semibold">{title}</h3>
      <p className="text-sm opacity-70 mb-2">{description}</p>
      {status ? (
        <div className="badge badge-warning">{status}</div>
      ) : (
        <div className="card-actions justify-end">
          <span className="btn btn-sm btn-primary hover:btn-secondary transition-all">
            Explore →
          </span>
        </div>
      )}
    </div>
  );

  const cardClasses = `card w-full bg-base-300 hover:bg-base-300/80 shadow-xl transition-all duration-300 ${status ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl hover:scale-[1.02]'}`;

  if (status) {
    return <div className={cardClasses}>{CardContent}</div>;
  }

  // Use Link for internal navigation, <a> for external
  return isInternal ? (
    <Link href={href} className={cardClasses}>
      {CardContent}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
      {CardContent}
    </a>
  );
};