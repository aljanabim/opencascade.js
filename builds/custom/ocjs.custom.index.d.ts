import init, { OpenCascadeInstance } from "./customBuild.simple";
export * from "./customBuild.simple";

type OpenCascadeModuleObject = {
    [key: string]: any;
};

export default function initOpenCascade(settings?: {
    mainJS?: init;
    mainWasm?: string;
    worker?: string;
    libs?: string[];
    module?: OpenCascadeModuleObject;
}): Promise<OpenCascadeInstance>;
