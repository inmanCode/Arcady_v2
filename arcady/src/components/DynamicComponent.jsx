import Placeholder from './Placeholder';
import Page from './Page';
import Banner from './Home/Banner';
import TechSection from './Home/TechSection';
import ServeciesSection from './Home/ServeciesSection';
import ClientsSection from './Home/ClientsSection';

const Components = {
  page: Page,
  HomeBanner: Banner,
  TechSection: TechSection,
  ServicesSection: ServeciesSection,
  ClientsSection: ClientsSection,
};

const DynamicComponent = ({ blok, locale, locales, defaultLocale }) => {
  if (
    typeof Components[blok.component] !== 'undefined' &&
    blok.component?.includes('page')
  ) {
    const Component = Components[blok.component];
    return (
      <>
        <Component
          blok={blok}
          locale={locale}
          locales={locales}
          defaultLocale={defaultLocale}
        />
      </>
    );
  } else if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return (
      <Component
        blok={blok}
        locale={locale}
        locales={locales}
        defaultLocale={defaultLocale}
      />
    );
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
