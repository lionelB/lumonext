// @flow
import React from 'react'
import { styled } from 'styletron-react'

import ContentWrapper from './ContentWrapper'
import SocialLinks from './social-links'
import type { SocialLink } from '../lib/types'

import colors from '../lib/colors'
import { cx } from '../lib/utils'

class Footer extends React.Component {
  props: {
    email: string,
    mobile: string,
    socialNetworks: SocialLink[]
  }

  render() {
    return (
      <FooterSection>
        <Border viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0v2L0 40V0h1440z" fill="#FFF" fillRule="evenodd" />
        </Border>
        <ContentWrapper maxWidth={'35em'} margin={'3rem'}>
          <Hey>Vous souhaitez travailler avec moi ?</Hey>
          <H2>Contactez moi !</H2>
          <SocialLinks links={this.props.socialNetworks} />
          <Paragraph>
            Je réponds aux email, ou au téléphone,
      mais assez rarement aux proposition de CDI sur linkedin.
      Vous pouvez aussi me faire signe sur twitter ou github
      ou alors consulter ma page freelance sur le reseau hopwork.
      Je me ferais un plaisir de vous répondre rapidement.
            </Paragraph>
        </ContentWrapper>
      </FooterSection>
    )
  }
}

const FooterSection = styled('footer', {
  overflow: 'hidden',
  width: '100%',
  backgroundColor: colors.darkblue,
})

const Border = styled('svg', {
  display: 'block',
  position: 'relative',
  top: '-1px',
});

const Hey = styled('p', {
  color: colors.black,
  textAlign: 'center',
  fontStyle: 'italic',
  fontSize: '1.9em',
  marginBottom: '0',
})

const H2Base = ({ className, children }) => (
  <h2 className={cx(className, 'font-montserrat')}>{children}</h2>
)

const H2 = styled(H2Base, {
  color: '#fff',
  margin: '0 0 .5em',
  fontSize: '4.3em',
  textAlign: 'center',
})

const Paragraph = styled('p', {
  color: colors.lightGray,
  fontStyle: 'italic',
  fontSize: '1.5em',
})


export default Footer
