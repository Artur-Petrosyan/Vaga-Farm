import Section from "../../components/Section/Section";
import { servicesToptext } from "../../utils/text";
import topImg from './assets/images/topImg.svg'
import bottomImg from './assets/images/bottomImg.svg'
import eclipse from './assets/images/eclipse.svg'
import { Context } from "../../App";
import { useContext } from "react";
const Services = () => {
 const {toggleOrderACall} = useContext(Context)
    return (
     <>
        <Section
            h1={'ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ'}
            img={topImg}
            button={'ՊԱՏՎԻՐԵԼ ԶԱՆԳ'}
            p={servicesToptext}
            eclipse={eclipse}
            onClick={toggleOrderACall}
        />
        <Section 
            h1={'ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ'}
            img={bottomImg}
            button={'ՊԱՏՎԻՐԵԼ ԶԱՆԳ'}
            p={servicesToptext}
            eclipse={eclipse}
            reverse={true}
            onClick={toggleOrderACall}

        />
     </>
    )
}

export default Services;