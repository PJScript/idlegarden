import { NextRouter, useRouter } from "next/router";

const routingDelaySecond = (second: number, router: NextRouter, path?: string) => {
    const getRouter = router
    
    if(!second){
        console.log("please check -routingDelaySecond Parameter (second) ")
        alert("check Parameter!")
    }else{
        if(!path){
            setTimeout(()=>{
                router.push("/")
              }, second)
        }else{
            setTimeout(()=>{
              router.push(path)
            }, second * 1000)
        }

    }
    return;
}

export default routingDelaySecond