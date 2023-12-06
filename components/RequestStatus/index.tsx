import clsx from 'clsx';
import CheckIcon from '../Icons/CheckIcon';
import ProgressIcon from '../Icons/ProgressIcon';

interface RequestStatusProps {
  variant: 'pending' | 'complete' | 'draft';
}

const variants = {
  draft: {
    label: 'Draft',
    Icon: ProgressIcon,
    style: 'text-idleDark border-idle bg-idleLight',
  },
  pending: {
    label: 'Pending',
    Icon: ProgressIcon,
    style: 'text-pendingDark border-pending bg-pendingLight',
  },
  complete: {
    label: 'Complete',
    Icon: CheckIcon,
    style: 'text-successDark border-success bg-successLight',
  },
};

const RequestStatus = ({ variant }: RequestStatusProps) => {
  const Icon = variants[variant].Icon;

  return (
    <div
      className={clsx(
        'inline-flex w-auto items-center rounded border p-1',
        variants[variant].style
      )}
    >
      <span className={clsx('mr-1 text-xs leading-3')}>
        {variants[variant].label}
      </span>
      <Icon className={clsx('h-3.5 w-3.5')} />
    </div>
  );
};

export default RequestStatus;
