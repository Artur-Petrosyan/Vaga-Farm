import img from '../components/Card/assets/images/cardImg.svg'
import arrowTopImg from "../components/Card/assets/icons/arrowTopBottom.svg"
import arrowLeftRight from "../components/Card/assets/icons/arrowLeftRight.svg"
import layers from '../components/Card/assets/icons/layer.svg'
import pcs from '../components/Card/assets/icons/pcs.svg'

export const getItems = () => {
    console.log("WORKED");
    return (
        [
            {
                id: 1,
                text: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
                sizes: {
                    width: '7.5սմ',
                    height: '7.5սմ',
                },
                image: img,
                arrowTopImg: arrowTopImg,
                arrowLeftRight: arrowLeftRight,
                layers: {
                    img: layers,
                    text: '12 շերտ'
                },

                pcs: {
                    img: pcs,
                    text: "10 հատ"
                }
            },
            {
                id: 2,
                text: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ (ինդիվիդուալ)',
                sizes: {
                    width: '7.5սմ',
                    height: '7.5սմ',
                },
                image: img,
                arrowTopImg: arrowTopImg,
                arrowLeftRight: arrowLeftRight,
                layers: {
                    img: layers,
                    text: '8 շերտ'
                },

                pcs: {
                    img: pcs,
                    text: "10 հատ"
                }

            },
            {
                id: 3,
                text: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
                sizes: {
                    width: '5սմ',
                    height: '5սմ',
                },
                image: img,
                arrowTopImg: arrowTopImg,
                arrowLeftRight: arrowLeftRight,
                layers: {
                    img: layers,
                    text: '12 շերտ'
                },

                pcs: {
                    img: pcs,
                    text: "10 հատ"
                }
            },
            {
                id: 4,
                text: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
                sizes: {
                    width: '5սմ',
                    height: '5սմ',
                },
                image: img,
                arrowTopImg: arrowTopImg,
                arrowLeftRight: arrowLeftRight,
                layers: {
                    img: layers,
                    text: '8 շերտ'
                },

                pcs: {
                    img: pcs,
                    text: "100 հատ"
                }
            },
            {
                id: 5,
                text: 'բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)',
                sizes: {
                    width: '5սմ',
                    height: '5սմ',
                },
                image: img,
                arrowTopImg: arrowTopImg,
                arrowLeftRight: arrowLeftRight,
                layers: {
                    img: layers,
                    text: '12 շերտ'
                },

                pcs: {
                    img: pcs,
                    text: "10 հատ"
                }
            },
            {
                id: 6,
                text: 'բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)',
                sizes: {
                    width: '5սմ',
                    height: '5սմ',
                },
                image: img,
                arrowTopImg: arrowTopImg,
                arrowLeftRight: arrowLeftRight,
                layers: {
                    img: layers,
                    text: '8 շերտ'
                },
                pcs: {
                    img: pcs,
                    text: "10 հատ"
                }
            }
        ]
    )
}