type Props = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20 ${className}`}>
      {children}
    </Tag>
  );
}
