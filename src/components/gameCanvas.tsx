import styled from "styled-components";
import * as BABYLON from "babylonjs";
import { useEffect, useRef, useState } from "react";
import * as BABYLONMAT from "babylonjs-materials";
import Loading from "../components/loading"

const GameCanvasComponent = ({setIsLoading}:any) => {
  const canvasRef = useRef(null);

  let canvas: any;
  let engine: BABYLON.Engine | undefined;
  let scene: BABYLON.Scene;
  let camera: BABYLON.ArcRotateCamera | undefined | BABYLON.FreeCamera
  let mainLight: BABYLON.Light;
  let lefLight: BABYLON.Light;
  let ground: BABYLON.Mesh;
  let space: BABYLON.Mesh;

  const [width, setWidth] = useState<any>()
  const [height, setHeight] = useState<any>()

  const [boxSize, setBoxSize] = useState<any>()
  const [visibility, setVisibilty] = useState<any>(true)

  

  const createScene = () => {
    createBox();
    scene.clearColor = new BABYLON.Color4(0,0,0,0)

    camera = new BABYLON.ArcRotateCamera(
      "mainCamera",
      Math.PI / 8,
      Math.PI / 2.5,
      50,
      new BABYLON.Vector3(0,10,0),
      scene
    );

    //check Box state
    // camera = new BABYLON.FreeCamera("test",new BABYLON.Vector3(0,0,0), scene)
    camera.attachControl(canvas, true);
    camera.lowerBetaLimit = camera.beta;
    camera.upperBetaLimit = camera.beta;
    camera.lowerRadiusLimit = camera.radius;
    camera.upperRadiusLimit = camera.radius;


    // This targets the camera to scene origin
    // camera.setTarget(BABYLON.Vector3.Zero());
    // This attaches the camera to the canvas
    // camera.setTarget(BABYLON.Vector3.Zero())
    // gravity option
    // camera.position.y = 0;

    mainLight = new BABYLON.HemisphericLight(
      "baseLight",
      new BABYLON.Vector3(1, 8, 1),
      scene
    );
  };

  const createBox = () => {
    ground = BABYLON.MeshBuilder.CreateBox(
      "sampleBox",
      { width: 15, height: 3, depth: 15 },
      scene
    );

    const gradientMaterial = new BABYLONMAT.GradientMaterial("grad", scene);
    gradientMaterial.topColor = new BABYLON.Color3(0.12, 0.08, 0.02)
    gradientMaterial.bottomColor = BABYLON.Color3.Black();
    gradientMaterial.offset = 3.5;

    ground.material = gradientMaterial;
  };

  // const createSpace = () => {
  //   space = BABYLON.MeshBuilder.CreateSphere("space",{diameter:120}, scene)

  //   let spaceMaterials = new BABYLONMAT.GradientMaterial("spaceBox", scene);
  //   spaceMaterials.bottomColor = new BABYLON.Color3(0,0,0);
  //   spaceMaterials.backFaceCulling = false;
  //   space.material = spaceMaterials;
  // };

  useEffect(() => {
    console.log(canvasRef, "canvas state");
    canvas = canvasRef.current;

      engine = new BABYLON.Engine(canvas, true);
      scene = new BABYLON.Scene(engine);

      setTimeout(()=>{
        setIsLoading(false)

      },2000)
      // canvas.focus();
      createScene();



    let renderLoop = function () {
      if (scene) {
        scene.render();
      }
      const earthAxis = new BABYLON.Vector3(
        Math.sin((0 * Math.PI) / 180),
        Math.cos((0 * Math.PI) / 180),
        0
      );

      ground.rotate(earthAxis, 0.003, BABYLON.Space.WORLD);
      window.addEventListener("resize", () => {

      })
    };
    engine.runRenderLoop(renderLoop);


    window.addEventListener("resize",()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      console.log("resize")

      return window.removeEventListener("resize", () => { })
    })
  }, []);
  return (
    <>
      <GameCanvas width={width} height={height} id="maincanvas" ref={canvasRef}></GameCanvas>
    </>
  );
};

export default GameCanvasComponent

const GameCanvas = styled.canvas.attrs(()=>{

})`
  position: absolute;
  top: 0;
  left: 0;
  z-index:0 ;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  width: 100%;
  height: 100vh;

  /* @media screen and (max-width:430px) {
    
  } */
`;
