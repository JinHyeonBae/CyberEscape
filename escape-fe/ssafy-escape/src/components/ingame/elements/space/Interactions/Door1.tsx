import { useEffect, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { AnimationMixer } from "three"
import DoorBox from "../../common/DoorBox"
import * as THREE from "three"
import IMAGE_URL from "@/constants/host"

const Door1 = ({
  onAir,
  setOnAir,
  position,
  rotation,
  setInteractNum,
}: any) => {
  const { scene, animations } = useGLTF(
    // IMAGE_URL.RESOURCE + "/glb/door3.glb",
    IMAGE_URL.RESOURCE + "/glb/door_01.glb",
    true,
  )
  const doorRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isAnimationActivated, setIsAnimationActivated] = useState(false)

  useEffect(() => {
    if (!scene || !animations || animations.length === 0) return

    const mixer = new AnimationMixer(scene)
    const action = mixer.clipAction(animations[0])
    action.setLoop(THREE.LoopOnce, 1)

    if (isAnimationActivated) {
      action.play()
    } else {
      action.stop()
    }

    const update = () => {
      mixer.update(0.01)
    }

    let animateId: number

    if (isAnimationActivated) {
      animateId = requestAnimationFrame(function animate() {
        update()
        animateId = requestAnimationFrame(animate)
      })
    }

    return () => {
      if (animateId) {
        cancelAnimationFrame(animateId)
      }
      mixer.stopAllAction()
    }
  }, [scene, animations, isAnimationActivated])

  useEffect(() => {
    if (scene) {
      setIsLoaded(true)
    }
  }, [scene])

  const handleClick = () => {
    if (onAir) return
    const new_audio = new Audio(
      IMAGE_URL.RESOURCE + "/sound/door_open.mp3",
    )
    new_audio.play()
    setIsAnimationActivated(true)
    setTimeout(() => {
      setIsAnimationActivated(false)
    }, 7000)
  }

  return isLoaded ? (
    <>
      <primitive
        object={scene}
        ref={doorRef}
        scale={24}
        position={position}
        rotation={rotation}
        onClick={handleClick}
        onPointerOver={() => {
          setInteractNum(3)
        }}
        onPointerOut={() => {
          setInteractNum(1)
        }}
      />
      <DoorBox position={position} args={[2, 20, 10]} color={"red"} />
    </>
  ) : null
}

export default Door1
