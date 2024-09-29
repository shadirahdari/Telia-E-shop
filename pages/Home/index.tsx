import React from 'react';
// import Filters from '@/app/components/Filter';
import FilterBy from '@/app/components/FilterBy';
import { ProductsList } from '@/app/components/ProductsList';
import { Form as ModalOrder } from '@/app/components/Form';
import SortBy from '@/app/components/SortBy';
import { ModalProvider } from '@/app/Store/modal-context';


// Static images are placed inside the 'public' folder
const bannerMobile = '/assets/images/hero_banner_mobile.png';
const bannerTablet = '/assets/images/hero_banner_tablet.png';
const bannerDesktop = '/assets/images/hero_banner.png';

const HomePage: React.FC = () => {
  return (
    <ModalProvider>
      <main>
        <ModalOrder />
        <div>
          <div>
            <picture>
              <source srcSet={bannerDesktop} media="(min-width: 1440px)" />
              <source srcSet={bannerTablet} media="(min-width: 768px)" />
              <source srcSet={bannerMobile} media="(max-width: 767px)" />
              <img
                src={bannerMobile}
                alt="screen of a mobile phone with a purple background"
                loading="lazy"
                style={{ width: '100%' }}
              />
            </picture>
          </div>
          <div style={{ padding: '0 1.25rem', margin: 'auto', marginTop: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                Mobile Phones & Accessories
              </h1>
              <p style={{ fontSize: '1rem', marginTop: '1rem', maxWidth: '75%' }}>
                Sapien elit ipsum suspendisse pellentesque netus viverra cursus
                aenean cursus. Et eleifend enim aliquet a sagittis tellus
                scelerisque faucibs.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1.25rem', marginTop: '3rem' }}>
              <FilterBy />
              <SortBy />
            </div>
          </div>
        </div>
        <ProductsList />
      </main>
    </ModalProvider>
  );
};

export default HomePage;
