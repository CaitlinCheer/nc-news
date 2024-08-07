import loadingAnimation from "./Assets/loadingAnimation.json";
import Lottie from "lottie-react";

export default function LoadingComponent() {
  return (
    <div className="loading-animation">
      <Lottie animationData={loadingAnimation} />
    </div>
  );
}
