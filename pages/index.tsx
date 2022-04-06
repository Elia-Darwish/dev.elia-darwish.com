import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import { SocialProfileJsonLd } from 'next-seo'

import avatar from 'public/images/avatar-with-logos.png'
import { Box, Grid } from 'components/primitives'
import { Heading, Text } from 'components/typography'
import { Button } from 'components/Button'
import { styled } from 'stitches.config'

const StyledImage = styled(Image)

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Elia Darwish</title>
        <meta
          name="description"
          content="Elia Darwish is a web developer with a big passion for Frontend. He enjoy creating and refining accessible user interfaces and UI elements."
        />
      </Head>

      <Grid
        as="main"
        css={{
          size: '$full',
          gridCols: 1,
          gridRows: 2,
          gap: '$3',
          '@xl': { gridCols: 2, gridRows: 1, gap: '$8', padding: '$8' },
        }}
      >
        <Box
          css={{
            order: 2,
            alignSelf: 'center',
            '@xl': { order: 2, marginTop: '$32', marginLeft: 'auto', alignSelf: 'start' },
            '@6xl': { justifySelf: 'center', marginTop: '$64' },
          }}
        >
          <Heading
            size={{
              '@md': '3xl',
              '@xl': '4xl',
              '@6xl': '6xl',
            }}
            css={{
              position: 'relative',
              width: 'max-content',
            }}
          >
            <Box
              css={{
                position: 'absolute',
                bottom: '$3',
                left: 'calc(100% + $3)',
                height: '$2',
                width: '$24',
                backgroundColor: '$primary-500',
                backgroundImage: 'url(/images/bg/bg-dark.svg)',
                backgroundSize: '12px',
                backgroundPosition: '-1px -1px',
                zIndex: '$underlay',
                '@xl': {
                  bottom: '$3_5',
                },
                '@6xl': {
                  bottom: '$6',
                },
              }}
            />
            Elia Darwish
          </Heading>

          <Box
            css={{
              maxWidth: '75ch',
              spaceY: '$3',
              marginTop: '$3',
              '@md': { marginTop: '$6' },
              '@6xl': { maxWidth: '100ch' },
            }}
          >
            <Text
              size={{
                '@xl': 'md',
                '@6xl': 'lg',
              }}
            >
              I&apos;m a web developer with a big passion for Frontend. I enjoy creating and refining accessible user
              interfaces and UI elements.
            </Text>
            <Text
              size={{
                '@xl': 'md',
                '@6xl': 'lg',
              }}
              css={{
                display: 'none',
                '@md': { display: 'block' },
              }}
            >
              Likewise, I love playing around with animation and micro-interactions. I&apos;m eager to improve my UI/UX
              skills and can&apos;t wait to dive deeper into WebGL and 3D on the web!
            </Text>
            <Text
              size={{
                '@xl': 'md',
                '@6xl': 'lg',
              }}
              css={{
                display: 'none',
                '@md': { display: 'block' },
              }}
            >
              Digital painting, dog psychology, handcrafts and photography are some of the things I enjoy doing on the
              side.
            </Text>
            <Button css={{ marginTop: '$8' }}>get in touch!</Button>
          </Box>
        </Box>

        <Box css={{ position: 'relative', order: 1, marginX: '$5', '@md': { marginX: 0 }, '@xl': { order: 2 } }}>
          <StyledImage
            src={avatar}
            alt="Elia's avatar"
            layout="fill"
            sizes="90w, (min-width: 768px) 30w, (min-width: 1280px) 40w"
            priority
            quality={80}
            css={{
              objectFit: 'cover',
              objectPosition: 'center top',
              '@md': {
                objectPosition: '80% 50%',
                objectFit: 'contain',
              },
            }}
          />
        </Box>
      </Grid>

      <SocialProfileJsonLd
        type="Person"
        name="Elia Darwish"
        url="https://elia-darwish.dev"
        image={[
          'https://www.elia-darwish.dev/images/avatar-1x1.jpg',
          'https://www.elia-darwish.dev/images/avatar-4x3.jpg',
          'https://www.elia-darwish.dev/images/avatar-16x9.jpg',
        ]}
        jobTitle="Web Developer"
        sameAs={[
          'https://twitter.com/DarwishElia',
          'https://www.linkedin.com/in/elia-darwish/',
          'https://github.com/Elia-Darwish',
          'https://elia-darwish.dev',
        ]}
        worksFor={{
          '@type': 'Organization',
          name: 'shetani oHG',
        }}
      />
      <script type="application/ld+json"></script>
    </Fragment>
  )
}

export default Home
