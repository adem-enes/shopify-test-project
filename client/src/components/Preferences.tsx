import { FormEvent, useEffect, useState } from 'react';
import { Button, Card, Form, FormLayout, Grid, Layout, Page, Text, TextField } from '@shopify/polaris'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getPreferences, updatePreferences } from '../app/slices/preferencesSlice';
import { PreferencesType } from '..';

const Preferences = () => {
  const { preferences } = useAppSelector(state => state.preferences);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPreferences(8072833728761));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTitle(preferences.title);
    setDescription(preferences.description);
  }, [preferences]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const newPreferences: PreferencesType = {
      id: preferences.id,
      title: data.title as string,
      description: data.description as string
    }

    dispatch(updatePreferences(newPreferences));
  }

  return (
    <Page title="Preferences" fullWidth>
      <Layout>
        <Layout.Section variant='oneThird'>
          <Grid columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
            <Text as='h3' fontWeight='bold'>Title and meta description</Text>
            <Text as="p" breakWord>
              The title and meta description help define how your store shows up on search engines.
            </Text>
          </Grid>
        </Layout.Section>
        <Layout.Section>
          <Card >
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  label="Homepage title" name='title' value={title} onChange={(e) => setTitle(e)} autoComplete="off" maxLength={70}
                  helpText={`${title.length} of 70 characters used`}
                />
                <TextField
                  label="Homepage meta description" name='description' value={description} onChange={(e) => setDescription(e)}
                  autoComplete="off" placeholder='Enter a description to get a better ranking on search engines like Google'
                  maxLength={320} helpText={`${description.length} of 320 characters used`} multiline={4}
                />
                <Button submit fullWidth>Update</Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>

    </Page >
  )
}

export default Preferences