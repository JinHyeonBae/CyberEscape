import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"

const Glasses = () => {
  const glasses = useGLTF(
    IMAGE_URL.RESOURCE + "/glb/horror2/bloody_glasses.glb",
    true,
  )
  useEffect(() => {
    if (glasses.scene) {
      glasses.scene.position.set(38, 31.2, 58)
      glasses.scene.rotation.set(0, -0.6, 0.1)
    }
  }, [glasses])
  return <primitive object={glasses.scene} scale={35} />
}

export default Glasses
