interface ITableRow extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

const TableHead = ({ className, children, ...otherProps }: ITableRow) => {
  return (
    <thead className={className} {...otherProps}>
      {children}
    </thead>
  );
};

export default TableHead;
