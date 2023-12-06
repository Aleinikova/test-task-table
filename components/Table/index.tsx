interface ITable extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string;
  children: React.ReactNode;
}

const Table = ({ className, children, ...otherProps }: ITable) => (
  <table className={className} {...otherProps}>
    {children}
  </table>
);

export default Table;
