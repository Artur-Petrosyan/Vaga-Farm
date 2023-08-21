import Section from "../Section/Section"

import { useNavigate } from "react-router-dom";

const Section3 = ({ h1, p, button, img, eclipse }) => {
    const navigate = useNavigate()
    return (
        <Section
            h1={h1}
            button={button}
            p={p}
            img={img}
            eclipse={eclipse}
            onClick={() => navigate('/services')}
        />
    )
}

export default Section3;