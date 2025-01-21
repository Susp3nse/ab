import { NavLink } from 'react-router-dom';
import { Button, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to <br />
        <Text inherit variant="gradient" component="span" gradient={{ from: 'white', to: 'green' }}>
          AB Maker
        </Text>
        <br />
        <NavLink to="/quest-builder">
          <Button size="lg">Get Started!</Button>
        </NavLink>
      </Title>
    </>
  );
}
