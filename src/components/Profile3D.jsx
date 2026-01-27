import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress, Stage } from '@react-three/drei';

function Loader() {
    const { progress } = useProgress();
    return <Html center><div style={{ color: 'white' }}>Carregando... {progress.toFixed(0)}%</div></Html>;
}

function Model(props) {
    // Load the GLTF model using exact path relative to base
    const glbPath = import.meta.env.BASE_URL + 'matheus_3d.glb';
    const { scene } = useGLTF(glbPath);
    return <primitive object={scene} {...props} />;
}

const Profile3D = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 75 }}>
                <Suspense fallback={<Loader />}>
                    <Stage environment={null} intensity={0.5} contactShadow={false} shadowBias={-0.0015}>
                        <Model />
                    </Stage>
                </Suspense>

                <OrbitControls
                    makeDefault
                    autoRotate={true}
                    autoRotateSpeed={15}
                    enableZoom={true}
                    enablePan={false}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
};

export default Profile3D;
