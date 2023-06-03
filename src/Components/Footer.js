import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    pdding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1.para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Asif Khan</h1>
          <PText>
            A freelance web developer and Mern Stack developer from jamianagar,
            Delhi. I always make websites that have unique designs and also has
            a good performance rate.
          </PText>
        </div>
        <div className="footer_col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+918084237632',
                path: 'tel:+918084237632',
              },
              {
                title: 'asifyajdankhan416@gmail.com',
                path: 'mailto:asifyajdankhan416@gmail.com',
              },
              {
                title: 'Jamia Nagar Okhla, New Delhi',
                path: 'https://goo.gl/maps/vJWd1nn21js9C25o9',
              },
            ]}
          />
        </div>
        <div className="footer_col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/asifyajdankhan416',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/asifyajdankhan',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/md-asif-khan-b7659918a/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/asifyajdankhan/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>@ 2023 - Asif Khan | Designed by myself</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
