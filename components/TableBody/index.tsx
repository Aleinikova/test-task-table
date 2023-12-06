interface ITableBody extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

const TableBody = ({ className, children, ...otherProps }: ITableBody) => (
  <tbody className={className} {...otherProps}>
    {children}
  </tbody>
);

export default TableBody;
