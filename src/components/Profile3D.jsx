import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress } from '@react-three/drei';

function Loader() {
    const { progress } = useProgress();
    return <Html center><div style={{ color: 'white' }}>Carregando... {progress.toFixed(0)}%</div></Html>;
}

function Model(props) {
    // Load the GLTF model using exact path relative to base
    const glbPath = import.meta.env.BASE_URL + 'matheus_3d.glb';
    const { nodes, scene } = useGLTF(glbPath);
    const meshRef = useRef();

    // Find the camera node (trying common names or fallback to first camera found)
    const cameraNode = nodes['Câmera'] || nodes['Camera'] || Object.values(nodes).find(n => n.isCamera);

    return (
        <group>
            {/* If a camera exists in the file, use it as default */}
            {cameraNode && <primitive object={cameraNode} makeDefault />}

            {/* Render the scene (which contains the mesh) */}
            <primitive object={scene} ref={meshRef} {...props} />
        </group>
    );
}

const Profile3D = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Canvas>
                <Suspense fallback={<Loader />}>
                    {/* No manual PerspectiveCamera here, we rely on the GLB's camera */}

                    {/* Render the loaded model with finalized values */}
                    <Model
                        position={[0, -0.4, 0.1]}
                        rotation={[0.5, -2.8, 0]}
                        scale={9.6}
                    />
                </Suspense>

                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    rotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
};

export default Profile3D;
