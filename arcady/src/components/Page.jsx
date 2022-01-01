import DynamicComponent from './DynamicComponent';
import { sbEditable } from '@storyblok/storyblok-editable';

const Page = ({ blok, locale, locales, defaultLocale }) => {
  return (
    <main {...sbEditable(blok)} key={blok._uid}>
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent
              blok={blok}
              key={blok._uid}
              locale={locale}
              locales={locales}
              defaultLocale={defaultLocale}
            />
          ))
        : null}
    </main>
  );
};

export default Page;
