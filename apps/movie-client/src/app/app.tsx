import React from 'react';
import { Button, Input } from '@alehechka/ui';

export const App = () => {
  const [clicks, setClicks] = React.useState(0);
  return (
    <>
      <Input />
      {/* <br /> */}
      <Button
        label='Press me'
        onAsyncClick={() =>
          new Promise((resolve, reject) => {
            setClicks(clicks + 1);
            console.log('async press:', clicks);
            setTimeout(() => {
              if (clicks % 2 === 0) {
                resolve('success!');
              } else {
                reject('failure :(');
              }
            }, 1000);
          })
        }
      />
    </>
  );
};

export default App;
