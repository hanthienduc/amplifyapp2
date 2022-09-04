import './App.css';
import logo from './logo.svg'

import { withAuthenticator, View, Button, Image, Card, Heading } from '@aws-amplify/ui-react'
function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className='app-logo' alt='logo' />
        <Heading level={1}>Now we have auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
