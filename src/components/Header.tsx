const Header = ({
  header,
  children,
}: {
  header: string;
  children: React.JSX.Element;
}) => {
  return (
    <>
      <h2>{header}</h2>
      {children}
    </>
  );
};

export default Header;
