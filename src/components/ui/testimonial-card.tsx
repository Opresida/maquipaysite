import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  // O componente será um link 'a' se href existir, senão será uma 'div'
  const Card = href ? 'a' : 'div';

  return (
    <Card
      href={href} // O atributo href é adicionado aqui
      target={href ? '_blank' : undefined} // Abre o link em uma nova aba
      rel={href ? 'noopener noreferrer' : undefined}
      className={cn(
        'flex flex-col rounded-lg border border-primary/20',
        'bg-gradient-to-b from-surface/50 to-surface/10',
        'p-4 text-start sm:p-6',
        'hover:from-surface/60 hover:to-surface/20',
        'max-w-[320px] sm:max-w-[320px]',
        'transition-colors duration-300',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-text-primary">
            {author.name}
          </h3>
          <p className="text-sm text-primary">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-muted-foreground flex-grow">
        "{text}"
      </p>
    </Card>
  );
}
