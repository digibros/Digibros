import SEM from "./sem.json";
import SMM from "./smm.json";
import ContentMarketing from "./contentmarketing.json";
import EmailMarketing from "./emailmarketing.json";
import GraphicDesign from "./graphicDesigning.json";
import PosterAndBrochure from "./posterAndBrochure.json";

const SEMLottie = {
  loop: true,
  autoplay: true,
  animationData: SEM,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const SMMLottie = {
  loop: true,
  autoplay: true,
  animationData: SMM,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const ContentMarketingLottie = {
  loop: true,
  autoplay: true,
  animationData: ContentMarketing,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const EmailMarketingLottie = {
  loop: true,
  autoplay: true,
  animationData: EmailMarketing,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const GraphicDesignLottie = {
  loop: true,
  autoplay: true,
  animationData: GraphicDesign,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const PosterAndBrochureLottie = {
  loop: true,
  autoplay: true,
  animationData: PosterAndBrochure,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export {
  SEMLottie,
  SMMLottie,
  ContentMarketingLottie,
  EmailMarketingLottie,
  GraphicDesignLottie,
  PosterAndBrochureLottie,
};
