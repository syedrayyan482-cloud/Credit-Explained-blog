interface AuthorBoxProps {
  name: string;
  credentials?: string;
  bio?: string;
  avatarUrl?: string;
}

export function AuthorBox({ name, credentials, bio, avatarUrl }: AuthorBoxProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
      <div className="flex-shrink-0">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-heading">{name}</span>
          {credentials && (
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
              {credentials}
            </span>
          )}
        </div>
        {bio && (
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{bio}</p>
        )}
      </div>
    </div>
  );
}
