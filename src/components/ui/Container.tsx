type Props = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-6 md:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
