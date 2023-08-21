import styles from './Map.module.scss'

const Map = () => {
    return (
        <div className={styles.map}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.1021908009993!2d44.567348206424676!3d40.18259866344456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcb207859c11%3A0x4f0ca978fff7cf0!2s2%20Mikoyan%20St%2C%20Yerevan%200079!5e0!3m2!1sru!2sam!4v1692482312634!5m2!1sru!2sam"
                width={'100%'}
                height={'266px'}
                loading="lazy"
            >
            </iframe>
        </div>
    )
}

export default Map