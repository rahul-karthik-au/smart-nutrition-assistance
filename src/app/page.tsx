"use client";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsConfig from '../../awsExport'

Amplify.configure(awsConfig);
export default function Home() {
  return (
    <Authenticator>
    {({ signOut }) => (
      <main>
        <h1>Hello</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>
  );
}
