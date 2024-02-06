import './App.css'
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris'
import { LoadingPage, Preferences } from './components';
import { Suspense } from 'react';

function App() {

  return (
    <div>
      <AppProvider i18n={enTranslations}>
        <Suspense fallback={<LoadingPage />}>
          <Preferences />
        </Suspense>
      </AppProvider>
    </div>
  )
}

export default App
