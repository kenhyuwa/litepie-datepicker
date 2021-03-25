const path = require('path');
const fs = require('fs-extra');
const dayjsLocale = './node_modules/dayjs/esm/locale';
const localeSrc = './src/locale';

async function main() {
  await fs.remove(localeSrc);
  const locales = await fs.readdir(dayjsLocale);
  for (const locale of locales) {
    await fs.copySync(
      `${dayjsLocale}/${locale}`,
      path.join(__dirname, `./src/locale/${locale}`)
    );
    await fs.readFile(`${localeSrc}/${locale}`, 'utf8', function(err, data) {
      if (err) return console.log(err);
      const result = data.replace(/..\/index/g, 'dayjs');

      fs.writeFile(`${localeSrc}/${locale}`, result, 'utf8', function(err) {
        if (err) return console.log(err);
      });
    });
  }
}

main().catch(err => {
  console.error(err);
});
