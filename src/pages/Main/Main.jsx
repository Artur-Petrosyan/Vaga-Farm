import styles from './Main.module.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import H1 from '../../components/H1/H1';
import Section from '../../components/Section/Section';
import fabrika from './assets/images/fabrika.svg'
import eclipse from './assets/images/eclipse.png'
import { topButtonText, topSectionP, topSectionH1 } from "../../utils/text"
import Card from '../../components/Card/Card';
import Section2 from '../../components/Section2/Section2';



function Main() {
  return (
    <div>
      <Section
        h1={topSectionH1}
        button={topButtonText}
        p={topSectionP}
        img={fabrika}
        eclipse={eclipse}
      />
      <Section2 />
    </div>
  );
}

export default Main;
