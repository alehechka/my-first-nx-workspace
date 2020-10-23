import React from 'react';
import { Button, Input } from '@alehechka/ui';

export const App = () => {
  const [clicks, setClicks] = React.useState(0);
  const [hidden, setHidden] = React.useState(false);
  return (
    <>
      <Input />
      {/* <br /> */}
      <Button
        label='Async'
        onAsyncClick={() =>
          new Promise((resolve, reject) => {
            setClicks(clicks + 1);
            console.log('async press:', clicks);
            setTimeout(() => {
              if (clicks % 2 === 0) {
                resolve('success!ffffffffffffffffffffffffffffffffff');
              } else {
                reject('failure :(ffffffffffffffffffffffffffffffffff');
              }
            }, 1000);
          })
        }
        hidden={hidden}
      />
      <Button label='Sync' onClick={() => setHidden(!hidden)} />
    </>
  );
};

export default App;
