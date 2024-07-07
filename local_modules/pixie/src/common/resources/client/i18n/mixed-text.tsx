import {MessageDescriptor} from './message-descriptor';
import {Trans} from './trans';

interface Props {
  value?: string | MessageDescriptor | null;
}
export function MixedText({value}: Props) {
  if (!value) {
    return null;
  }
  if (typeof value === 'string') {
    return <Trans message={value} />;
  }
  return <Trans {...value} />;
}