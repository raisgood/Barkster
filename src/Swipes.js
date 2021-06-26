//import { StylesProvider } from '@material-ui/core'
import React, {useState, Swipeable, RectButton, styles} from 'react'
import BarkerCards from './BarkerCards';

function Swipes({ users, currentIndex, handleLike, handlePass, swipesRef }) {
    const [willLike, setWillLike] = useState(false)
    const [willPass, setWillPass] = useState(false)
    const renderLeftActions = () => {
        return (
            <RectButton style={styles.container}>
                <BarkerCards user={users[currentIndex + 1]}></BarkerCards>
            </RectButton>
        )
    }
    const renderRightActions = () => {
        return (
            <RectButton style={styles.container}>
                <BarkerCards user={users[currentIndex + 1]}></BarkerCards>
            </RectButton>
        )
    }

  return (
    <Swipeable
    ref={swipesRef}
    friction={2}
    leftThreshold={40}
    rightThreshold={40}
    renderLeftActions={renderLeftActions}
    renderRightActions={renderRightActions}
    onSwipeableLeftOpen={() => {
      setWillLike(false)
      handleLike()
    }}
    onSwipeableRightOpen={() => {
      setWillPass(false)
      handlePass()
    }}
    onSwipeableLeftWillOpen={() => setWillLike(true)}
    onSwipeableRightWillOpen={() => setWillPass(true)}
  >
    <BarkerCards user={users[currentIndex]} willLike={willLike} willPass={willPass} />
  </Swipeable>
  )
}

export default Swipes
