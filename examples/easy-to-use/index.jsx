import { Prismium, PrismiumCurrent, PrismiumContent } from 'prismium/react';
import 'prismium/scss';

export default () => {
  return (
    <Prismium>
      <PrismiumCurrent>button</PrismiumCurrent>
      <PrismiumContent>{/* content */}</PrismiumContent>
    </Prismium>
  );
};
