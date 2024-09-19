import InfoCard from '../info-card'
import styles from './infoCardGroupStyles.module.css'
import infoCardData from '../../dummyData/infoCardData'

const InfoCardGroup = () => {
  return (
    <div className={styles.infoCardGroupContainer}>
      {infoCardData.map((data, i) => {
        return <InfoCard key={`icd${i}`} data={data} />
      })}
    </div>
  )
}

export default InfoCardGroup
