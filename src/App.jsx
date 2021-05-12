import React, { useState } from "react";
import Logo from "./Logo";
import { Button, Grid } from "@material-ui/core";
//import {AppDecorator} from '@your-scope/storybook'
//dummy, aslong as not imported from storybook by previous line
import { AppDecorator } from "./AppDecorator";
import A from "./A";

export default function App() {
  return AppDecorator({})(function _App() {
    const [count, setCount] = useState(0);

    return (
      <React.StrictMode>
        <Grid
          style={{ height: 600 }}
          container
          direction="column"
          alignItems="center"
          justify="space-around"
        >
          <Logo />
          <div>
            Hello Vite <A href="https://reactjs.org">React</A> +&nbsp;
            <A href="">Material-Ui</A> +&nbsp;
            <A href="https://styled-components.com">styled-components</A>!
          </div>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
          <div>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </div>
          <div>
            Build with <A href="https://vitejs.dev">Vite</A>
          </div>
        </Grid>
      </React.StrictMode>
    );
  });
}
