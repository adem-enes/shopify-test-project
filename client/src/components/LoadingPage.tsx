import { Card, Layout, LegacyCard, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer } from '@shopify/polaris'

const LoadingPage = () => {
    return (
        <SkeletonPage>
            <Layout>
                <Layout.Section variant='oneThird'>
                    <LegacyCard sectioned>
                        <TextContainer>
                            <SkeletonDisplayText size="small" />
                            <SkeletonBodyText />
                        </TextContainer>
                    </LegacyCard>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <SkeletonDisplayText size="small" />
                        <SkeletonBodyText lines={6} />
                    </Card>
                </Layout.Section>
            </Layout>
        </SkeletonPage >
    )
}

export default LoadingPage