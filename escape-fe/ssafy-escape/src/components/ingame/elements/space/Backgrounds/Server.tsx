import React, { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import IMAGE_URL from "@/constants/host"

const Server = () => {
  const url = IMAGE_URL.RESOURCE + "/glb/engine_computer1.glb"
  const gltf = useGLTF(url, true)

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [gltf])

  return (
    <primitive
      object={gltf.scene}
      position={[119, 12.4, -115]}
      scale={4}
      rotation={[0, -Math.PI / 2, 0]}
    />
  )
}

export default Server
