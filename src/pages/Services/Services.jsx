import Section from "../../components/Section/Section";
import { servicesToptext } from "../../utils/text";
import topImg from './assets/images/topImg.svg'
import bottomImg from './assets/images/bottomImg.svg'
import eclipse from './assets/images/eclipse.svg'
const Services = () => {
    return (
     <>
        <Section
            h1={'ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ'}
            img={topImg}
            button={'ՊԱՏՎԻՐԵԼ ԶԱՆԳ'}
            p={servicesToptext}
            eclipse={eclipse}
        />
        <Section 
            h1={'ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ'}
            img={bottomImg}
            button={'ՊԱՏՎԻՐԵԼ ԶԱՆԳ'}
            p={servicesToptext}
            eclipse={eclipse}
            reverse={true}
        />
     </>
    )
}

export default Services;