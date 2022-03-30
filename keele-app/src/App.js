
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import './i18n.js'



function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div> keele teema ja bootstrap nuppud

      <Button variant="info" onClick={ () => i18n.changeLanguage('en')}>EN</Button>
      <Button variant="info" onClick={ () => i18n.changeLanguage('fr')}>FR</Button>
      </div>
      <p/>
      <div>
        <lu>
        <Button variant="primary">{t("Primary")}</Button>{' '}
        <Button variant="secondary">{t("Secondary")}</Button>{' '}
        <Button variant="success">{t("Success")}</Button>{' '}
        <Button variant="warning">{t("Warning")}</Button>{' '}
        <Button variant="danger">{t("Danger")}</Button>{' '}
        <Button variant="info">{t("Info")}</Button>{' '}
        <Button variant="light">{t("Light")}</Button>{' '}
        <Button variant="dark">{t("Dark")}</Button>{' '}
        <Button variant="link">{t("Link")}</Button>{' '}
        </lu>
      </div>
      <p/>
      <div className="d-grid gap-2">
        <Button variant="danger" size="lg">
        {t("Block-level-button")}
        </Button>
      </div>

    </div>
  );
}

export default App;
