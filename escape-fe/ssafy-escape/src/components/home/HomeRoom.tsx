import IMAGE_URL from "@/constants/host"
import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import { Mesh } from "three"

interface RoomProps {
  onLoaded: (isLoaded: boolean) => void
}

const HomeRoom = ({ onLoaded }: RoomProps) => {
  const gltf = useGLTF(
    IMAGE_URL.RESOURCE + "/glb/home_Room.glb",
    true,
  )

  useEffect(() => {
    if (gltf) {
      onLoaded(true)
    }
  }, [gltf, onLoaded])

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [gltf])

  return <primitive object={gltf.scene} scale={1} />
}

export default HomeRoom
