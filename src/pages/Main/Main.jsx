import Section from '../../components/Section/Section';
import fridge from './assets/images/section3img.svg'
import fabrika from './assets/images/fabrika.svg'
import eclipse from './assets/images/eclipse.png'
import {
  topButtonText,
  topSectionP,
  topSectionH1,
  section3P, section3H1, section3ButtonText
} from "../../utils/text";
import Section2 from '../../components/Section2/Section2';
import Section3 from '../../components/Section3/Section3';



function Main() {
  return (
    <main>
      <Section
        h1={topSectionH1}
        button={topButtonText}
        p={topSectionP}
        img={fabrika}
        eclipse={eclipse}
      />
      <Section2 />
      <Section3
        h1={section3H1}
        button={section3ButtonText}
        p={section3P}
        img={fridge}
        eclipse={eclipse}
      />
    </main>
  );
}

export default Main;
